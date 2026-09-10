// Research-pack items
StartupEvents.registry('item', event => {
  event.create('case:andesite_dust')
    .displayName('Andesite Dust')
    .texture('case:item/andesite_dust')

  event.create('case:andesite_alloy_dust')
    .displayName('Andesite Alloy Dust')
    .texture('case:item/andesite_dust')
    .color(0, 0x9ca39d)

  event.create('case:prepared_planks')
    .displayName('Prepared Planks')
    .texture('tfmg:block/hardened_planks')
    .color(0, 0x85827d)

  event.create('case:engine_cylinder')
    .displayName('Engine Cylinder')
    .texture('tfmg:item/engine_cylinder')

  event.create('case:aluminum_rod')
    .displayName('Aluminum Rod')
    .texture('case:item/aluminum_rod')

  event.create('case:basic_mechanism')
    .displayName('Basic Mechanism')
    .texture('northstar:item/hardened_precision_mechanism')
    .color(0, 0xc8a66a)

  event.create('case:advanced_circuit_board')
    .displayName('Advanced Circuit Board')
    .texture('case:item/advanced_circuit_board')

  event.create('case:crushed_andesite')
    .displayName('Crushed Andesite')
    .texture('case:item/crushed_andesite')

  event.create('case:research_primitive')
    .displayName('Primitive Research Pack')
    .texture('case:item/research_primitive')
    .tooltip('Used to advance primitive automation research.')

  event.create('case:research_basic_automation')
    .displayName('Basic Automation Research Pack')
    .texture('case:item/research_basic_automation')
    .tooltip('Used to advance basic automation research.')

  event.create('case:research_basic_metallurgy')
    .displayName('Basic Metallurgy Research Pack')
    .texture('case:item/research_basic_metallurgy')
    .tooltip('Used to advance basic metallurgy research.')

  event.create('case:unfinished_research_basic_metallurgy')
    .displayName('Unfinished Basic Metallurgy Research Pack')
    .texture('case:item/research_unfinished')
    .tooltip('Must be processed in a Research Lab before it can be used.')

  event.create('case:research_basic_logistics')
    .displayName('Basic Logistics Research Pack')
    .texture('case:item/research_basic_logistics')
    .tooltip('Used to advance basic logistics research.')

  event.create('case:unfinished_research_basic_logistics')
    .displayName('Unfinished Basic Logistics Research Pack')
    .texture('case:item/research_unfinished')
    .tooltip('Must be processed in a Research Lab before it can be used.')

  event.create('case:research_basic_space')
    .displayName('Basic Space Research Pack')
    .texture('case:item/research_basic_space')
    .tooltip('Used to advance basic space research.')

  event.create('case:unfinished_research_basic_space')
    .displayName('Unfinished Basic Space Research Pack')
    .texture('case:item/research_unfinished')
    .tooltip('Must be processed in a Research Lab before it can be used.')

  event.create('case:research_basic_chemical')
    .displayName('Basic Chemical Research Pack')
    .texture('case:item/research_basic_chemical')
    .tooltip('Used to advance basic chemical research.')

  event.create('case:unfinished_research_basic_chemical')
    .displayName('Unfinished Basic Chemical Research Pack')
    .texture('case:item/research_unfinished')
    .tooltip('Must be processed in a Research Lab before it can be used.')
})
