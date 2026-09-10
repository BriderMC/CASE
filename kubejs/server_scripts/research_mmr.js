// Modular Machinery Reborn research labs.
// The front-facing ports are real MMR hatches/buses, not decorative blocks.

MMREvents.machines(event => {
  event.create('case:basic_research_lab')
    .name('Basic Research Lab')
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          ['III', 'III', 'III'],
          ['GmG', 'oCi', 'GPG'],
          [' G ', 'GGG', ' G ']
        ])
        .keys({
          I: ['create:industrial_iron_block'],
          G: ['minecraft:glass'],
          C: ['modular_machinery_reborn:casing_plain'],
          i: ['modular_machinery_reborn:inputbus_tiny'],
          o: ['modular_machinery_reborn:outputbus_tiny'],
          P: ['modular_machinery_reborn:energyinputhatch_tiny']
        })
    )

  event.create('case:advanced_research_lab')
    .name('Advanced Research Lab')
    .structure(
      MMRStructureBuilder.create()
        .pattern([
          ['TTT', 'TTT', 'TTT'],
          ['GmG', 'oCi', 'GPG'],
          [' G ', 'GGG', ' G ']
        ])
        .keys({
          T: ['northstar:titanium_block'],
          G: ['mekanism:structural_glass'],
          C: ['modular_machinery_reborn:casing_plain'],
          i: ['modular_machinery_reborn:inputbus_tiny'],
          o: ['modular_machinery_reborn:outputbus_tiny'],
          P: ['modular_machinery_reborn:energyinputhatch_tiny']
        })
    )
})

ServerEvents.recipes(event => {
  const processingTime = 1200 // 60 seconds
  const energyPerTick = 20 // MMR energy requirements are per tick: 24,000 FE per cycle
  const packs = [
    ['automation', 'case:research_primitive', 'case:research_basic_automation'],
    ['metallurgy', 'case:unfinished_research_basic_metallurgy', 'case:research_basic_metallurgy'],
    ['logistics', 'case:unfinished_research_basic_logistics', 'case:research_basic_logistics'],
    ['space', 'case:unfinished_research_basic_space', 'case:research_basic_space'],
    ['chemical', 'case:unfinished_research_basic_chemical', 'case:research_basic_chemical']
  ]

  for (const [name, input, output] of packs) {
    for (const machine of ['case:basic_research_lab', 'case:advanced_research_lab']) {
      event.recipes.modular_machinery_reborn.machine_recipe(machine, processingTime)
        .requireItem(input, 10, 25)
        .produceItem(output, 160, 25)
        .requireEnergy(energyPerTick, 10, 70)
        .id(`case:${name}_${machine.split(':')[1]}`)
    }
  }
})
