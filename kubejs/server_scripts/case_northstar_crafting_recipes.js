// CASE Northstar normal-crafting overrides.

ServerEvents.recipes(event => {
  event.remove({ id: 'northstar:crafting/titanium_space_door' })
  event.shaped('northstar:titanium_space_door', [
    'GG ',
    'TTC',
    'TT '
  ], {
    G: 'minecraft:glass',
    T: Ingredient.of('#c:plates/titanium'),
    C: 'tfmg:circuit_board'
  }).id('case:titanium_space_door_from_tfmg_circuit_board')
})
