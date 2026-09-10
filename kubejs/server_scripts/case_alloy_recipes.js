// CASE andesite alloy recipes
ServerEvents.recipes(event => {
  event.remove({ id: 'case:andesite_alloy_from_crushed_ore_and_bucket' })
  event.remove({ id: 'case:andesite_alloy_from_crushed_ore_and_bucket_zinc' })
  event.remove({ id: 'case:andesite_alloy_from_dust_and_bucket' })
  event.remove({ id: 'createmetallurgy:casting_in_basin/andesite_alloy_from_iron' })
  event.remove({ id: 'createmetallurgy:casting_in_basin/andesite_alloy_from_zinc' })
  event.remove({ id: 'case:molten_andesite_from_crushed_andesite' })
  event.remove({ id: 'case:molten_andesite_alloy_from_molten_iron' })
  event.remove({ id: 'case:molten_andesite_alloy_from_molten_zinc' })
  event.remove({ id: 'createmetallurgy:alloying/steel' })

  event.recipes.createmetallurgy
    .alloying(
      Fluid.of('createmetallurgy:molten_electrum', 180),
      [
        Fluid.of('createmetallurgy:molten_gold', 90),
        Fluid.of('createmetallurgy:molten_copper', 90)
      ]
    )
    .processingTime(80)
    .heated()
    .id('case:molten_electrum_from_molten_gold_and_copper')

  event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
      { type: 'neoforge:single', amount: 90, fluid: 'createmetallurgy:molten_electrum' },
      { item: 'createmetallurgy:graphite_ingot_mold' }
    ],
    processing_time: 60,
    result: { item: { count: 1, id: 'createaddition:electrum_ingot' } }
  }).id('case:electrum_ingot_from_molten_electrum')

  event.recipes.createmetallurgy
    .alloying(
      Fluid.of('createmetallurgy:molten_steel', 90),
      [
        Fluid.of('createmetallurgy:molten_iron', 360),
        'tfmg:limesand',
        Item.of('tfmg:coal_coke', 2)
      ]
    )
    .processingTime(40)
    .heated()
    .id('case:molten_steel_from_molten_iron')

  event.custom({
    type: 'createmetallurgy:melting',
    heat_requirement: 'heated',
    ingredients: [{ tag: 'c:crushed_andesite' }],
    processing_time: 40,
    results: [{ amount: 90, id: 'case:molten_andesite' }]
  }).id('case:molten_andesite_from_crushed_andesite')

  event.custom({
    type: 'createmetallurgy:melting',
    heat_requirement: 'heated',
    ingredients: [{ tag: 'c:dusts/andesite' }],
    processing_time: 20,
    results: [{ amount: 90, id: 'case:molten_andesite' }]
  }).id('case:molten_andesite_from_dust')

  const alloying = (id, metalFluid) => {
    event.custom({
      type: 'createmetallurgy:alloying',
      heat_requirement: 'heated',
      ingredients: [
        { type: 'neoforge:single', amount: 90, fluid: 'case:molten_andesite' },
        { type: 'neoforge:single', amount: 90, fluid: metalFluid }
      ],
      processing_time: 40,
      results: [{ amount: 180, id: 'case:molten_andesite_alloy' }]
    }).id(id)
  }

  alloying('case:molten_andesite_alloy_from_molten_iron', 'createmetallurgy:molten_iron')
  alloying('case:molten_andesite_alloy_from_molten_zinc', 'createmetallurgy:molten_zinc')

  event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
      { type: 'neoforge:single', amount: 90, fluid: 'case:molten_andesite_alloy' },
      { item: 'createmetallurgy:graphite_ingot_mold' }
    ],
    processing_time: 60,
    result: { item: { count: 1, id: 'create:andesite_alloy' } }
  }).id('case:andesite_alloy_from_molten_andesite_alloy')

  event.custom({
    type: 'createmetallurgy:casting_in_basin',
    ingredients: [{ type: 'neoforge:single', amount: 810, fluid: 'case:molten_andesite_alloy' }],
    processing_time: 480,
    result: { item: { count: 1, id: 'create:andesite_alloy_block' } }
  }).id('case:andesite_alloy_block_from_molten_andesite_alloy')

  event.custom({
    type: 'createmetallurgy:casting_in_basin',
    ingredients: [{ type: 'neoforge:single', amount: 90, fluid: 'case:molten_andesite' }],
    processing_time: 120,
    result: { item: { count: 1, id: 'minecraft:andesite' } }
  }).id('case:andesite_from_molten_andesite')

  const compacting = (id, materialTag) => {
    event.custom({
      type: 'create:compacting',
      heat_requirement: 'heated',
      ingredients: [
        { tag: 'c:dusts/andesite' },
        { tag: 'c:dusts/andesite' },
        { tag: materialTag },
        { tag: materialTag }
      ],
      results: [{ id: 'create:andesite_alloy' }]
    }).id(id)
  }

  compacting('case:andesite_alloy_from_iron_compacting', 'c:dusts/iron')
  compacting('case:andesite_alloy_from_zinc_compacting', 'c:dusts/zinc')

  const crushedCompacting = (id, materialTag) => {
    event.custom({
      type: 'create:compacting',
      heat_requirement: 'heated',
      ingredients: [
        { tag: 'c:crushed_andesite' },
        { tag: 'c:crushed_andesite' },
        { tag: materialTag },
        { tag: materialTag }
      ],
      results: [{ id: 'create:andesite_alloy' }]
    }).id(id)
  }

  crushedCompacting('case:andesite_alloy_from_crushed_iron_compacting', 'c:crushed_iron')
  crushedCompacting('case:andesite_alloy_from_crushed_zinc_compacting', 'c:crushed_zinc')

  event.shaped('case:andesite_alloy_dust', [
    'AIA',
    'IBI',
    'AIA'
  ], {
    A: Ingredient.of('#c:dusts/andesite'),
    I: Ingredient.of('#c:dusts/iron_or_zinc'),
    B: 'minecraft:bucket'
  }).id('case:andesite_alloy_dust_from_dust_and_bucket')
    .keepIngredient('minecraft:bucket')

  event.smelting(
    'create:andesite_alloy',
    'case:andesite_alloy_dust'
  ).xp(0.7).id('case:andesite_alloy_from_alloy_dust')
})
