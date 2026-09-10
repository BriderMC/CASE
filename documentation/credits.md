# CASE Credits

## Flint and copper tools

CASE incorporates the textures, translated display names, recipes, and supporting
datapack definitions from Shvara's [Stone to Copper Tools](https://modrinth.com/datapack/stone-to-copper-tools)
version `0.2_1.21-1.21.8` and [Wooden to Flint Tools](https://modrinth.com/datapack/wooden-to-flint-tools)
version `1.14-1.21.1-0.1`. Both source projects declare the MIT license.
The standalone mod wrappers are removed. Vanilla item IDs remain unchanged.
Assets are merged into `resourcepacks/CASE Resourcepack.zip`; data lives under
`kubejs/data/minecraft/` and `kubejs/data/copper_tools/`.
See [the retained MIT notice](third-party/shvara-tools-MIT.txt).

## Adjusted Grip

CASE incorporates the item-model JSON from [Adjusted Grip](https://modrinth.com/resourcepack/adjusted-grip),
Small variant, into `resourcepacks/CASE Resourcepack.zip` at
`assets/create/models/item/extendo_grip/item.json`. The standalone resource pack
is removed. The source declares All Rights Reserved; this attribution does not
relicense that asset under CASE's MIT license.

## Sable physics data

CASE loads the following source datapack definitions through `kubejs/data/`:

- [Sable: Weighted - Create: TFMG](https://modrinth.com/mod/sable-weighted-create-tfmg),
  installed archive `sable-weighted_tfmg-1.0.0.jar`: 326 JSON files, Unlicense.
- [Sable: Weighted - Create: Deco](https://modrinth.com/mod/sable-weighted-create-deco),
  installed archive `sable-weighted_createdeco-1.0.2.jar`: 283 JSON files, Unlicense.
- [Create Aeronautics: Sable Mass Mod Compatibility](https://www.curseforge.com/projects/1557718/files/8177900),
  CurseForge datapack `massweightcompat-1.0.2+1.21.1.zip`: 44 data files.

Original namespaces and data contents are preserved. No classes or mod JARs
from these archives are included in CASE's distribution.

## Title

CASE's title was created using [Minecraft Title Generator](https://ewanhowell.com/plugins/minecraft-title-generator/) by Ewan Howell.

## Logo background

CASE's logo background was created using [Pixel Space Background Generator](https://deep-fold.itch.io/space-background-generator) by Deep-Fold.

## Create: Metalwork Andesite Dust texture

CASE includes a local copy of the Andesite Dust texture used by the custom
`case:andesite_dust` and `case:andesite_alloy_dust` items.

- Source project: [Create: Metalwork](https://github.com/AverageAnime/create-metalwork)
- Author: AverageAnime
- License: [GNU General Public License v3.0](https://github.com/AverageAnime/create-metalwork/blob/master/LICENSE)
- Original asset path: `assets/createmetalwork/textures/item/andesite_dust.png`
- CASE copy: `kubejs/assets/case/textures/item/andesite_dust.png`
- CASE crushed-Andesite copy: `kubejs/assets/case/textures/item/crushed_andesite.png`
- Create Metalwork supplied a separate `assets/createmetalwork/textures/item/crushed_andesite.png` texture, which is copied to the CASE item path above.
- The CASE molten Andesite and molten Andesite Alloy fluids use KubeJS thick-fluid rendering with CASE tint colors; the unused Metalwork fluid texture copies were removed.

The Create: Metalwork project notes that some of its item textures are based
on assets found in Create. That upstream attribution is retained here; see
the Create project for its applicable asset licensing.

## Steel armor inventory textures

CASE uses the supplied 16x16 steel armor inventory textures for the renamed
vanilla diamond armor items.

- Source project: [Foreck Textures](https://github.com/Foreck1/foreck-textures)
- CASE copies: `resourcepacks/CASE Resourcepack/assets/minecraft/textures/item/diamond_*.png`
- Used assets: `steel_helmet.png`, `steel_chestplate.png`, `steel_leggings.png`, and `steel_boots.png`

## Advanced Circuit Board texture

CASE uses the supplied red incomplete-circuit texture for the custom Advanced
Circuit Board.

- Source project: [unused-textures](https://github.com/malcolmriley/unused-textures)
- Original asset: `part_electronic_incomplete_red_circuit.png`
- CASE copy: `resourcepacks/CASE Resourcepack/assets/case/textures/item/advanced_circuit_board.png`

## Create: TFMG Community Edition textures

CASE reuses a substantial number of textures from Create: TFMG Community
Edition throughout the pack's custom presentation. This includes the TFMG
steel sword, pickaxe, axe, shovel, and hoe textures used for the resource-pack
Steel Tools, as well as TFMG textures referenced by CASE-created items.

- Source project: [Create: TFMG Community Edition](https://github.com/Metallurgists-of-Create/Create-TFMG-CE)
- Version used by CASE: `v1.2.4b`
- Reused asset example: `assets/tfmg/textures/item/steel_*.png`
- CASE resource-pack copies: `resourcepacks/CASE Resourcepack/assets/tfmg/textures/item/`

TFMG Community Edition remains a required mod in the pack; this entry records
the reused texture assets and their source.

## Brick Furnace textures

CASE reuses the Brick Furnace mod's furnace, blast furnace, and smoker
textures as resource overrides for the corresponding vanilla blocks. The
Brick Furnace mod itself is not included; only the supplied texture assets
are used.

- Source project: [Brick Furnace](https://modrinth.com/mod/brick-furnace)
- Source repository: [cech12/BrickFurnace](https://github.com/cech12/BrickFurnace)
- Author: cech12
- License: [MIT License](https://github.com/cech12/BrickFurnace/blob/master/LICENSE)
- CASE copy: `kubejs/assets/minecraft/textures/block/`
- Reused assets: furnace, blast furnace, and smoker front, lit-front, side,
  top, and smoker bottom textures, including the supplied animation metadata.
