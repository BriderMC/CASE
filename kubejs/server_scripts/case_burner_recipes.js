// CASE burner recipe progression.
ServerEvents.recipes(event => {
  event.remove({ output: 'createlowheated:basic_burner' })
  event.remove({ output: 'createdieselgenerators:burner' })
  event.remove({ output: 'createpropulsion:solid_burner' })
  event.remove({ output: 'createpropulsion:liquid_burner' })

  const basicBurnerPattern = [
    'S S',
    'SCS',
    ' S '
  ]

  event.shaped('createlowheated:basic_burner', basicBurnerPattern, {
    S: 'minecraft:stone',
    C: 'minecraft:campfire'
  }).id('case:basic_burner_from_stone')

  event.shaped('createlowheated:basic_burner', basicBurnerPattern, {
    S: 'create:andesite_alloy',
    C: 'minecraft:campfire'
  }).id('case:basic_burner_from_andesite_alloy')

  event.shaped('createlowheated:basic_burner', basicBurnerPattern, {
    S: '#c:plates/cast_iron',
    C: 'minecraft:campfire'
  }).id('case:basic_burner_from_cast_iron_plates')

  event.shaped('createdieselgenerators:burner', [
    'PQP',
    'FSC',
    'PBP'
  ], {
    P: 'tfmg:cast_iron_sheet',
    Q: 'tfmg:brass_pipe',
    F: 'minecraft:flint_and_steel',
    S: 'create:shaft',
    C: 'minecraft:compass',
    B: 'createlowheated:basic_burner'
  }).id('case:diesel_burner_from_cast_iron')

  event.shaped('createpropulsion:solid_burner', [
    'CCC',
    'SBS',
    '   '
  ], {
    C: 'create:copper_sheet',
    S: 'tfmg:heavy_plate',
    B: 'minecraft:blast_furnace'
  }).id('case:solid_burner_from_steel_plates')

  event.shaped('createpropulsion:liquid_burner', [
    'CCC',
    'PBP',
    '   '
  ], {
    C: 'create:copper_sheet',
    P: 'tfmg:steel_pipe',
    B: 'minecraft:blast_furnace'
  }).id('case:liquid_burner_from_tfmg_steel_pipe')
})
