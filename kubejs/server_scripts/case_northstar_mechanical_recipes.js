// CASE Northstar machine recipes use Create mechanical crafting only.

ServerEvents.recipes(event => {
  const titaniumPlate = { tag: 'c:plates/titanium' }
  const mechanicalRecipe = (id, output, pattern, key, mirrored) => {
    event.remove({ output })
    event.custom({
      type: 'create:mechanical_crafting',
      accept_mirrored: mirrored,
      category: 'misc',
      key,
      pattern,
      result: { count: 1, id: output }
    }).id(id)
  }

  mechanicalRecipe(
    'case:oxygen_separator_from_steel_plates_industrial_pipes_and_advanced_mechanism',
    'northstar:oxygen_separator',
    ['CCC', 'PMP', 'CPC'],
    {
      C: { tag: 'c:plates/copper' },
      P: { item: 'tfmg:industrial_pipe' },
      M: { item: 'northstar:hardened_precision_mechanism' }
    },
    true
  )

  mechanicalRecipe(
    'case:atmospheric_concentrator_from_steel_chemical_vat',
    'northstar:atmospheric_concentrator',
    ['W W', 'WPW', 'T#T', 'CVC', 'TMT'],
    {
      W: { tag: 'minecraft:wool' },
      P: { item: 'create:propeller' },
      '#': { item: 'northstar:oxygen_separator' },
      T: titaniumPlate,
      C: { item: 'tfmg:circuit_board' },
      V: { item: 'tfmg:steel_chemical_vat' },
      M: { item: 'tfmg:heavy_machinery_casing' }
    },
    true
  )

  mechanicalRecipe(
    'case:oxygen_filler_from_titanium_and_heavy_casing',
    'northstar:oxygen_filler',
    ['TCT', 'TST', 'THT'],
    {
      T: titaniumPlate,
      C: { item: 'tfmg:circuit_board' },
      S: { item: 'northstar:oxygen_separator' },
      H: { item: 'tfmg:heavy_machinery_casing' }
    },
    true
  )

  mechanicalRecipe(
    'case:rocket_controls_from_titanium_and_heavy_casing',
    'northstar:rocket_controls',
    ['L L', 'TTT', 'CCC', 'THT'],
    {
      L: { item: 'minecraft:lever' },
      T: titaniumPlate,
      C: { item: 'tfmg:circuit_board' },
      H: { item: 'tfmg:heavy_machinery_casing' }
    },
    false
  )

  mechanicalRecipe(
    'case:rocket_station_from_rocket_controls_components',
    'northstar:rocket_station',
    ['TTT', 'CCC', 'CCC', 'THT'],
    {
      T: titaniumPlate,
      C: { item: 'tfmg:circuit_board' },
      H: { item: 'tfmg:heavy_machinery_casing' }
    },
    false
  )
})
