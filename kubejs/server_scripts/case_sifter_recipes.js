// CASE Create Sifter progression recipes.
// Andesite and Brass remain the early Overworld meshes.
// Advanced Steel, Osmium, and Tungsten use the Brass Sifter.
// Steel uses Andesite-level primary chances, provides extras, and works in a normal sifter.
ServerEvents.recipes(event => {
  const mesh = {
    andesite: 'createsifter:andesite_mesh',
    brass: 'createsifter:brass_mesh',
    steel: 'createsifter:sturdy_mesh',
    advancedSteel: 'createsifter:advanced_sturdy_mesh',
    osmium: 'createsifter:custom_mesh',
    tungsten: 'createsifter:advanced_custom_mesh'
  }

  function result(id, chance, count) {
    const output = { id: id, chance: chance }
    if (count) output.count = count
    return output
  }

  function sifting(id, input, meshId, results, advanced) {
    event.custom({
      type: 'createsifter:sifting',
      input: { item: input },
      mesh: { count: 1, id: meshId },
      processingTime: 500,
      advancedSifter: !!advanced,
      requirements: advanced ? [{ type: 'mechanicals:max_speed', value: 32 }] : [],
      results: results
    }).id(`case:sifting/${id}`)
  }

  const overworldInputs = [
    'minecraft:gravel', 'minecraft:sand', 'minecraft:basalt', 'createsifter:crushed_basalt',
    'minecraft:andesite', 'minecraft:granite', 'minecraft:diorite',
    'minecraft:calcite', 'minecraft:deepslate', 'minecraft:tuff', 'minecraft:blackstone', 'createsifter:dust'
  ]
  const marsInputs = [
    'northstar:mars_stone', 'northstar:mars_deep_stone',
    'northstar:mars_soil', 'northstar:mars_sand', 'northstar:mars_gravel'
  ]

  overworldInputs.concat(marsInputs).forEach(input => {
    event.remove({ type: 'createsifter:sifting', input: { item: input } })
  })

  // Remove Create Sifter's built-in Gravel and Basalt variants so their old
  // nugget, coal, and flint outputs cannot remain alongside CASE recipes.
  event.remove({ id: /^createsifter:.*gravel.*/ })
  event.remove({ id: /^createsifter:.*basalt.*/ })

  // Replace the built-in dust recipes so Andesite and Brass Meshes do not
  // retain Create Sifter's default bonus outputs.
  event.remove({ id: 'createsifter:sifting/dirt_string' })
  event.remove({ id: 'createsifter:sifting/dirt_string_waterlogged' })
  event.remove({ id: 'createsifter:sifting/dirt_andesite' })
  event.remove({ id: 'createsifter:sifting/dust_andesite' })
  event.remove({ id: 'createsifter:sifting/dust_brass' })
  event.remove({ id: 'createsifter:sifting/compat/ae2_dust_andesite' })
  event.remove({ id: 'createsifter:sifting/compat/ae2_dust_brass' })
  event.remove({ id: 'createsifter:sifting/compat/ae2_sand_andesite' })
  event.remove({ id: 'createsifter:sifting/compat/ae2_sand_brass' })
  event.remove({ id: 'createsifter:sifting/compat/ae2_sand_advanced_brass' })
  event.remove({ id: /^createsifter:sifting\/compat\/.*dirt.*/ })

  // Mesh Frame clay recovery from common loose materials.
  const dirtSeedResults = []
  const seedIds = Ingredient.of('#c:seeds').getItemIds().toArray()
  for (let i = 0; i < seedIds.length; i++) {
    dirtSeedResults.push(result(seedIds[i], 0.10))
  }
  sifting('dirt_string', 'minecraft:dirt', 'createsifter:string_mesh', dirtSeedResults)
  sifting('dirt_andesite', 'minecraft:dirt', mesh.andesite, dirtSeedResults)
  sifting('sand_string', 'minecraft:sand', 'createsifter:string_mesh', [
    result('minecraft:clay_ball', 0.50), result('minecraft:flint', 0.25)
  ])
  sifting('gravel_string', 'minecraft:gravel', 'createsifter:string_mesh', [
    result('minecraft:clay_ball', 0.50), result('minecraft:flint', 0.25)
  ])

  // Andesite Mesh: pebbles are intentionally exclusive to this early mesh.
  sifting('gravel_andesite', 'minecraft:gravel', mesh.andesite, [
    result('createsifter:stone_pebble', 0.50), result('mekanism:dust_iron', 0.02),
    result('mekanism:dust_copper', 0.01), result('mekanism:dust_gold', 0.01),
    result('minecraft:clay_ball', 0.25)
  ])
  sifting('sand_andesite', 'minecraft:sand', mesh.andesite, [result('createsifter:stone_pebble', 0.50), result('minecraft:redstone', 0.10)])
  sifting('basalt_andesite', 'createsifter:crushed_basalt', mesh.andesite, [result('createsifter:stone_pebble', 0.50), result('northstar:salt', 0.15)])
  sifting('andesite_andesite', 'minecraft:andesite', mesh.andesite, [result('createsifter:stone_pebble', 0.50), result('mekanism:dust_copper', 0.10)])
  sifting('granite_andesite', 'minecraft:granite', mesh.andesite, [result('createsifter:stone_pebble', 0.50), result('mekanism:dust_gold', 0.10)])
  sifting('diorite_andesite', 'minecraft:diorite', mesh.andesite, [result('createsifter:stone_pebble', 0.50), result('mekanism:dust_iron', 0.10)])
  sifting('calcite_andesite', 'minecraft:calcite', mesh.andesite, [result('createsifter:stone_pebble', 0.50), result('minecraft:bone_meal', 0.10)])
  sifting('deepslate_andesite', 'minecraft:deepslate', mesh.andesite, [result('createsifter:stone_pebble', 0.50), result('minecraft:coal', 0.10)])
  sifting('tuff_andesite', 'minecraft:tuff', mesh.andesite, [result('createsifter:stone_pebble', 0.50), result('northstar:volcanic_ash_item', 0.10)])
  sifting('blackstone_andesite', 'minecraft:blackstone', mesh.andesite, [result('createsifter:stone_pebble', 0.50), result('northstar:volcanic_ash_item', 0.10)])
  sifting('dust_andesite', 'createsifter:dust', mesh.andesite, [result('createsifter:stone_pebble', 0.50), result('createmetallurgy:zinc_dust', 0.10)])

  // Brass Mesh: useful Overworld outputs without pebbles.
  const brass = [
    ['sand', 'minecraft:redstone'],
    ['andesite', 'mekanism:dust_copper'], ['granite', 'mekanism:dust_gold'],
    ['diorite', 'mekanism:dust_iron'], ['calcite', 'minecraft:bone_meal'],
    ['deepslate', 'minecraft:coal'], ['tuff', 'northstar:volcanic_ash_item'],
    ['blackstone', 'northstar:volcanic_ash_item'], ['dust', 'createmetallurgy:zinc_dust']
  ]
  brass.forEach(([name, output]) => {
    const input = name === 'dust' ? 'createsifter:dust' : `minecraft:${name}`
    sifting(`${name}_brass`, input, mesh.brass, [result(output, 0.25)])
  })
  sifting('basalt_brass', 'createsifter:crushed_basalt', mesh.brass, [result('northstar:salt', 0.30)])
  sifting('gravel_brass', 'minecraft:gravel', mesh.brass, [
    result('mekanism:dust_iron', 0.10), result('mekanism:dust_copper', 0.05),
    result('mekanism:dust_gold', 0.05), result('minecraft:clay_ball', 0.25)
  ])

  // Steel adds the extra outputs at Andesite-level primary chances.
  // Advanced Steel, Osmium, and Tungsten retain their higher-tier pools.
  const overworldTiers = [
    ['steel', mesh.steel, 0.10, 0.05, false],
    ['advanced_steel', mesh.advancedSteel, 0.25, 0.05, true],
    ['osmium', mesh.osmium, 0.50, 0.10, true],
    ['tungsten', mesh.tungsten, 1.00, 0.20, true]
  ]
  const overworld = [
    ['sand', 'minecraft:redstone', 'northstar:rutile_concentrate'],
    ['basalt', 'northstar:salt', 'minecraft:amethyst_shard'],
    ['andesite', 'mekanism:dust_copper', 'createmetallurgy:zinc_dust'],
    ['granite', 'mekanism:dust_gold', 'minecraft:quartz'],
    ['diorite', 'mekanism:dust_iron', 'mekanism:dust_iron', 2],
    ['calcite', 'minecraft:bone_meal', 'createmetallurgy:graphite'],
    ['deepslate', 'minecraft:coal', 'minecraft:coal', 2],
    ['tuff', 'northstar:volcanic_ash_item', 'mekanism:dust_sulfur'],
    ['blackstone', 'northstar:volcanic_ash_item', 'mekanism:dust_sulfur'],
    ['dust', 'createmetallurgy:zinc_dust', 'mekanism:dust_lead']
  ]
  overworld.forEach(([name, primary, secondary, secondaryCount]) => {
    const input = name === 'basalt' ? 'createsifter:crushed_basalt' : name === 'dust' ? 'createsifter:dust' : `minecraft:${name}`
    overworldTiers.forEach(([tier, meshId, primaryChance, extraChance, advanced]) => {
      const chance = name === 'basalt' ? primaryChance * 1.2 : primaryChance
      sifting(`${name}_${tier}`, input, meshId, [
        result(primary, chance), result(secondary, extraChance, secondaryCount)
      ], advanced)
    })
  })

  // Gravel keeps its special ore mix and clay output, scaled to the three
  // result-pool tiers.
  const gravel = [
    ['steel', mesh.steel, 0.02, 0.01, false],
    ['advanced_steel', mesh.advancedSteel, 0.25, 0.05, true],
    ['osmium', mesh.osmium, 0.50, 0.10, true],
    ['tungsten', mesh.tungsten, 1.00, 0.20, true]
  ]
  gravel.forEach(([tier, meshId, primaryChance, extraChance, advanced]) => {
    sifting(`gravel_${tier}`, 'minecraft:gravel', meshId, [
      result('mekanism:dust_iron', primaryChance), result('mekanism:dust_copper', extraChance),
      result('mekanism:dust_gold', extraChance), result('minecraft:clay_ball', 0.25)
    ], advanced)
  })

  // Mars recipes are restricted to Advanced Steel, Osmium, and Tungsten Mesh.
  // Mars Stone: the complete pool is 25%/50%/100% by tier.
  const marsStone = [
    ['advanced_steel', mesh.advancedSteel, 1, 0.05],
    ['osmium', mesh.osmium, 2, 0.10],
    ['tungsten', mesh.tungsten, 4, 0.20]
  ]
  marsStone.forEach(([tier, meshId, scale, extraChance]) => {
    const outputs = [
      result('mekanism:raw_osmium', 0.15 * scale),
      result('minecraft:raw_iron', 0.05 * scale),
      result('minecraft:redstone', 0.025 * scale),
      result('minecraft:coal', 0.025 * scale)
    ]
    if (tier === 'tungsten') outputs.push(result('mekanism:raw_uranium', extraChance))
    sifting(`mars_stone_${tier}`, 'northstar:mars_stone', meshId, outputs, true)
  })

  // Mars Deep Stone: Osmium and Titanium are primary resources; the
  // remaining 5% is the weighted Overworld association pool.
  const marsDeepStone = [
    ['advanced_steel', mesh.advancedSteel, 1],
    ['osmium', mesh.osmium, 2],
    ['tungsten', mesh.tungsten, 4]
  ]
  marsDeepStone.forEach(([tier, meshId, scale]) => {
    const outputs = [
      result('mekanism:raw_osmium', 0.10 * scale),
      result('northstar:raw_titanium_ore', 0.10 * scale),
      result('minecraft:raw_copper', 0.0125 * scale),
      result('minecraft:raw_iron', 0.0075 * scale),
      result('minecraft:raw_gold', 0.0075 * scale),
      result('minecraft:quartz', 0.0075 * scale),
      result('create:raw_zinc', 0.005 * scale),
      result('minecraft:coal', 0.005 * scale),
      result('minecraft:redstone', 0.005 * scale)
    ]
    if (tier === 'tungsten') outputs.push(result('mekanism:raw_uranium', 0.20))
    sifting(`mars_deep_stone_${tier}`, 'northstar:mars_deep_stone', meshId, outputs, true)
  })

  // Soil and Sand use Lead/Tin plus their weighted Overworld association pool.
  // Diamond, Amethyst, Sulfur Dust, and Glowstone Dust are intentionally absent.
  const marsSoftBlocks = [
    ['soil', 'mekanism:raw_lead', [
      ['minecraft:raw_copper', 0.0175], ['minecraft:raw_iron', 0.01],
      ['minecraft:raw_gold', 0.01], ['minecraft:quartz', 0.005],
      ['create:raw_zinc', 0.0025], ['minecraft:coal', 0.0025],
      ['minecraft:redstone', 0.0025]
    ]],
    ['sand', 'mekanism:raw_tin', [
      ['minecraft:redstone', 0.02], ['minecraft:quartz', 0.01],
      ['minecraft:raw_copper', 0.005], ['minecraft:raw_iron', 0.005],
      ['minecraft:raw_gold', 0.005], ['create:raw_zinc', 0.0025],
      ['minecraft:coal', 0.0025]
    ]]
  ]
  marsSoftBlocks.forEach(([name, primary, pool]) => {
    marsStone.forEach(([tier, meshId, scale]) => {
      const outputs = [
        result(primary, 0.10 * scale),
        result(name === 'soil' ? 'mekanism:raw_tin' : 'mekanism:raw_lead', 0.10 * scale)
      ]
      pool.forEach(([id, chance]) => outputs.push(result(id, chance * scale)))
      if (tier === 'tungsten') outputs.push(result('mekanism:fluorite_gem', 0.20))
      sifting(`mars_${name}_${tier}`, `northstar:mars_${name}`, meshId, outputs, true)
    })
  })

  // Mars Gravel is deliberately focused: only Lead and Tin.
  marsStone.forEach(([tier, meshId, scale]) => {
    sifting(`mars_gravel_${tier}`, 'northstar:mars_gravel', meshId, [
      result('mekanism:raw_lead', (1 / 12) * scale),
      result('mekanism:raw_tin', (1 / 12) * scale),
      result('createpropulsion:raw_platinum', (1 / 12) * scale)
    ], true)
  })
})
