// CASE raw ore processing recipes
ServerEvents.recipes(event => {
  const rawIron = 'minecraft:raw_iron'
  const rawZinc = Ingredient.of('#c:raw_materials/zinc')
  const rawCopper = 'minecraft:raw_copper'
  const rawGold = 'minecraft:raw_gold'

  event.recipes.create.sandpaper_polishing(
    'mekanism:dust_iron',
    rawIron
  ).id('case:sandpaper_crushed_raw_iron')

  event.recipes.create.sandpaper_polishing(
    'createmetallurgy:zinc_dust',
    rawZinc
  ).id('case:sandpaper_crushed_raw_zinc')

  event.recipes.create.sandpaper_polishing(
    'mekanism:dust_copper',
    rawCopper
  ).id('case:sandpaper_raw_copper_to_dust')

  event.recipes.create.sandpaper_polishing(
    'mekanism:dust_gold',
    rawGold
  ).id('case:sandpaper_raw_gold_to_dust')

  event.recipes.create.milling(
    'create:crushed_raw_iron',
    rawIron
  ).id('case:milling_raw_iron_to_crushed')

  event.recipes.create.milling(
    'createmetallurgy:zinc_dust',
    rawZinc
  ).id('case:milling_crushed_raw_zinc')

  event.remove({ id: 'create:crushing/raw_iron' })
  event.remove({ id: 'create:crushing/raw_zinc' })

  event.recipes.create.crushing(
    'create:crushed_raw_iron',
    'minecraft:raw_iron'
  ).processingTime(400).id('case:crushing_raw_iron_to_crushed')

  event.recipes.create.milling(
    'mekanism:dust_iron',
    'create:crushed_raw_iron'
  ).id('case:milling_crushed_raw_iron_to_dust')

  event.recipes.create.crushing(
    'mekanism:dust_iron',
    'create:crushed_raw_iron'
  ).processingTime(200).id('case:crushing_crushed_raw_iron_to_dust')

  event.recipes.create.crushing(
    'createmetallurgy:zinc_dust',
    'create:raw_zinc'
  ).processingTime(400).id('case:crushing_raw_zinc')

  event.recipes.create.crushing(
    'mekanism:dust_steel',
    Ingredient.of('#c:ingots/steel')
  ).processingTime(200).id('case:crushing_steel_ingot_to_dust')
})
