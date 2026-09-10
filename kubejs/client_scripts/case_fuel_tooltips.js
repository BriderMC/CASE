// CASE's manual fuel compatibility index.
// The accepts tags are fuel lists. The machines are kept in separate machines tags.

const liquidFuelMachines = [
  'createdieselgenerators:burner',
  'createdieselgenerators:diesel_engine',
  'createdieselgenerators:large_diesel_engine',
  'createdieselgenerators:huge_diesel_engine',
  'createpropulsion:liquid_burner',
  'createpropulsion:thruster',
  'createpropulsion:vector_thruster',
  'createpropulsion:liquid_vector_thruster',
  'oritech:fuel_generator_block'
]

const solidFuelMachines = [
  'oritech:basic_generator_block',
  'simulated:red_portable_engine',
  'createpropulsion:solid_burner',
  'createpropulsion:solid_fuel_thruster',
  'createlowheated:basic_burner'
]

const liquidFuelNames = [
  'Plant Oil',
  'Ethanol',
  'Biodiesel',
  'Diesel',
  'Gasoline',
  'TFMG Diesel',
  'TFMG Gasoline',
  'Kerosene',
  'LPG',
  'Naphtha',
  'Hydrogen',
  'Bioethanol',
  'Northstar Biofuel',
  'Hydrocarbon',
  'Liquid Hydrogen',
  'Methane',
  'Seed Oil',
  'Turpentine',
  'Oritech Biofuel',
  'Oritech Diesel',
  'Oritech Fuel',
  'Oritech Naphtha',
  'Oritech Oil'
]

const northstarFuelNames = [
  'Kerosene',
  'Methane',
  'Hydrocarbon',
  'Liquid Hydrogen',
  'Hydrogen'
]

const solidFuelNames = [
  'Wood',
  'Coal',
  'Charcoal',
  'Coal Coke',
  'Biomass',
  'Full Blocks of Burnables'
]

const addFuelSummary = (event, ids, label, names) => {
  const tagName = label.toLowerCase().replace(' ', '_')
  event.add(ids, { shift: false }, Text.of('Hold Shift for fuel compatibility').gray())
  const lines = [Text.of('Accepts:').gray()]
  names.forEach(name => lines.push(Text.of(name).white()))
  lines.push(Text.of('Source: #c:accepts/' + tagName).darkGray())
  event.add(ids, { shift: true }, lines)
}

ItemEvents.modifyTooltips(event => {
  addFuelSummary(event, liquidFuelMachines, 'Liquid Fuel', liquidFuelNames)
  addFuelSummary(event, ['northstar:rocket_thruster'], 'Rocket Fuel', northstarFuelNames)
  addFuelSummary(event, solidFuelMachines, 'Solid Fuel', solidFuelNames)
})
