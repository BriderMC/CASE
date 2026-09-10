// Replace vanilla furnace recipes with brick-built variants while retaining the
// vanilla furnace, blast furnace, and smoker block IDs and behavior.
ServerEvents.recipes(event => {
  event.remove({ id: 'minecraft:furnace' })
  event.remove({ id: 'minecraft:blast_furnace' })
  event.remove({ id: 'minecraft:smoker' })

  event.shaped('minecraft:furnace', [
    'BBB',
    'B B',
    'BBB'
  ], {
    B: 'minecraft:brick'
  }).id('case:brick_furnace')

  event.shaped('minecraft:blast_furnace', [
    'III',
    'IFI',
    'BBB'
  ], {
    I: 'minecraft:iron_ingot',
    F: 'minecraft:furnace',
    B: 'minecraft:bricks'
  }).id('case:brick_blast_furnace')

  event.shaped('minecraft:smoker', [
    'BBB',
    'BFB',
    'BBB'
  ], {
    B: 'minecraft:brick',
    F: 'minecraft:furnace'
  }).id('case:brick_smoker')
})
