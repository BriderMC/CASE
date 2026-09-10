// CASE Supplementaries Squared recipe overrides.

ServerEvents.recipes(event => {
  event.remove({ id: 'suppsquared:copper_lantern' })
  event.remove({ id: 'suppsquared:copper_lantern_2' })

  event.shaped('2x suppsquared:copper_lantern', [
    'NNN',
    'NTN',
    'NNN'
  ], {
    N: Ingredient.of('#c:nuggets/copper'),
    T: 'minecraft:torch'
  }).id('case:copper_lantern_from_copper_nuggets_and_torch')
})
