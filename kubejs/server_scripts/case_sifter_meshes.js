// CASE Sifter mesh recipes
ServerEvents.recipes(event => {
  event.remove({ id: 'createsifter:crafting/advanced_sturdy_mesh' })

  event.shaped('createsifter:advanced_sturdy_mesh', [
    'TTT',
    'TFT',
    'TTT'
  ], {
    T: Ingredient.of('#c:ingots/titanium'),
    F: 'createsifter:string_mesh'
  }).id('case:titanium_mesh_from_ingots')

  event.shaped('createsifter:custom_mesh', [
    'OOO',
    'OFO',
    'OOO'
  ], {
    O: Ingredient.of('#c:ingots/osmium'),
    F: 'createsifter:string_mesh'
  }).id('case:custom_mesh_from_osmium')

  event.shaped('createsifter:advanced_custom_mesh', [
    'TTT',
    'TFT',
    'TTT'
  ], {
    T: Ingredient.of('#c:ingots/tungsten'),
    F: 'createsifter:string_mesh'
  }).id('case:tungsten_mesh_from_ingots')

  const upgradePattern = [
    'MMM',
    'MFM',
    'MMM'
  ]

  event.shaped('createsifter:brass_mesh', upgradePattern, {
    M: Ingredient.of('#c:plates/brass'),
    F: 'createsifter:andesite_mesh'
  }).id('case:brass_mesh_from_andesite_mesh')

  event.shaped('createsifter:sturdy_mesh', upgradePattern, {
    M: Ingredient.of('#c:plates/steel'),
    F: 'createsifter:andesite_mesh'
  }).id('case:steel_mesh_from_andesite_mesh')

  event.shaped('createsifter:advanced_sturdy_mesh', upgradePattern, {
    M: Ingredient.of('#c:plates/titanium'),
    F: 'createsifter:brass_mesh'
  }).id('case:titanium_mesh_from_brass_mesh')

  event.shaped('createsifter:advanced_sturdy_mesh', upgradePattern, {
    M: Ingredient.of('#c:plates/titanium'),
    F: 'createsifter:sturdy_mesh'
  }).id('case:titanium_mesh_from_steel_mesh')

  event.shaped('createsifter:custom_mesh', upgradePattern, {
    M: Ingredient.of('#c:ingots/osmium'),
    F: 'createsifter:advanced_sturdy_mesh'
  }).id('case:osmium_mesh_from_titanium_mesh')

  event.shaped('createsifter:advanced_custom_mesh', upgradePattern, {
    M: Ingredient.of('#c:ingots/tungsten'),
    F: 'createsifter:custom_mesh'
  }).id('case:tungsten_mesh_from_osmium_mesh')
})
