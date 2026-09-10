// Rename and rebalance Quark's deepslate furnace as the pack's Stone Furnace.
ServerEvents.recipes(event => {
  event.remove({ output: 'quark:deepslate_furnace' })

  event.shaped('quark:deepslate_furnace', [
    'SSS',
    'S S',
    'SSS'
  ], {
    S: '#minecraft:stone_crafting_materials'
  }).id('case:stone_furnace')
})
