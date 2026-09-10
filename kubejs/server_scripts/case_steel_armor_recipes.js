// CASE steel armor unification.
ServerEvents.recipes(event => {
  const steelPlate = Ingredient.of('#c:plates/steel')

  event.remove({ id: 'minecraft:diamond_helmet' })
  event.shaped('minecraft:diamond_helmet', [
    'PPP',
    'P P'
  ], { P: steelPlate }).id('case:steel_helmet_from_steel_plates')

  event.remove({ id: 'minecraft:diamond_chestplate' })
  event.shaped('minecraft:diamond_chestplate', [
    'P P',
    'PPP',
    'PPP'
  ], { P: steelPlate }).id('case:steel_chestplate_from_steel_plates')

  event.remove({ id: 'minecraft:diamond_leggings' })
  event.shaped('minecraft:diamond_leggings', [
    'PPP',
    'P P',
    'P P'
  ], { P: steelPlate }).id('case:steel_leggings_from_steel_plates')

  event.remove({ id: 'minecraft:diamond_boots' })
  event.shaped('minecraft:diamond_boots', [
    'P P',
    'P P'
  ], { P: steelPlate }).id('case:steel_boots_from_steel_plates')
})
