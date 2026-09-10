// Two-stage creosote treatment for TFMG hardened planks.
ServerEvents.recipes(event => {
  // Remove TFMG's direct shortcut so the CASE prepared-planks progression is used.
  event.remove({ id: 'tfmg:filling/hardened_planks' })

  event.custom({
    type: 'create:compacting',
    ingredients: [
      { item: 'case:prepared_planks' },
      { type: 'neoforge:single', fluid: 'tfmg:creosote', amount: 250 }
    ],
    results: [{ id: 'tfmg:hardened_planks' }]
  }).id('case:hardened_planks_from_prepared_planks')
})
