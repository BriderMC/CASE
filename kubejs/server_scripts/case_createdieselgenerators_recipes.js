// CASE Create: Diesel Generators recipe overrides.

ServerEvents.recipes(event => {
  event.remove({ id: 'createdieselgenerators:crafting/basin_lid' })
  event.shaped('createdieselgenerators:basin_lid', [
    ' A ',
    'AAA'
  ], {
    A: 'create:andesite_alloy'
  }).id('case:basin_lid_from_andesite_alloy')
})
