// CASE steel tool unification.
ServerEvents.recipes(event => {
  // Keep the vanilla diamond tool IDs as the pack's visible Steel Tools, but
  // craft them from the canonical steel ingot tag.
  const steel = '#c:ingots/steel'

  event.remove({ id: 'minecraft:diamond_sword' })
  event.shaped('minecraft:diamond_sword', [
    'S',
    'S',
    'I'
  ], {
    S: steel,
    I: 'minecraft:stick'
  }).id('case:steel_sword_from_steel')

  event.remove({ id: 'minecraft:diamond_pickaxe' })
  event.shaped('minecraft:diamond_pickaxe', [
    'SSS',
    ' I ',
    ' I '
  ], {
    S: steel,
    I: 'minecraft:stick'
  }).id('case:steel_pickaxe_from_steel')

  event.remove({ id: 'minecraft:diamond_axe' })
  event.shaped('minecraft:diamond_axe', [
    'SS',
    'SI',
    ' I'
  ], {
    S: steel,
    I: 'minecraft:stick'
  }).id('case:steel_axe_from_steel')

  event.remove({ id: 'minecraft:diamond_shovel' })
  event.shaped('minecraft:diamond_shovel', [
    'S',
    'I',
    'I'
  ], {
    S: steel,
    I: 'minecraft:stick'
  }).id('case:steel_shovel_from_steel')

  event.remove({ id: 'minecraft:diamond_hoe' })
  event.shaped('minecraft:diamond_hoe', [
    'SS',
    ' I',
    ' I'
  ], {
    S: steel,
    I: 'minecraft:stick'
  }).id('case:steel_hoe_from_steel')
})
