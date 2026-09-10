// CASE miscellaneous recipes
ServerEvents.recipes(event => {
  event.replaceInput(
    { id: 'mwgr:water_generator' },
    'minecraft:iron_ingot',
    'mekanism:ingot_osmium'
  )

  event.replaceInput(
    { id: 'create_aeronautics_toolgun:portable_structure_container' },
    'minecraft:nether_star',
    'minecraft:ender_pearl'
  )

  event.remove({ id: 'tfmg:mixing/cement' })
  event.recipes.create.mixing(
    '4x tfmg:cement',
    ['minecraft:clay_ball', 'tfmg:limesand']
  ).heated().id('case:heated_cement_from_clay_and_limesand')

  event.remove({ id: 'tfmg:mixing/liquid_concrete' })
  event.recipes.create.mixing(
    'tfmg:concrete',
    [
      'tfmg:concrete_mixture',
      Fluid.of('minecraft:water', 100)
    ]
  ).id('case:concrete_block_from_concrete_mixture_and_water')

  event.remove({ id: 'tfmg:crafting/materials/cinder_block' })
  event.shaped('8x tfmg:cinder_block', [
    'BBB',
    'RCR',
    'BBB'
  ], {
    B: 'tfmg:cinderblock',
    C: 'tfmg:concrete',
    R: 'tfmg:rebar'
  }).id('case:cinder_block_from_concrete_block')

  const floaterColors = [
    ['black', 16],
    ['blue', 12],
    ['brown', 13],
    ['cyan', 10],
    ['gray', 8],
    ['green', 14],
    ['light_blue', 4],
    ['light_gray', 9],
    ['lime', 6],
    ['magenta', 3],
    ['orange', 2],
    ['pink', 7],
    ['purple', 11],
    ['red', 15],
    ['white', 1],
    ['yellow', 5]
  ]
  floaterColors.forEach(([color, modelData]) => {
    event.remove({ id: `create_submarine:floater_${color}` })
    event.custom({
      type: 'minecraft:crafting_shapeless',
      category: 'misc',
      ingredients: [
        { item: `minecraft:${color}_wool` },
        { item: 'create_submarine:phycological_membrane' }
      ],
      result: {
        count: 1,
        id: 'create_submarine:floater',
        components: {
          'minecraft:block_state': { color },
          'minecraft:custom_model_data': modelData
        }
      }
    }).id(`case:floater_${color}_from_wool_and_phycological_membrane`)
  })

  event.remove({ id: 'simulated:red_portable_engine' })
  event.shaped('simulated:red_portable_engine', [
    'I',
    'P',
    'B'
  ], {
    I: 'minecraft:iron_block',
    P: 'create:precision_mechanism',
    B: 'minecraft:blast_furnace'
  }).id('case:red_portable_engine_from_iron_block_and_precision_mechanism')

  event.remove({ id: 'create_submarine:steel_cable' })
  event.shaped('create_submarine:steel_cable', [
    'SRS'
  ], {
    S: Ingredient.of('#c:plates/steel'),
    R: 'simulated:rope_coupling'
  }).id('case:steel_cable_from_steel_plates_and_rope_coupling')

  event.remove({ id: 'tfmg:sequenced_assembly/capacitor' })
  event.recipes.create.sequenced_assembly(
    ['4x tfmg:capacitor_item'],
    Ingredient.of('#c:plates/copper'),
    [
      event.recipes.create.deploying('tfmg:unfinished_capacitor', ['tfmg:unfinished_capacitor', 'tfmg:plastic_sheet']),
      event.recipes.create.deploying('tfmg:unfinished_capacitor', ['tfmg:unfinished_capacitor', Ingredient.of('#c:plates/copper')])
    ]
  ).transitionalItem('tfmg:unfinished_capacitor').loops(1).id('case:capacitor_from_copper_plates_and_plastic')

  event.remove({ id: 'createaddition:crafting/connector' })
  const connectorRecipe = (id, rod, output) => event.shaped(`${output}x createaddition:connector`, [
    ' R ',
    ' P ',
    ' A '
  ], {
    R: rod,
    P: 'tfmg:plastic_sheet',
    A: 'create:andesite_alloy'
  }).id(id)
  connectorRecipe('case:connector_from_copper_rod', 'createaddition:copper_rod', 2)
  connectorRecipe('case:connector_from_gold_rod', 'createaddition:gold_rod', 2)
  connectorRecipe('case:connector_from_electrum_rod', 'createaddition:electrum_rod', 4)

  event.remove({ id: 'createaddition:crafting/large_connector' })
  event.shaped('2x createaddition:large_connector', [
    ' R ',
    ' P ',
    'AAA'
  ], {
    R: 'createaddition:electrum_rod',
    P: 'tfmg:plastic_sheet',
    A: 'create:andesite_alloy'
  }).id('case:large_connector_from_electrum_rod')

  event.remove({ id: 'createaddition:crafting/modular_accumulator' })
  event.shaped('createaddition:modular_accumulator', [
    'CRC',
    ' E ',
    'CWC'
  ], {
    C: 'tfmg:capacitor_item',
    R: 'createaddition:electrum_rod',
    E: 'createaddition:electrum_block',
    W: 'createaddition:electrum_wire'
  }).id('case:modular_accumulator_from_electrum_and_capacitors')

  event.remove({ id: 'tfmg:crafting/materials/electrode_holder' })
  event.shaped('tfmg:electrode_holder', [
    'SLS',
    'WCW',
    'SLS'
  ], {
    S: Ingredient.of('#c:plates/steel'),
    L: Ingredient.of('#c:plates/lead'),
    W: Ingredient.of('#c:wires/electrum'),
    C: 'tfmg:heavy_machinery_casing'
  }).id('case:electrode_holder_from_steel_lead_and_electrum')

  event.remove({ id: 'moreburners:electric_burner' })
  event.shaped('moreburners:electric_burner', [
    'GGG',
    'SSS',
    ' A '
  ], {
    G: 'minecraft:tinted_glass',
    S: 'createaddition:electrum_spool',
    A: 'create:andesite_casing'
  }).id('case:electric_burner_from_electrum_spools')

  event.remove({ id: 'moreburners:resistance_coil' })
  event.shaped('moreburners:nickel_coil', [
    ' R ',
    'R R',
    ' R '
  ], {
    R: 'createaddition:electrum_rod'
  }).id('case:resistance_coil_from_electrum')

  event.remove({ id: 'moreburners:sequenced_assembly/heat_upgrade' })
  event.remove({ output: 'moreburners:heat_upgrade' })
  event.shaped('moreburners:heat_upgrade', [
    'CT'
  ], {
    C: 'moreburners:nickel_coil',
    T: 'northstar:titanium_ingot'
  }).id('case:heat_upgrade_from_titanium_and_resistance_coils')

  event.remove({ id: 'tfmg:crafting/copper_spool' })
  event.shaped('tfmg:copper_spool', [
    'RRR',
    'WSW',
    'RRR'
  ], {
    R: 'createaddition:copper_rod',
    W: 'createaddition:electrum_wire',
    S: 'createaddition:spool'
  }).id('case:copper_spool_from_electrum_wires_and_copper_rods')

  event.remove({ id: 'tfmg:crafting/materials/cable_connector' })
  event.shaped('tfmg:cable_connector', [
    ' R ',
    'RSR',
    'LLL'
  ], {
    R: 'createaddition:copper_rod',
    S: 'create:shaft',
    L: Ingredient.of('#c:plates/lead')
  }).id('case:cable_connector_from_copper_rods_shaft_and_lead_plates')

  event.remove({ id: 'createaddition:mechanical_crafting/electric_motor' })
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: true,
    category: 'misc',
    key: {
      A: { item: 'tfmg:transistor_item' },
      B: { tag: 'c:plates/electrum' },
      C: { item: 'tfmg:capacitor_item' },
      R: { item: 'create:shaft' },
      S: { item: 'createaddition:electrum_spool' }
    },
    pattern: ['  A  ', ' BSB ', 'BSRSB', ' BCB '],
    result: { count: 1, id: 'createaddition:electric_motor' }
  }).id('case:electric_motor_from_electrical_components')

  event.remove({ id: 'createaddition:mechanical_crafting/alternator' })
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: true,
    category: 'misc',
    key: {
      A: { item: 'tfmg:transistor_item' },
      I: { tag: 'c:plates/steel' },
      R: { item: 'create:shaft' },
      S: { item: 'createaddition:electrum_spool' }
    },
    pattern: ['  A  ', ' ISI ', 'ISRSI', ' ISI ', '  A  '],
    result: { count: 1, id: 'createaddition:alternator' }
  }).id('case:alternator_from_electrical_components')

  event.remove({ id: 'createaddition:mechanical_crafting/tesla_coil' })
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: true,
    category: 'misc',
    key: {
      A: { item: 'tfmg:transistor_item' },
      B: { item: 'createaddition:electrum_block' },
      C: { item: 'tfmg:capacitor_item' },
      E: { item: 'tfmg:resistor' },
      P: { tag: 'c:plates/electrum' },
      S: { item: 'createaddition:electrum_spool' }
    },
    pattern: ['SSS', ' A ', 'CBC', 'PEP'],
    result: { count: 1, id: 'createaddition:tesla_coil' }
  }).id('case:tesla_coil_from_electrical_components')

  event.remove({ id: 'tfmg:winding/resistor' })
  event.remove({ id: 'tfmg:crafting/materials/unfinished_resistor' })
  const resistorWire = Ingredient.of([
    'tfmg:copper_wire',
    'createaddition:copper_wire',
    'createaddition:gold_wire',
    'createaddition:electrum_wire'
  ])
  event.remove({ id: 'case:resistor_from_ceramic_and_electrical_wire' })
  event.recipes.create.sequenced_assembly(
    ['2x tfmg:resistor'],
    'minecraft:clay_ball',
    [
      event.recipes.create.deploying('tfmg:unfinished_resistor', ['tfmg:unfinished_resistor', resistorWire])
    ]
  ).transitionalItem('tfmg:unfinished_resistor').loops(1).id('case:resistor_from_ceramic_and_electrical_wire')

  event.remove({ id: 'refinedstorage:raw_basic_processor' })
  event.recipes.create.sequenced_assembly(
    ['refinedstorage:raw_basic_processor'],
    'tfmg:circuit_board',
    [
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:silicon']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'create:electron_tube']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:processor_binding']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:quartz_enriched_iron'])
    ]
  ).transitionalItem('tfmg:unfinished_circuit_board').loops(1).id('case:raw_basic_processor_from_circuit_board')

  event.remove({ id: 'refinedstorage:raw_improved_processor' })
  event.recipes.create.sequenced_assembly(
    ['refinedstorage:raw_improved_processor'],
    'tfmg:circuit_board',
    [
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:basic_processor']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'create:electron_tube']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:processor_binding']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'create:electron_tube']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:basic_processor']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:quartz_enriched_iron'])
    ]
  ).transitionalItem('tfmg:unfinished_circuit_board').loops(1).id('case:raw_improved_processor_from_circuit_board')

  event.remove({ id: 'refinedstorage:raw_advanced_processor' })
  event.recipes.create.sequenced_assembly(
    ['refinedstorage:raw_advanced_processor'],
    'case:advanced_circuit_board',
    [
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:improved_processor']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'create:electron_tube']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:processor_binding']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'create:electron_tube']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:improved_processor']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:quartz_enriched_iron'])
    ]
  ).transitionalItem('tfmg:unfinished_circuit_board').loops(1).id('case:raw_advanced_processor_from_advanced_circuit_board')

  event.recipes.create.sequenced_assembly(
    ['case:advanced_circuit_board'],
    'tfmg:circuit_board',
    [
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'refinedstorage:basic_processor']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', Ingredient.of('#c:plates/gold')]),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'tfmg:capacitor_item']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'tfmg:resistor']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'tfmg:capacitor_item']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', 'tfmg:resistor']),
      event.recipes.create.deploying('tfmg:unfinished_circuit_board', ['tfmg:unfinished_circuit_board', resistorWire])
    ]
  ).transitionalItem('tfmg:unfinished_circuit_board').loops(1).id('case:advanced_circuit_board_from_circuit_board_and_components')

  event.remove({ id: 'tfmg:sequenced_assembly/transistor' })
  event.remove({ id: 'case:transistor_from_silicon_and_copper_wire' })
  event.recipes.create.sequenced_assembly(
    ['tfmg:transistor_item'],
    'refinedstorage:silicon',
    [
      event.recipes.create.deploying('tfmg:unfinished_transistor', ['tfmg:unfinished_transistor', resistorWire]),
      event.recipes.create.deploying('tfmg:unfinished_transistor', ['tfmg:unfinished_transistor', resistorWire]),
      event.recipes.create.deploying('tfmg:unfinished_transistor', ['tfmg:unfinished_transistor', 'minecraft:iron_nugget'])
    ]
  ).transitionalItem('tfmg:unfinished_transistor').loops(1).id('case:transistor_from_silicon_and_copper_wire')

  event.remove({ id: 'tfmg:deploying/coated_circuit_board' })
  event.recipes.create.deploying(
    ['tfmg:coated_circuit_board'],
    ['tfmg:empty_circuit_board', Ingredient.of('#c:plates/copper')]
  ).id('case:coated_circuit_board_from_copper_sheet')

  event.remove({ id: 'tfmg:crafting/materials/empty_circuit_board' })
  event.recipes.create.pressing(
    ['tfmg:empty_circuit_board'],
    ['tfmg:plastic_sheet']
  ).id('case:empty_circuit_board_from_plastic_sheet')

  event.remove({ id: 'createdieselgenerators:compression_molding/minecart_coupling' })
  event.remove({ id: 'create:crafting/curiosities/minecart_coupling' })
  event.remove({ id: 'case:minecart_coupling_from_steel_plates' })
  event.remove({ id: 'case:minecart_coupling_from_aluminum_plates' })

  const couplingMoldingRecipes = [
    { id: 'iron', ingredient: { tag: 'c:plates/iron' }, count: 1 },
    { id: 'cast_iron', ingredient: { tag: 'c:plates/cast_iron' }, count: 2 },
    { id: 'steel', ingredient: { item: 'tfmg:heavy_plate' }, count: 2 },
    { id: 'aluminum', ingredient: { item: 'tfmg:aluminum_sheet' }, count: 4 }
  ]

  couplingMoldingRecipes.forEach(recipe => {
    event.custom({
      type: 'createdieselgenerators:compression_molding',
      ingredients: [recipe.ingredient],
      mold: 'createdieselgenerators:chain',
      results: [{ count: recipe.count, id: 'create:minecart_coupling' }]
    }).id(`case:compression_molding/minecart_coupling_from_${recipe.id}_plate`)
  })

  event.remove({ id: 'createmetallurgy:mixing/refractory_mortar' })
  event.custom({
    type: 'create:mixing',
    ingredients: [
      { tag: 'c:sands' },
      { tag: 'c:sands' },
      { item: 'minecraft:clay_ball' },
      { type: 'neoforge:single', amount: 100, fluid: 'minecraft:water' }
    ],
    results: [
      { id: 'createmetallurgy:refractory_mortar_ball' }
    ]
  }).id('case:refractory_mortar_ball_from_sand_clay_and_water')

  event.shaped('minecraft:ender_pearl', [
    'RAR',
    'ADA',
    'RAR'
  ], {
    R: 'create:polished_rose_quartz',
    A: 'northstar:polished_amethyst',
    D: 'mekanism:dust_diamond'
  }).id('case:ender_pearl_from_gems')

  event.remove({ id: 'create:crafting/kinetics/steam_engine' })
  event.shaped('create:steam_engine', [
    ' G ',
    'SSS',
    'CPC'
  ], {
    G: 'create:brass_sheet',
    S: 'create:shaft',
    P: 'create:fluid_pipe',
    C: 'minecraft:copper_block'
  }).id('case:steam_engine_from_shafts_and_copper')

  event.remove({ id: 'minecraft:clock' })
  event.shaped('minecraft:clock', [
    'PGP',
    'CQC',
    'PRP'
  ], {
    P: 'create:golden_sheet',
    G: 'minecraft:glass',
    R: 'minecraft:redstone',
    Q: 'minecraft:quartz',
    C: '#c:cogwheels'
  }).id('case:clock_from_gold_glass_redstone_and_quartz')

  event.remove({ id: 'create:crafting/kinetics/gearbox' })
  event.shaped('create:gearbox', [
    'CSC'
  ], {
    C: '#c:cogwheels',
    S: 'create:shaft'
  }).id('case:gearbox_from_cogwheels_and_shaft')

  event.remove({ id: 'create:crafting/kinetics/vertical_gearbox' })
  event.shaped('create:vertical_gearbox', [
    'C',
    'S',
    'C'
  ], {
    C: '#c:cogwheels',
    S: 'create:shaft'
  }).id('case:vertical_gearbox_from_cogwheels_and_shaft')

  event.remove({ id: 'createmetallurgy:crafting/content/foundry_mixer' })
  event.shaped('createmetallurgy:foundry_mixer', [
    'C',
    'B',
    'W'
  ], {
    C: '#c:cogwheels',
    B: 'create:copper_casing',
    W: 'createmetallurgy:sturdy_whisk'
  }).id('case:foundry_mixer_from_cast_iron_cogwheel')

  event.replaceInput(
    { id: 'create:crafting/kinetics/fluid_tank' },
    '#c:barrels/wooden',
    'minecraft:glass'
  )

  event.replaceInput(
    { id: 'tfmg:crafting/materials/aluminum_fluid_tank' },
    'minecraft:barrel',
    'minecraft:glass'
  )

  event.replaceInput(
    { id: 'tfmg:crafting/materials/cast_iron_fluid_tank' },
    'minecraft:barrel',
    'minecraft:glass'
  )

  event.replaceInput(
    { id: 'tfmg:crafting/materials/steel_fluid_tank' },
    'minecraft:barrel',
    'minecraft:glass'
  )

  event.remove({ id: 'createdieselgenerators:crafting/engine_piston' })
  event.remove({ id: 'createdieselgenerators:crafting/engine_piston_from_rods' })
  event.shaped('2x createdieselgenerators:engine_piston', [
    'I  ',
    ' R ',
    '  N'
  ], {
    I: '#c:ingots/steel',
    R: '#c:rods/steel',
    N: '#c:nuggets/steel'
  }).id('case:engine_piston_from_steel')

  event.shaped('4x createdieselgenerators:engine_piston', [
    'I  ',
    ' R ',
    '  N'
  ], {
    I: '#c:ingots/aluminum',
    R: 'case:aluminum_rod',
    N: 'tfmg:aluminum_nugget'
  }).id('case:engine_piston_from_aluminum')

  event.remove({ id: 'createdieselgenerators:crafting/engine_silencer' })
  event.shaped('createdieselgenerators:engine_silencer', [
    ' I ',
    'WPW',
    ' I '
  ], {
    I: '#c:plates/iron',
    W: '#minecraft:wool',
    P: 'tfmg:industrial_pipe'
  }).id('case:engine_silencer_from_pipe_wool_and_iron')

  event.remove({ id: 'createdieselgenerators:crafting/engine_turbocharger' })
  event.shaped('createdieselgenerators:engine_turbocharger', [
    ' P ',
    'IRI',
    ' C '
  ], {
    P: 'tfmg:industrial_pipe',
    R: 'create:propeller',
    I: '#c:plates/iron',
    C: 'case:engine_cylinder'
  }).id('case:engine_turbocharger_from_pipe_propeller_and_cylinder')

  event.remove({ id: 'createdieselgenerators:crafting/diesel_engine' })
  event.shaped('createdieselgenerators:diesel_engine', [
    ' M ',
    ' A ',
    ' T '
  ], {
    M: 'tfmg:steel_mechanism',
    A: 'simulated:engine_assembly',
    T: 'tfmg:steel_fluid_tank'
  }).id('case:diesel_engine_from_steel_mechanism')

  event.remove({ id: 'createdieselgenerators:crafting/large_diesel_engine' })
  event.shaped('createdieselgenerators:large_diesel_engine', [
    'SMS',
    'IAI',
    'STS'
  ], {
    M: 'tfmg:steel_mechanism',
    A: 'simulated:engine_assembly',
    T: 'tfmg:steel_fluid_tank',
    I: 'tfmg:industrial_pipe',
    S: 'tfmg:heavy_plate'
  }).id('case:large_diesel_engine_from_steel_components')

  event.remove({ id: 'createdieselgenerators:crafting/huge_diesel_engine' })
  event.shaped('createdieselgenerators:huge_diesel_engine', [
    'STS',
    'AMA',
    'HHH'
  ], {
    T: 'tfmg:steel_fluid_tank',
    A: 'simulated:engine_assembly',
    M: 'tfmg:steel_mechanism',
    S: 'tfmg:heavy_plate',
    H: 'create:shaft'
  }).id('case:huge_diesel_engine_from_steel_components')

  event.remove({ id: 'northstar:crafting/combustion_engine' })
  event.shaped('northstar:combustion_engine', [
    'TCT',
    'AAA',
    'TFT'
  ], {
    T: 'northstar:titanium_sheet',
    C: 'northstar:rocket_combustion_chamber',
    A: 'simulated:engine_assembly',
    F: 'tfmg:steel_fluid_tank'
  }).id('case:combustion_engine_from_engine_assemblies')

  event.remove({ id: 'northstar:crafting/rocket_thruster' })
  event.shaped('northstar:rocket_thruster', [
    'TCT',
    'TET',
    'T T'
  ], {
    T: 'northstar:titanium_sheet',
    C: 'northstar:rocket_combustion_chamber',
    E: 'northstar:combustion_engine'
  }).id('case:rocket_thruster_from_combustion_engine')

  event.remove({ id: 'create:sequenced_assembly/precision_mechanism' })
  const incompletePrecisionMechanism = 'create:incomplete_precision_mechanism'
  event.recipes.create.sequenced_assembly(
    ['create:precision_mechanism'],
    'create:brass_sheet',
    [
      event.recipes.create.deploying(incompletePrecisionMechanism, [
        incompletePrecisionMechanism,
        'create:cogwheel'
      ]),
      event.recipes.create.deploying(incompletePrecisionMechanism, [
        incompletePrecisionMechanism,
        'create:brass_sheet'
      ]),
      event.recipes.create.deploying(incompletePrecisionMechanism, [
        incompletePrecisionMechanism,
        'create:large_cogwheel'
      ]),
      event.recipes.create.deploying(incompletePrecisionMechanism, [
        incompletePrecisionMechanism,
        'create:brass_sheet'
      ]),
      event.recipes.create.deploying(incompletePrecisionMechanism, [
        incompletePrecisionMechanism,
        'tfmg:screw'
      ])
    ]
  ).transitionalItem(incompletePrecisionMechanism).loops(1)
    .id('case:precision_mechanism_from_create_cogwheels')

  event.recipes.create.sequenced_assembly(
    ['case:basic_mechanism'],
    Ingredient.of('#c:plates/iron'),
    [
      event.recipes.create.deploying(incompletePrecisionMechanism, [
        incompletePrecisionMechanism,
        'create:cogwheel'
      ]),
      event.recipes.create.deploying(incompletePrecisionMechanism, [
        incompletePrecisionMechanism,
        Ingredient.of('#c:plates/iron')
      ]),
      event.recipes.create.deploying(incompletePrecisionMechanism, [
        incompletePrecisionMechanism,
        'create:large_cogwheel'
      ]),
      event.recipes.create.deploying(incompletePrecisionMechanism, [
        incompletePrecisionMechanism,
        Ingredient.of('#c:plates/iron')
      ]),
      event.recipes.create.deploying(incompletePrecisionMechanism, [
        incompletePrecisionMechanism,
        'tfmg:screw'
      ])
    ]
  ).transitionalItem(incompletePrecisionMechanism).loops(1)
    .id('case:basic_mechanism_from_iron_plates_and_create_cogwheels')

  event.remove({ id: 'northstar:sequenced_assembly/hardened_precision_mechanism' })
  const incompleteAdvancedMechanism = 'northstar:incomplete_hardened_precision_mechanism'
  event.recipes.create.sequenced_assembly(
    ['northstar:hardened_precision_mechanism'],
    Ingredient.of('#c:plates/titanium'),
    [
      event.recipes.create.deploying(incompleteAdvancedMechanism, [
        incompleteAdvancedMechanism,
        'simulated:gyroscopic_mechanism'
      ]),
      event.recipes.create.deploying(incompleteAdvancedMechanism, [
        incompleteAdvancedMechanism,
        Ingredient.of('#c:plates/titanium')
      ]),
      event.recipes.create.deploying(incompleteAdvancedMechanism, [
        incompleteAdvancedMechanism,
        'minecraft:clock'
      ]),
      event.recipes.create.deploying(incompleteAdvancedMechanism, [
        incompleteAdvancedMechanism,
        Ingredient.of('#c:plates/titanium')
      ]),
      event.recipes.create.deploying(incompleteAdvancedMechanism, [
        incompleteAdvancedMechanism,
        'tfmg:screw'
      ])
    ]
  ).transitionalItem(incompleteAdvancedMechanism).loops(1)
    .id('case:advanced_mechanism_from_titanium_plates_and_components')

  event.remove({ id: 'tfmg:sequenced_assembly/steel_mechanism' })
  const incompleteSteelMechanism = 'tfmg:unfinished_steel_mechanism'
  event.recipes.create.sequenced_assembly(
    ['tfmg:steel_mechanism'],
    'tfmg:heavy_plate',
    [
      event.recipes.create.deploying(incompleteSteelMechanism, [
        incompleteSteelMechanism,
        'tfmg:steel_cogwheel'
      ]),
      event.recipes.create.deploying(incompleteSteelMechanism, [
        incompleteSteelMechanism,
        'tfmg:heavy_plate'
      ]),
      event.recipes.create.deploying(incompleteSteelMechanism, [
        incompleteSteelMechanism,
        'tfmg:large_steel_cogwheel'
      ]),
      event.recipes.create.deploying(incompleteSteelMechanism, [
        incompleteSteelMechanism,
        'tfmg:heavy_plate'
      ]),
      event.recipes.create.deploying(incompleteSteelMechanism, [
        incompleteSteelMechanism,
        'tfmg:screw'
      ])
    ]
  ).transitionalItem(incompleteSteelMechanism).loops(1)
    .id('case:steel_mechanism_from_steel_sheets_and_cogs')

  event.remove({ id: 'simulated:sequenced_assembly/engine_assembly' })
  const incompleteEngineAssembly = 'simulated:incomplete_engine_assembly'
  event.recipes.create.sequenced_assembly(
    ['simulated:engine_assembly'],
    'tfmg:heavy_plate',
    [
      event.recipes.create.deploying(incompleteEngineAssembly, [
        incompleteEngineAssembly,
        'createdieselgenerators:engine_piston'
      ]),
      event.recipes.create.deploying(incompleteEngineAssembly, [
        incompleteEngineAssembly,
        'case:engine_cylinder'
      ]),
      event.recipes.create.deploying(incompleteEngineAssembly, [
        incompleteEngineAssembly,
        'create:minecart_coupling'
      ]),
      event.recipes.create.deploying(incompleteEngineAssembly, [
        incompleteEngineAssembly,
        'case:engine_cylinder'
      ]),
      event.recipes.create.deploying(incompleteEngineAssembly, [
        incompleteEngineAssembly,
        'createdieselgenerators:engine_piston'
      ])
    ]
  ).transitionalItem(incompleteEngineAssembly).loops(2)
    .id('case:engine_assembly_from_steel_plate_and_engine_parts')

  event.recipes.create.sequenced_assembly(
    ['2x simulated:engine_assembly'],
    'tfmg:aluminum_sheet',
    [
      event.recipes.create.deploying(incompleteEngineAssembly, [
        incompleteEngineAssembly,
        'createdieselgenerators:engine_piston'
      ]),
      event.recipes.create.deploying(incompleteEngineAssembly, [
        incompleteEngineAssembly,
        'case:engine_cylinder'
      ]),
      event.recipes.create.deploying(incompleteEngineAssembly, [
        incompleteEngineAssembly,
        'create:minecart_coupling'
      ]),
      event.recipes.create.deploying(incompleteEngineAssembly, [
        incompleteEngineAssembly,
        'case:engine_cylinder'
      ]),
      event.recipes.create.deploying(incompleteEngineAssembly, [
        incompleteEngineAssembly,
        'createdieselgenerators:engine_piston'
      ])
    ]
  ).transitionalItem(incompleteEngineAssembly).loops(2)
    .id('case:engine_assembly_from_aluminum_plate_and_engine_parts')

  event.shaped('4x minecraft:torch', [
    'P',
    'S'
  ], {
    P: 'createpropulsion:pine_resin',
    S: 'minecraft:stick'
  }).id('case:torch_from_pine_resin')

  event.remove({ output: 'minecraft:flint_and_steel' })
  event.shaped('minecraft:flint_and_steel', [
    ' S',
    'F '
  ], {
    S: '#c:ingots/steel',
    F: 'minecraft:flint'
  }).id('case:flint_and_steel_from_steel')

  event.shaped('minecraft:flint_and_steel', [
    ' I',
    'F '
  ], {
    I: 'minecraft:iron_ingot',
    F: 'minecraft:flint'
  }).id('case:flint_and_steel_from_iron')

  event.stonecutting('8x tfmg:industrial_pipe', '#c:ingots/cast_iron')
    .id('case:industrial_pipe_from_cast_iron')

  event.remove({ id: 'tfmg:crafting/materials/steel_cogwheel' })
  event.shapeless('4x tfmg:steel_cogwheel', [
    'create:shaft',
    '#c:ingots/steel'
  ]).id('tfmg:crafting/materials/steel_cogwheel')

  event.remove({ id: 'tfmg:crafting/materials/large_steel_cogwheel' })
  event.shapeless('4x tfmg:large_steel_cogwheel', [
    'create:shaft',
    '#c:ingots/steel',
    '#c:ingots/steel'
  ]).id('tfmg:crafting/materials/large_steel_cogwheel')

  event.remove({ id: 'tfmg:crafting/materials/aluminum_cogwheel' })
  event.shapeless('8x tfmg:aluminum_cogwheel', [
    'create:shaft',
    'tfmg:aluminum_ingot'
  ]).id('tfmg:crafting/materials/aluminum_cogwheel')

  event.remove({ id: 'tfmg:crafting/materials/large_aluminum_cogwheel' })
  event.shapeless('8x tfmg:large_aluminum_cogwheel', [
    'create:shaft',
    'tfmg:aluminum_ingot',
    'tfmg:aluminum_ingot'
  ]).id('tfmg:crafting/materials/large_aluminum_cogwheel')

  event.shapeless('4x tfmg:large_steel_cogwheel', [
    'tfmg:steel_cogwheel',
    '#c:ingots/steel'
  ]).id('case:large_steel_cogwheel_from_small')

  event.shapeless('8x tfmg:large_aluminum_cogwheel', [
    'tfmg:aluminum_cogwheel',
    'tfmg:aluminum_ingot'
  ]).id('case:large_aluminum_cogwheel_from_small')

  event.shapeless('create:cogwheel', [
    'create:large_cogwheel'
  ]).id('case:cogwheel_from_large_cogwheel')

  event.shapeless('tfmg:steel_cogwheel', [
    'tfmg:large_steel_cogwheel'
  ]).id('case:steel_cogwheel_from_large_cogwheel')

  event.shapeless('tfmg:aluminum_cogwheel', [
    'tfmg:large_aluminum_cogwheel'
  ]).id('case:aluminum_cogwheel_from_large_cogwheel')

  event.remove({ id: 'create:crafting/kinetics/cogwheel' })
  event.shapeless('create:cogwheel', [
    'create:shaft',
    '#minecraft:planks'
  ]).id('create:crafting/kinetics/cogwheel')

  event.shapeless('create:cogwheel', [
    'create:shaft',
    '#c:ingots/iron'
  ]).id('case:create_cogwheel_from_iron_ingot_and_shaft')

  event.remove({ id: 'create:crafting/kinetics/large_cogwheel' })
  event.shapeless('create:large_cogwheel', [
    'create:shaft',
    '#minecraft:planks',
    '#minecraft:planks'
  ]).id('create:crafting/kinetics/large_cogwheel')

  event.shapeless('create:large_cogwheel', [
    'create:shaft',
    '#c:ingots/iron',
    '#c:ingots/iron'
  ]).id('case:create_large_cogwheel_from_iron_ingots_and_shaft')

  event.shapeless('2x create:cogwheel', [
    'create:shaft',
    '#c:ingots/cast_iron'
  ]).id('case:create_cogwheel_from_cast_iron_ingot_and_shaft')

  event.shapeless('2x create:large_cogwheel', [
    'create:shaft',
    '#c:ingots/cast_iron',
    '#c:ingots/cast_iron'
  ]).id('case:create_large_cogwheel_from_cast_iron_ingots_and_shaft')

  event.shapeless('create:large_cogwheel', [
    'create:cogwheel',
    '#c:ingots/iron'
  ]).id('case:create_large_cogwheel_from_iron_cogwheel')

  event.shapeless('2x create:large_cogwheel', [
    'create:cogwheel',
    '#c:ingots/cast_iron'
  ]).id('case:create_large_cogwheel_from_cast_iron_cogwheel')

  event.recipes.create.deploying(
    'create:cogwheel',
    ['create:shaft', Ingredient.of('#c:ingots/iron')]
  ).id('case:create_cogwheel_from_iron_ingot_deploying')

  event.recipes.create.deploying(
    'create:large_cogwheel',
    ['create:cogwheel', Ingredient.of('#c:ingots/iron')]
  ).id('case:create_large_cogwheel_from_iron_ingot_deploying')

  event.recipes.create.deploying(
    '2x create:cogwheel',
    ['create:shaft', Ingredient.of('#c:ingots/cast_iron')]
  ).id('case:create_cogwheel_from_cast_iron_ingot_deploying')

  event.recipes.create.deploying(
    '2x create:large_cogwheel',
    ['create:cogwheel', Ingredient.of('#c:ingots/cast_iron')]
  ).id('case:create_large_cogwheel_from_cast_iron_ingot_deploying')

  event.recipes.create.deploying(
    '4x tfmg:large_steel_cogwheel',
    ['tfmg:steel_cogwheel', Ingredient.of('#c:ingots/steel')]
  ).id('case:large_steel_cogwheel_from_small_deploying')

  event.recipes.create.deploying(
    '8x tfmg:large_aluminum_cogwheel',
    ['tfmg:aluminum_cogwheel', Ingredient.of('#c:ingots/aluminum')]
  ).id('case:large_aluminum_cogwheel_from_small_deploying')

  event.shaped('12x create:shaft', [
    ' I ',
    ' I '
  ], {
    I: '#c:ingots/cast_iron'
  }).id('case:shaft_from_cast_iron_ingot')

  event.shaped('16x create:shaft', [
    ' I ',
    ' I '
  ], {
    I: '#c:ingots/steel'
  }).id('case:shaft_from_steel_ingot')

  event.shaped('24x create:shaft', [
    ' I ',
    ' I '
  ], {
    I: '#c:ingots/aluminum'
  }).id('case:shaft_from_aluminum_ingot')

  event.recipes.create.cutting(
    [Item.of('create:shaft', 9)],
    Ingredient.of('#c:ingots/cast_iron')
  ).processingTime(200).id('case:shaft_from_cast_iron_sawing')

  event.recipes.create.cutting(
    [Item.of('create:shaft', 12)],
    Ingredient.of('#c:ingots/steel')
  ).processingTime(200).id('case:shaft_from_steel_sawing')

  event.recipes.create.cutting(
    [Item.of('create:shaft', 18)],
    Ingredient.of('#c:ingots/aluminum')
  ).processingTime(200).id('case:shaft_from_aluminum_sawing')

  event.replaceInput(
    { id: 'northstar:crafting/iron_cogwheel' },
    'create:industrial_iron_block',
    '#c:ingots/cast_iron'
  )

  event.replaceInput(
    { id: 'northstar:crafting/iron_large_cogwheel' },
    'create:industrial_iron_block',
    '#c:ingots/cast_iron'
  )

  event.replaceInput(
    { id: 'northstar:crafting/iron_large_cogwheel_from_small' },
    'create:industrial_iron_block',
    '#c:ingots/cast_iron'
  )

  event.stonecutting('1x tfmg:screw', '#c:ingots/iron')
    .id('case:screw_from_iron_ingot')

  event.stonecutting('2x tfmg:screw', '#c:ingots/cast_iron')
    .id('case:screw_from_cast_iron_ingot')

  event.stonecutting('8x tfmg:screw', '#c:ingots/aluminum')
    .id('case:screw_from_aluminum_ingot')

  event.remove({ id: 'tfmg:crafting/materials/rebar' })
  event.custom({
    type: 'createaddition:rolling',
    ingredients: [
      { item: 'tfmg:steel_ingot' }
    ],
    results: [
      { id: 'tfmg:rebar' }
    ]
  }).id('case:rebar_from_steel_ingot_rolling')

  event.remove({ id: 'createaddition:crafting/spool' })
  event.shaped('24x createaddition:spool', [
    'P',
    'R',
    'P'
  ], {
    P: 'tfmg:hardened_planks',
    R: '#c:rods/iron'
  }).id('case:spool_from_hardened_planks')

  event.remove({ id: 'farmersdelight:cooking_pot' })
  event.shaped('farmersdelight:cooking_pot', [
    'bSb',
    'iWi',
    'iii'
  ], {
    S: '#minecraft:shovels',
    W: '#c:buckets/water',
    b: 'minecraft:brick',
    i: '#c:plates/cast_iron'
  }).id('case:cooking_pot_from_cast_iron_plates')

  event.remove({ id: 'farmersdelight:skillet' })
  event.shaped('farmersdelight:skillet', [
    ' ##',
    ' ##',
    '/  '
  ], {
    '#': '#c:plates/cast_iron',
    '/': 'minecraft:brick'
  }).id('case:skillet_from_cast_iron_plates')

  event.remove({ id: 'farmersdelight:stove' })
  event.shaped('farmersdelight:stove', [
    'iii',
    'B B',
    'BCB'
  ], {
    B: 'minecraft:bricks',
    C: 'minecraft:campfire',
    i: '#c:plates/cast_iron'
  }).id('case:stove_from_cast_iron_plates')

  event.remove({ id: 'createmetallurgy:crafting/content/sturdy_whisk' })
  event.shaped('createmetallurgy:sturdy_whisk', [
    ' A ',
    'BAB',
    'BBB'
  ], {
    A: 'create:andesite_alloy',
    B: '#c:plates/cast_iron'
  }).id('case:sturdy_whisk_from_cast_iron_plates')

  event.remove({ id: 'createmetallurgy:crafting/content/foundry_lid' })
  event.shaped('createmetallurgy:foundry_lid', [
    'AAA',
    'A A'
  ], {
    A: '#c:plates/cast_iron'
  }).id('case:foundry_lid_from_cast_iron_plates')

  event.remove({ id: 'createmetallurgy:crafting/content/foundry_basin' })
  event.shaped('createmetallurgy:foundry_basin', [
    'A A',
    'APA',
    'AAA'
  ], {
    A: '#c:plates/cast_iron',
    P: 'createmetallurgy:refractory_mortar'
  }).id('case:foundry_basin_from_cast_iron_plates')

  event.remove({ id: 'createmetallurgy:crafting/content/casting_table' })
  event.shaped('createmetallurgy:casting_table', [
    'AAA',
    'A A',
    'A A'
  ], {
    A: '#c:plates/cast_iron'
  }).id('case:casting_table_from_cast_iron_plates')

  event.remove({ id: 'createmetallurgy:crafting/content/casting_basin' })
  event.shaped('createmetallurgy:casting_basin', [
    'A A',
    'A A',
    ' A '
  ], {
    A: '#c:plates/cast_iron'
  }).id('case:casting_basin_from_cast_iron_plates')

  event.remove({ id: 'createdieselgenerators:crafting/oil_scanner' })
  event.shaped('createdieselgenerators:oil_scanner', [
    ' C ',
    'PSP',
    ' R '
  ], {
    C: 'minecraft:comparator',
    P: '#c:plates/iron',
    S: 'create:precision_mechanism',
    R: 'createaddition:iron_rod'
  }).id('case:oil_scanner_from_steel_mechanism')

  event.shaped('minecraft:sticky_piston', [
    'R',
    'P'
  ], {
    R: 'createpropulsion:pine_resin',
    P: 'minecraft:piston'
  }).id('case:sticky_piston_from_pine_resin')

  event.remove({ id: 'refinedstorage:processor_binding' })
  event.shaped('8x refinedstorage:processor_binding', [
    'SPS'
  ], {
    S: '#c:silicon',
    P: 'createpropulsion:pine_resin'
  }).id('case:processor_binding_from_pine_resin_and_silicon')

  event.remove({ id: 'sophisticatedstorage:packing_tape' })
  event.remove({ id: 'case:packing_tape_from_resin_and_paper' })
  event.shapeless('sophisticatedstorage:packing_tape', [
    'createpropulsion:pine_resin',
    'minecraft:paper'
  ]).id('case:packing_tape_from_pine_resin_and_paper')

  event.remove({ id: 'create:crafting/kinetics/sticky_mechanical_piston' })
  event.shaped('create:sticky_mechanical_piston', [
    'R',
    'P'
  ], {
    R: 'createpropulsion:pine_resin',
    P: 'create:mechanical_piston'
  }).id('case:sticky_mechanical_piston_from_pine_resin')

  event.remove({ id: 'create:crafting/kinetics/sticker' })
  event.shaped('create:sticker', [
    'IAI',
    'CRC'
  ], {
    I: 'create:andesite_alloy',
    A: 'createpropulsion:pine_resin',
    C: '#c:cobblestones',
    R: '#c:dusts/redstone'
  }).id('case:sticker_from_pine_resin')

  event.remove({ id: 'create:crafting/logistics/package_frogport' })
  event.shaped('create:package_frogport', [
    'R',
    'V',
    'A'
  ], {
    R: 'createpropulsion:pine_resin',
    V: 'create:item_vault',
    A: 'create:andesite_alloy'
  }).id('case:package_frogport_from_pine_resin')

  event.remove({ id: 'minecraft:lead' })
  event.shaped('2x minecraft:lead', [
    'SS ',
    'SRS',
    '  S'
  ], {
    S: '#c:strings',
    R: 'createpropulsion:pine_resin'
  }).id('case:lead_from_pine_resin')

  event.replaceInput(
    { id: 'simulated:mechanical_crafting/plunger_launcher' },
    '#c:slimeballs',
    'createpropulsion:pine_resin'
  )

  event.remove({ id: 'toms_storage:storage_terminal' })
  event.shaped('toms_storage:storage_terminal', [
    'SES',
    'CBG',
    'SES'
  ], {
    S: '#c:plates/brass',
    E: 'create:electron_tube',
    C: 'minecraft:comparator',
    B: 'create:brass_casing',
    G: '#c:glass_blocks/colorless'
  }).id('case:storage_terminal')

  event.remove({ id: 'toms_storage:inventory_connector' })
  event.shapeless('toms_storage:inventory_connector', [
    'functionalstorage:storage_controller',
    'sophisticatedstorage:controller'
  ]).id('case:inventory_connector_from_storage_controllers')

  event.remove({ id: 'offroad:monstrous_tire' })
  event.shaped('offroad:monstrous_tire', [
    ' R ',
    'RSR',
    ' R '
  ], {
    R: 'rubberworks:rubber_sheet_block',
    S: 'create:shaft'
  }).id('case:monstrous_tire_from_rubber_sheet_blocks')
  event.replaceInput(
    { id: 'create:crafting/kinetics/hose_pulley' },
    'rubberworks:rubber_block',
    'rubberworks:rubber_sheet_block'
  )
  event.replaceInput(
    { id: 'create:crafting/kinetics/elevator_pulley' },
    'rubberworks:rubber_block',
    'rubberworks:rubber_sheet_block'
  )

  event.remove({ id: 'toms_storage:crafting_terminal' })
  event.shaped('toms_storage:crafting_terminal', [
    ' T ',
    'CSL',
    '   '
  ], {
    T: 'create:transmitter',
    C: 'minecraft:crafting_table',
    S: 'toms_storage:storage_terminal',
    L: 'simulated:linked_typewriter'
  }).id('case:crafting_terminal')

  event.recipes.create.sandpaper_polishing(
    'case:andesite_dust',
    'minecraft:andesite'
  ).id('case:sandpaper_crushed_andesite')

  event.recipes.create.milling(
    'case:crushed_andesite',
    'minecraft:andesite'
  ).id('case:crushed_andesite_from_milling')

  event.recipes.create.milling(
    Item.of('createdieselgenerators:wood_chip', 8),
    Ingredient.of('#minecraft:logs')
  ).id('case:wood_chip_from_logs')

  event.recipes.create.item_application(
    'createdieselgenerators:wood_chip',
    [
      Ingredient.of('#minecraft:planks'),
      Ingredient.of('#minecraft:axes')
    ]
  ).id('case:wood_chip_from_plank_and_axe')

  event.recipes.create.pressing(
    'minecraft:glass_bottle',
    'minecraft:glass'
  ).id('case:glass_bottle_from_pressed_glass')

  event.shapeless('cmverticaladditions:vertical_belt_connector', [
    'create:belt_connector',
    'createpropulsion:pine_resin'
  ]).id('case:vertical_belt_connector_from_pine_resin')

  event.recipes.create.sandpaper_polishing(
    'minecraft:flint',
    'minecraft:gravel'
  ).id('case:flint_from_sandpaper_gravel')

  event.recipes.create.milling(
    [Item.of('tfmg:limesand')],
    [Ingredient.of('create:limestone')]
  ).id('case:limesand_from_limestone')

  event.custom({
    type: 'minecraft:campfire_cooking',
    category: 'blocks',
    ingredient: { item: 'minecraft:clay_ball' },
    result: { count: 1, id: 'minecraft:brick' },
    experience: 0.35,
    cookingtime: 600
  }).id('case:brick_from_clay_ball_campfire')

  event.recipes.create.crushing(
    'tfmg:limesand',
    'create:limestone'
  ).id('case:limesand_from_crushing_limestone')

  event.recipes.create.splashing(
    CreateItem.of('northstar:rutile_concentrate', 0.10),
    'tfmg:limesand'
  ).id('case:rutile_concentrate_from_washing_limestone_dust')

  event.remove({ id: 'grapplemod:grappling_hook' })
  event.shaped('grapplemod:grappling_hook', [
    '  P',
    ' S ',
    'S  '
  ], {
    P: 'minecraft:iron_pickaxe',
    S: Ingredient.of('#c:ropes')
  }).id('case:grappling_hook_from_iron_pickaxe')

  event.remove({ id: 'createdieselgenerators:crafting/hammer' })
  event.shaped('createdieselgenerators:hammer', [
    ' I ',
    'ISI',
    'SI '
  ], {
    S: Ingredient.of('#c:rods/wooden'),
    I: Ingredient.of('#c:ingots/iron')
  }).id('case:diesel_generators_hammer_without_alloy')

  event.remove({ id: 'simulated:sequenced_assembly/gyroscopic_mechanism' })
  event.shaped('simulated:gyroscopic_mechanism', [
    'RRR',
    ' C ',
    'RRR'
  ], {
    R: Ingredient.of('#c:rods/all_metal'),
    C: Ingredient.of('#c:cogwheels')
  }).id('case:gyroscopic_mechanism_from_iron_rods_and_cogwheel')

  event.remove({ id: 'supplementaries:quiver' })
  event.custom({
    type: 'minecraft:crafting_shaped',
    pattern: [
      'L R',
      'LR ',
      'L  '
    ],
    key: {
      L: { tag: 'c:leather' },
      R: { tag: 'c:ropes' }
    },
    result: {
      id: 'supplementaries:quiver',
      count: 1
    }
  }).id('case:quiver_from_leather_and_rope')

  event.remove({ id: 'createaddition:mixing/bioethanol' })
  event.custom({
    type: 'create:mixing',
    ingredients: [
      { item: 'createaddition:biomass' }
    ],
    results: [
      { amount: 125, id: 'createaddition:bioethanol' }
    ]
  }).id('case:bioethanol_from_biomass')

  event.custom({
    type: 'createdieselgenerators:hammering',
    ingredients: [
      { item: 'create:andesite_alloy' }
    ],
    results: [
      { id: 'createdeco:andesite_sheet' }
    ]
  }).id('case:andesite_plate_from_hammering')

  event.custom({
    type: 'createdieselgenerators:hammering',
    ingredients: [
      { tag: 'c:ingots/cast_iron' }
    ],
    results: [
      { id: 'tfmg:cast_iron_sheet' }
    ]
  }).id('case:cast_iron_plate_from_hammering')

  // Consolidate Create Deco's Industrial Iron material into TFMG Cast Iron.
  // Keep Create's block item for compatibility, but build it from four plates.
  event.remove({ output: 'createdeco:industrial_iron_ingot' })
  event.remove({ output: 'createdeco:industrial_iron_nugget' })
  event.remove({ output: 'createdeco:industrial_iron_sheet' })
  event.remove({ output: 'create:industrial_iron_block' })
  event.shaped('8x create:industrial_iron_block', [
    'PP',
    'PP'
  ], {
    P: '#c:plates/cast_iron'
  }).id('case:industrial_iron_block_from_cast_iron_plates')

  // Retain Deco's block IDs, but make the entire decorative set use Cast Iron
  // Plates directly through stonecutting.
  const decoCastIronStonecutting = [
    ['industrial_iron_bars', 16],
    ['industrial_iron_bars_overlay', 16],
    ['industrial_iron_catwalk', 4],
    ['industrial_iron_catwalk_railing', 8],
    ['industrial_iron_catwalk_stairs', 2],
    ['industrial_iron_coinstack', 1],
    ['industrial_iron_door', 1],
    ['industrial_iron_hull', 2],
    ['industrial_iron_ladder', 2],
    ['industrial_iron_mesh_fence', 16],
    ['industrial_iron_sheet_metal', 4],
    ['industrial_iron_support', 4],
    ['industrial_iron_support_wedge', 3],
    ['industrial_iron_trapdoor', 1],
    ['industrial_iron_window', 2],
    ['industrial_iron_window_pane', 16],
    ['locked_industrial_iron_door', 1],
    ['blue_industrial_iron_lamp', 1],
    ['green_industrial_iron_lamp', 1],
    ['red_industrial_iron_lamp', 1],
    ['yellow_industrial_iron_lamp', 1]
  ]
  for (const [name, count] of decoCastIronStonecutting) {
    event.remove({ output: `createdeco:${name}` })
    event.stonecutting(`${count}x createdeco:${name}`, '#c:plates/cast_iron')
      .id(`case:${name}_from_cast_iron_plate_stonecutting`)
  }

  // Move all Create Deco Andesite Alloy decorative recipes onto Andesite
  // Alloy Plates. Counts preserve the original crafting yields.
  const decoAndesitePlateStonecutting = [
    ['andesite_bars', 16],
    ['andesite_bars_overlay', 16],
    ['andesite_catwalk', 4],
    ['andesite_catwalk_railing', 8],
    ['andesite_catwalk_stairs', 2],
    ['andesite_door', 3],
    ['andesite_hull', 2],
    ['andesite_mesh_fence', 16],
    ['andesite_sheet_metal', 4],
    ['andesite_support', 4],
    ['andesite_support_wedge', 3],
    ['andesite_trapdoor', 1],
    ['andesite_window', 2],
    ['andesite_window_pane', 16],
    ['locked_andesite_door', 1],
    ['blue_andesite_lamp', 1],
    ['green_andesite_lamp', 1],
    ['red_andesite_lamp', 1],
    ['yellow_andesite_lamp', 1]
  ]
  for (const [name, count] of decoAndesitePlateStonecutting) {
    event.remove({ output: `createdeco:${name}` })
    event.stonecutting(`${count}x createdeco:${name}`, '#c:plates/andesite_alloy')
      .id(`case:${name}_from_andesite_alloy_plate_stonecutting`)
  }

  // Move all Create Deco Zinc decorative recipes onto Zinc Plates. Counts
  // preserve the original crafting yields; coin recipes remain separate.
  const decoZincPlateStonecutting = [
    ['zinc_bars', 16],
    ['zinc_bars_overlay', 16],
    ['zinc_catwalk', 4],
    ['zinc_catwalk_railing', 8],
    ['zinc_catwalk_stairs', 2],
    ['zinc_door', 3],
    ['zinc_hull', 2],
    ['zinc_ladder', 2],
    ['zinc_mesh_fence', 16],
    ['zinc_sheet_metal', 4],
    ['zinc_support', 4],
    ['zinc_support_wedge', 3],
    ['zinc_trapdoor', 1],
    ['zinc_window', 2],
    ['zinc_window_pane', 16],
    ['locked_zinc_door', 1],
    ['blue_zinc_lamp', 1],
    ['green_zinc_lamp', 1],
    ['red_zinc_lamp', 1],
    ['yellow_zinc_lamp', 1]
  ]
  for (const [name, count] of decoZincPlateStonecutting) {
    event.remove({ output: `createdeco:${name}` })
    event.stonecutting(`${count}x createdeco:${name}`, '#c:plates/zinc')
      .id(`case:${name}_from_zinc_plate_stonecutting`)
  }

  // Move the remaining Create Deco metal decorative recipes onto their
  // matching plate tags. Coin recipes and other dedicated processing remain.
  const decoPlateStonecutting = [
    ['brass', [
      ['brass_bars', 16], ['brass_bars_overlay', 16],
      ['brass_catwalk', 4], ['brass_catwalk_railing', 8],
      ['brass_catwalk_stairs', 2], ['brass_door', 3],
      ['brass_hull', 2], ['brass_mesh_fence', 16],
      ['brass_sheet_metal', 4], ['brass_support', 4],
      ['brass_support_wedge', 3], ['brass_trapdoor', 1],
      ['brass_window', 2], ['brass_window_pane', 16],
      ['locked_brass_door', 1], ['blue_brass_lamp', 1],
      ['green_brass_lamp', 1], ['red_brass_lamp', 1],
      ['yellow_brass_lamp', 1]
    ]],
    ['iron', [
      ['iron_bars_overlay', 16],
      ['iron_catwalk', 4], ['iron_catwalk_railing', 8],
      ['iron_catwalk_stairs', 2], ['iron_hull', 2],
      ['iron_ladder', 2], ['iron_mesh_fence', 16],
      ['iron_sheet_metal', 4], ['iron_support', 4],
      ['iron_support_wedge', 3], ['iron_window', 2],
      ['iron_window_pane', 16], ['blue_iron_lamp', 1],
      ['green_iron_lamp', 1], ['red_iron_lamp', 1],
      ['yellow_iron_lamp', 1]
    ]],
    ['copper', [
      ['copper_bars', 16], ['copper_bars_overlay', 16],
      ['copper_catwalk', 4], ['copper_catwalk_railing', 8],
      ['copper_catwalk_stairs', 2], ['copper_hull', 2],
      ['copper_mesh_fence', 16], ['copper_sheet_metal', 4],
      ['copper_support', 4], ['copper_support_wedge', 3],
      ['copper_window', 2], ['copper_window_pane', 16],
      ['blue_copper_lamp', 1], ['green_copper_lamp', 1],
      ['red_copper_lamp', 1], ['yellow_copper_lamp', 1]
    ]]
  ]
  for (const [metal, entries] of decoPlateStonecutting) {
    for (const [name, count] of entries) {
      event.remove({ output: `createdeco:${name}` })
      event.stonecutting(`${count}x createdeco:${name}`, `#c:plates/${metal}`)
        .id(`case:${name}_from_${metal}_plate_stonecutting`)
    }
  }

  // These Bits n Bobs gratings also used the retired Industrial Iron plate
  // path. Preserve their original 4-item crafting yield via stonecutting.
  for (const name of ['industrial_grating', 'industrial_grating_panel']) {
    event.remove({ output: `bits_n_bobs:${name}` })
    event.stonecutting(`4x bits_n_bobs:${name}`, '#c:plates/cast_iron')
      .id(`case:${name}_from_cast_iron_plate_stonecutting`)
  }

  // Create's Weathered Iron block had a two-block stonecutting yield; retain
  // that yield while changing the material input to Cast Iron Plates.
  event.remove({ id: 'create:weathered_iron_block_from_ingots_iron_stonecutting' })
  event.stonecutting('2x create:weathered_iron_block', '#c:plates/cast_iron')
    .id('case:weathered_iron_block_from_cast_iron_plate_stonecutting')

  // Copycats is stonecutting-only in CASE. Remove every non-stonecutting
  // crafting recipe from the mod. The former crafting-only outputs receive
  // Zinc Ingot stonecutting replacements below.
  const copycatsCraftingRecipes = [
    'copycat_block_from_slabs', 'copycat_box', 'copycat_catwalk',
    'copycat_cogwheel', 'copycat_flat_pane_from_conversion',
    'copycat_fluid_pipe', 'copycat_folding_door_from_conversion',
    'copycat_half_layer_from_conversion', 'copycat_iron_door',
    'copycat_large_cogwheel', 'copycat_layer_from_half_layers',
    'copycat_pane_from_conversion', 'copycat_panel_from_conversion',
    'copycat_panel_from_half_panels', 'copycat_slab_from_beams',
    'copycat_slab_from_panels', 'copycat_slab_from_steps',
    'copycat_slice_from_conversion', 'copycat_sliding_door_from_conversion',
    'copycat_slope_from_conversion', 'copycat_stacked_half_layer_from_conversion',
    'copycat_stairs_from_conversion', 'copycat_step_from_conversion',
    'copycat_trapdoor_from_conversion', 'copycat_vertical_half_layer_from_conversion',
    'copycat_vertical_slice_from_conversion', 'copycat_vertical_slope_from_conversion',
    'copycat_vertical_stairs_from_conversion', 'copycat_vertical_step_from_conversion'
  ]
  for (const name of copycatsCraftingRecipes) {
    event.remove({ id: `copycats:crafting/${name}` })
  }

  // Bits n Bobs keeps its Industrial Iron kinetic variants, but accepts the
  // canonical Cast Iron material forms instead of Deco's retired forms.
  event.replaceInput({ mod: 'bits_n_bobs' }, '#c:ingots/industrial_iron', '#c:ingots/cast_iron')
  event.replaceInput({ mod: 'bits_n_bobs' }, '#c:plates/industrial_iron', '#c:plates/cast_iron')
  event.replaceInput({ mod: 'bits_n_bobs' }, 'create:industrial_iron_block', '#c:storage_blocks/cast_iron')

  event.recipes.create.milling(
    [CreateItem.of('minecraft:quartz', 0.10)],
    Ingredient.of('minecraft:diorite')
  ).id('case:nether_quartz_from_milling_diorite')

  // Replace the vanilla Andesite Millstone recipe so Andesite first becomes
  // CASE Crushed Andesite, then the crushed material becomes Andesite Dust.
  event.remove({ id: 'create:milling/andesite' })
  event.recipes.create.milling(
    'case:andesite_dust',
    'case:crushed_andesite'
  ).id('case:andesite_dust_from_crushed_andesite')

  event.recipes.create.crushing(
    'case:andesite_dust',
    'case:crushed_andesite'
  ).id('case:andesite_dust_from_crushing_crushed_andesite')

  event.remove({ id: 'create:milling/calcite' })
  event.remove({ id: 'create:crushing/calcite' })
  event.recipes.create.milling(
    [
      Item.of('minecraft:bone_meal', 2),
      CreateItem.of('minecraft:bone_meal', 0.50),
      CreateItem.of('createmetallurgy:graphite', 0.10)
    ],
    'minecraft:calcite'
  ).id('create:milling/calcite')

  event.recipes.create.crushing(
    [
      Item.of('minecraft:bone_meal', 2),
      CreateItem.of('minecraft:bone_meal', 0.50),
      CreateItem.of('createmetallurgy:graphite', 0.10)
    ],
    'minecraft:calcite'
  ).processingTime(250).id('create:crushing/calcite')

  event.recipes.create.milling(
    'createsifter:crushed_basalt',
    'minecraft:smooth_basalt'
  ).id('case:milling_crushed_basalt_from_smooth_basalt')

  event.recipes.create.crushing(
    'createsifter:crushed_basalt',
    'minecraft:smooth_basalt'
  ).processingTime(400).id('case:crushing_smooth_basalt')

  // Increase the output of the original building-material recipes while
  // retaining their original inputs and recipe layouts.
  event.remove({ id: 'supplementaries:daub' })
  event.shaped('16x supplementaries:daub', [
    'CS ',
    'SC ',
    '   '
  ], {
    C: 'minecraft:clay_ball',
    S: '#supplementaries:straw'
  }).id('supplementaries:daub')

  event.remove({ id: 'supplementaries:rope' })
  event.shaped('3x supplementaries:rope', [
    'S  ',
    'S  ',
    'S  '
  ], {
    S: '#supplementaries:straw'
  }).id('supplementaries:rope')

  event.remove({ id: 'tfmg:crafting/materials/flarestack' })
  event.shaped('tfmg:flarestack', [
    ' S ',
    'BPB',
    ' P '
  ], {
    S: 'minecraft:flint_and_steel',
    B: 'minecraft:iron_bars',
    P: 'tfmg:industrial_pipe'
  }).id('case:flarestack_from_cast_iron_pipes')

  event.remove({ id: 'tfmg:crafting/materials/metal_smokestack' })
  event.shaped('4x tfmg:metal_smokestack', [
    'BIB',
    'BIB',
    'BIB'
  ], {
    B: '#c:plates/cast_iron',
    I: 'tfmg:industrial_pipe'
  }).id('case:metal_smokestack_from_cast_iron_plates')

  event.shaped('4x tfmg:metal_smokestack', [
    'BIB',
    'BIB',
    'BIB'
  ], {
    B: 'tfmg:heavy_plate',
    I: 'tfmg:industrial_pipe'
  }).id('case:metal_smokestack_from_steel_plates')

  event.remove({ id: 'tfmg:item_application/heavy_machinery_casing' })
  event.recipes.create.sequenced_assembly(
    ['tfmg:heavy_machinery_casing'],
    'tfmg:steel_casing',
    [
      event.recipes.create.deploying(
        'tfmg:steel_casing',
        ['tfmg:steel_casing', 'tfmg:heavy_plate']
      )
    ]
  ).transitionalItem('tfmg:steel_casing').loops(6)
    .id('case:heavy_machinery_casing_from_six_steel_plates')

  event.remove({ id: 'quark:building/crafting/thatch' })
  event.shaped('16x quark:thatch', [
    'SK',
    'KS'
  ], {
    S: '#supplementaries:straw',
    K: 'minecraft:stick'
  }).id('quark:building/crafting/thatch')

  event.shaped('minecraft:saddle', [
    ' L ',
    'LIL',
    '   '
  ], {
    L: '#c:leather',
    I: '#c:ropes'
  }).id('case:saddle_from_leather_and_iron_bars')

  event.shapeless('minecraft:string', [
    '#supplementaries:straw'
  ]).id('case:string_from_supplementaries_straw')

  event.remove({ id: 'tfmg:mechanical_crafting/spark_plug' })
  event.shaped('2x tfmg:spark_plug', [
    'S',
    'M',
    'C'
  ], {
    S: '#c:nuggets/steel',
    M: 'createmetallurgy:refractory_mortar_ball',
    C: 'createaddition:copper_rod'
  }).id('case:spark_plug_from_steel_mortar_and_copper')

  event.shaped('4x tfmg:spark_plug', [
    'S',
    'M',
    'C'
  ], {
    S: 'tfmg:aluminum_nugget',
    M: 'createmetallurgy:refractory_mortar_ball',
    C: 'createaddition:copper_rod'
  }).id('case:spark_plug_from_aluminum_mortar_and_copper')

  event.shaped('2x case:engine_cylinder', [
    'S S',
    'SPS',
    ' S '
  ], {
    S: 'tfmg:heavy_plate',
    P: 'tfmg:spark_plug'
  }).id('case:engine_cylinder_from_steel_plates_and_spark_plug')

  event.shaped('4x case:engine_cylinder', [
    'S S',
    'SPS',
    ' S '
  ], {
    S: 'tfmg:aluminum_sheet',
    P: 'tfmg:spark_plug'
  }).id('case:engine_cylinder_from_aluminum_sheets_and_spark_plug')
})
