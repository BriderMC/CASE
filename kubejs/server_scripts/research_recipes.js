// Research-pack recipes
ServerEvents.recipes(event => {
  // Automation remains a normal shapeless crafting recipe. The glass bottle
  // replaces the old log ingredient.
  event.shapeless('case:research_primitive', [
    'minecraft:glass_bottle',
    'create:andesite_alloy',
    'minecraft:iron_ingot',
    'minecraft:copper_ingot'
  ]).id('case:research_primitive')

  // MMR controllers carry the machine ID as a data component. Build the
  // component-bearing controller through KubeJS so it places the Basic Lab.
  event.shaped(
    Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="case:basic_research_lab"]'),
    [
      'C C',
      ' R ',
      'C C'
    ],
    {
      C: 'modular_machinery_reborn:casing_plain',
      R: 'minecraft:redstone_block'
    }
  ).id('case:basic_research_lab')

  event.shapeless('modular_machinery_reborn:blueprint', [
    'minecraft:paper',
    'minecraft:redstone'
  ]).id('case:modular_machinery_blueprint')

  // Metallurgy, logistics, and chemical packs use Create Sequenced Assembly.
  // Fluids are supplied through Create Spouts.
  const transitional = 'create:incomplete_precision_mechanism'

  event.recipes.create.sequenced_assembly(
    ['case:unfinished_research_basic_metallurgy'],
    'minecraft:glass_bottle',
    [
      event.recipes.create.filling(transitional, [
        transitional,
        Fluid.of('createmetallurgy:molten_steel', 90)
      ]),
      event.recipes.create.deploying(transitional, [transitional, 'tfmg:heavy_plate']),
      event.recipes.create.deploying(transitional, [transitional, 'minecraft:coal'])
    ]
  ).transitionalItem(transitional).loops(1).id('case:unfinished_research_basic_metallurgy')

  event.recipes.create.sequenced_assembly(
    ['case:unfinished_research_basic_logistics'],
    'minecraft:glass_bottle',
    [
      event.recipes.create.deploying(transitional, [transitional, 'create:precision_mechanism']),
      event.recipes.create.deploying(transitional, [transitional, 'createaddition:iron_rod']),
      event.recipes.create.deploying(transitional, [transitional, 'createaddition:gold_spool'])
    ]
  ).transitionalItem(transitional).loops(1).id('case:unfinished_research_basic_logistics')

  event.recipes.create.sequenced_assembly(
    ['case:unfinished_research_basic_chemical'],
    'minecraft:glass_bottle',
    [
      event.recipes.create.filling(transitional, [transitional, Fluid.of('mekanism:sulfuric_acid', 250)]),
      event.recipes.create.filling(transitional, [transitional, Fluid.of('tfmg:crude_oil', 500)]),
      event.recipes.create.filling(transitional, [transitional, Fluid.of('minecraft:water', 1000)])
    ]
  ).transitionalItem(transitional).loops(1).id('case:unfinished_research_basic_chemical')

  // Space research is assembled from the moon materials before being smelted
  // into the finished pack in a Research Lab.
  event.shapeless('case:unfinished_research_basic_space', [
    'minecraft:glass_bottle',
    'northstar:lunar_sapphire_crystal',
    'northstar:titanium_block',
    'minecraft:iron_ingot'
  ]).id('case:unfinished_research_basic_space')

})
