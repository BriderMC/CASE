// Create Metallurgy integration for the three non-Create materials explicitly
// selected for CASE: platinum, titanium, and cast iron.
//
// Canonical item providers:
//   platinum  -> Oritech ingot/nugget; Create Propulsion plate
//   titanium  -> Northstar ingot/nugget/plate
// Cast iron intentionally remains on TFMG's native recipe path.

ServerEvents.recipes(event => {
  const melting = (id, tag, fluid, amount, time, extra = false) => {
    const results = [{ amount: amount, id: fluid }]
    if (extra) results.push({ amount: 45, id: 'createmetallurgy:molten_slag' })

    event.custom({
      type: 'createmetallurgy:melting',
      heat_requirement: 'heated',
      ingredients: [{ tag: tag }],
      processing_time: time,
      results: results
    }).id(id)
  }

  const bulkMelting = (id, tag, fluid) => {
    event.custom({
      type: 'createmetallurgy:bulk_melting',
      ingredients: [{ tag: tag }],
      minHeatRequirement: 7,
      processing_time: 224,
      results: [{ amount: 810, id: fluid }]
    }).id(id)
  }

  const tableCasting = (id, fluid, item, amount = 90, time = 60) => {
    event.custom({
      type: 'createmetallurgy:casting_in_table',
      ingredients: [
        { type: 'neoforge:single', amount: amount, fluid: fluid },
        { item: 'createmetallurgy:graphite_ingot_mold' }
      ],
      processing_time: time,
      result: { item: { count: 1, id: item } }
    }).id(id)
  }

  const basinCasting = (id, fluid, item) => {
    event.custom({
      type: 'createmetallurgy:casting_in_basin',
      ingredients: [{ type: 'neoforge:single', amount: 810, fluid: fluid }],
      processing_time: 480,
      result: { item: { count: 1, id: item } }
    }).id(id)
  }

  const addMaterial = (name, fluid, outputs, hasRaw = true, hasDust = true) => {
    const prefix = `case:metallurgy/${name}`

    if (hasDust) melting(`${prefix}_dust`, `c:dusts/${name}`, fluid, 90, 20)
    melting(`${prefix}_ingot`, `c:ingots/${name}`, fluid, 90, 40)
    melting(`${prefix}_nugget`, `c:nuggets/${name}`, fluid, 10, 4)
    melting(`${prefix}_plate`, `c:plates/${name}`, fluid, 90, 40)
    if (hasRaw) melting(`${prefix}_raw`, `c:raw_materials/${name}`, fluid, 90, 40, true)
    bulkMelting(`${prefix}_block`, `c:storage_blocks/${name}`, fluid)

    for (const output of outputs.table) {
      tableCasting(`${prefix}_cast_${output.id.replace(':', '_')}`, fluid, output.id, output.amount || 90, output.time || 60)
    }
    basinCasting(`${prefix}_cast_block`, fluid, outputs.block)
  }

  addMaterial('platinum', 'case:molten_platinum', {
    table: [
      { id: 'oritech:platinum_ingot' },
      { id: 'oritech:platinum_nugget', amount: 10, time: 20 },
      { id: 'createpropulsion:platinum_sheet' }
    ],
    block: 'oritech:platinum_block'
  })

  addMaterial('titanium', 'case:molten_titanium', {
    table: [
      { id: 'northstar:titanium_ingot' },
      { id: 'northstar:titanium_nugget', amount: 10, time: 20 },
      { id: 'northstar:titanium_sheet' }
    ],
    block: 'northstar:titanium_block'
  })

})
