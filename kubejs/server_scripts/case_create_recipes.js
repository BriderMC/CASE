// CASE Create recipe overrides.

ServerEvents.recipes(event => {
  event.remove({ id: 'create:crafting/kinetics/white_sail' })
  event.shaped('8x create:white_sail', [
    'WS',
    'SA'
  ], {
    W: Ingredient.of('#minecraft:wool'),
    S: Ingredient.of('#c:rods/wooden'),
    A: 'create:andesite_alloy'
  }).id('case:white_sail_from_wool_and_wooden_rod')

  event.remove({ id: 'create:andesite_scaffolding_from_andesite_alloy_stonecutting' })
  event.stonecutting('16x create:andesite_scaffolding', 'create:andesite_alloy')
    .id('case:andesite_scaffolding_from_andesite_alloy_stonecutting')

  event.remove({ id: 'create:copper_scaffolding_from_ingots_copper_stonecutting' })
  event.stonecutting('16x create:copper_scaffolding', Ingredient.of('#c:ingots/copper'))
    .id('case:copper_scaffolding_from_copper_ingots_stonecutting')

  event.remove({ id: 'create:brass_scaffolding_from_ingots_brass_stonecutting' })
  event.stonecutting('16x create:brass_scaffolding', Ingredient.of('#c:ingots/brass'))
    .id('case:brass_scaffolding_from_brass_ingots_stonecutting')

  event.remove({ id: 'tfmg:aluminum_scaffolding_from_ingots_aluminum_stonecutting' })
  event.stonecutting('64x tfmg:aluminum_scaffolding', Ingredient.of('#c:ingots/aluminum'))
    .id('case:aluminum_scaffolding_from_aluminum_ingots_stonecutting')

  event.remove({ id: 'tfmg:steel_scaffolding_from_ingots_steel_stonecutting' })
  event.stonecutting('32x tfmg:steel_scaffolding', Ingredient.of('#c:ingots/steel'))
    .id('case:steel_scaffolding_from_steel_ingots_stonecutting')

  event.remove({ id: 'create:crafting/kinetics/belt_connector' })
  event.shaped('6x create:belt_connector', [
    'RRR'
  ], {
    R: 'rubberworks:rubber_sheet'
  }).id('case:belt_connector_from_rubber_sheets')

  event.remove({ id: 'create:crafting/kinetics/encased_chain_drive' })
  event.remove({ id: 'create:crafting/kinetics/encased_chain_drive_from_zinc' })
  event.shapeless('create:encased_chain_drive', [
    'create:andesite_casing',
    Ingredient.of('#c:cogwheels')
  ]).id('case:encased_chain_drive_from_cogwheel_and_andesite_casing')

  event.remove({ id: 'create:crafting/kinetics/sequenced_gearshift' })
  event.shapeless('create:sequenced_gearshift', [
    'create:brass_casing',
    'create:large_cogwheel',
    'create:electron_tube'
  ]).id('case:sequenced_gearshift_from_large_cogwheel')

  event.remove({ id: 'create:crushing/gravel' })
  event.recipes.create.crushing(
    'minecraft:sand',
    'minecraft:gravel'
  ).processingTime(250).id('case:crushing_gravel_to_sand')

  event.remove({ id: 'create:milling/gravel' })
  event.recipes.create.milling(
    'minecraft:sand',
    'minecraft:gravel'
  ).processingTime(250).id('case:milling_gravel_to_sand')
})
