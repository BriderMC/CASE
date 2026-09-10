"""Validate the release snapshot and, optionally, its CurseForge archive."""
import argparse
import hashlib
import json
from pathlib import Path, PurePosixPath
import tomllib
import zipfile

ROOT = Path(__file__).resolve().parents[1]


def digest(path, algorithm):
    return hashlib.new(algorithm, path.read_bytes()).hexdigest()


def validate(archive_path=None):
    pack = tomllib.loads((ROOT / 'pack.toml').read_text('utf-8'))
    assert pack['author'] == 'BriderMC'
    assert digest(ROOT / 'index.toml', pack['index']['hash-format']) == pack['index']['hash']
    index = tomllib.loads((ROOT / 'index.toml').read_text('utf-8'))
    downloads, overrides = set(), {}
    for item in index['files']:
        relative = PurePosixPath(item['file'])
        assert not relative.is_absolute() and '..' not in relative.parts
        path = ROOT / relative
        assert digest(path, index['hash-format']) == item['hash'], relative
        assert path.suffix.lower() != '.jar', relative
        if item.get('metafile'):
            meta = tomllib.loads(path.read_text('utf-8'))
            assert meta['download']['mode'] == 'metadata:curseforge'
            source = meta['update']['curseforge']
            pair = (source['project-id'], source['file-id'])
            assert pair not in downloads
            downloads.add(pair)
        else:
            overrides[item['file']] = path.read_bytes()
    release = json.loads((ROOT / 'documentation/release.json').read_text('utf-8'))
    assert pack['version'] == release['version']
    assert len(downloads) == release['download_references']
    assert not {8013976, 8622762}.intersection(file_id for _, file_id in downloads)
    for folder in ['mods', 'resourcepacks', 'shaderpacks']:
        for path in (ROOT / folder).iterdir():
            if path.is_file():
                assert path.name.endswith('.pw.toml') or (
                    folder == 'resourcepacks' and path.name == 'CASE Resourcepack.zip'
                ) or (folder == 'shaderpacks' and path.suffix == '.txt'), path
    for removed in ['configureddefaults/options.txt',
                    'configureddefaults/defaultconfigs/ftbqoptimizer.snbt',
                    'config/starterstructure/schematics/spawn.schem',
                    'fancymenu_data/last_world.fmdata']:
        assert removed not in overrides
    if archive_path:
        with zipfile.ZipFile(archive_path) as archive:
            assert archive.testzip() is None
            assert not any(n.lower().endswith('.jar') for n in archive.namelist())
            manifest = json.loads(archive.read('manifest.json'))
            assert manifest['version'] == pack['version']
            assert manifest['author'] == pack['author']
            assert {(x['projectID'], x['fileID']) for x in manifest['files']} == downloads
            actual = {n.removeprefix('overrides/'): archive.read(n)
                      for n in archive.namelist() if n.startswith('overrides/') and not n.endswith('/')}
            assert actual == overrides, 'Archive overrides differ from the release snapshot'
    print(f"Validated CASE {pack['version']}: {len(downloads)} CurseForge references, {len(overrides)} overrides.")


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--archive', type=Path)
    validate(parser.parse_args().archive)
