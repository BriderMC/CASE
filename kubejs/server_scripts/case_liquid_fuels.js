// CASE canonical liquid-fuel registry.
// Add or remove a fluid here. The ServerEvents.tags handler below builds the tag.
// Mod adapters are required because not every consumer reads the common tag directly.

const caseLiquidFuels = [
  'createdieselgenerators:plant_oil', 'createdieselgenerators:ethanol',
  'createdieselgenerators:biodiesel', 'createdieselgenerators:diesel',
  'createdieselgenerators:gasoline',
  'tfmg:kerosene', 'tfmg:lpg', 'tfmg:naphtha', 'mekanism:hydrogen',
  'mekanismgenerators:bioethanol', 'northstar:biofuel', 'northstar:hydrocarbon',
  'northstar:liquid_hydrogen', 'northstar:methane', 'createaddition:bioethanol',
  'createaddition:seed_oil', 'createpropulsion:turpentine', 'oritech:still_biofuel',
  'oritech:still_diesel', 'oritech:still_fuel', 'oritech:still_naphtha',
  'oritech:still_oil'
]

// Keep the canonical tag generated from this list so additions only need one edit.
ServerEvents.tags('fluid', event => {
  event.add('c:accepts/liquid_fuel', caseLiquidFuels)
})

// Create Propulsion has one shared fluid registry for its liquid burner and fluid thrusters.
ServerEvents.loaded(event => {
  const newPropulsionFuels = [
    'mekanism:hydrogen', 'createaddition:bioethanol', 'createaddition:seed_oil',
    'oritech:still_biofuel', 'oritech:still_diesel', 'oritech:still_fuel',
    'oritech:still_naphtha', 'oritech:still_oil'
  ]
  newPropulsionFuels.forEach(fluid => ThrusterFuelManager.registerScriptedFuel(fluid, {
    thrustMultiplier: 1.0,
    consumptionMultiplier: 1.0,
    particle: 'plume',
    useFluidColor: true
  }))
})

// Oritech's Fuel Generator accepts fluid ingredients through recipes.
ServerEvents.recipes(event => {
  event.remove({ type: 'oritech:fuel_generator' })
  event.custom({
    type: 'oritech:fuel_generator',
    fluidInput: { amount: 100, fluid: '#c:accepts/liquid_fuel' },
    ingredients: [],
    results: [],
    time: 80
  }).id('case:fuel_generator/unified_liquid_fuel')
})
