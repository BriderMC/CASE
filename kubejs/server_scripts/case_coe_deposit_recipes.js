// CASE COE deposit outputs.
// Each deposit intentionally returns only its primary resource. The original
// COE Deposits secondary by-products are removed by recreating these recipes.
ServerEvents.recipes(event => {
  // COE Deposits ships these built-in veins as finite. Re-register the same
  // vein data with finite: never so every CASE-managed COE deposit is infinite.
  const veins = [
    ['coedeposits:ancient_debris_vein', 'Ancient Debris', 'minecraft:netherite_scrap', 0.5, 5.0, 1762100202, 16, 480],
    ['coedeposits:coal_vein', 'Coal', 'minecraft:coal', 5.0, 50.0, 1762100001, 8, 256],
    ['coedeposits:copper_vein', 'Copper', 'minecraft:raw_copper', 4.0, 40.0, 1762100003, 8, 256],
    ['coedeposits:diamond_vein', 'Diamond', 'minecraft:diamond', 1.0, 5.0, 1762100009, 8, 256],
    ['coedeposits:emerald_vein', 'Emerald', 'minecraft:emerald', 1.0, 8.0, 1762100008, 8, 256],
    ['coedeposits:glowstone_vein', 'Glowstone', 'minecraft:glowstone_dust', 2.0, 20.0, 1762100011, 8, 256],
    ['coedeposits:gold_vein', 'Gold', 'minecraft:raw_gold', 1.0, 15.0, 1762100007, 8, 256],
    ['coedeposits:iron_vein', 'Iron', 'minecraft:raw_iron', 2.0, 25.0, 1762100002, 8, 256],
    ['coedeposits:lapis_vein', 'Lapis', 'minecraft:lapis_lazuli', 1.0, 10.0, 1762100006, 8, 256],
    ['coedeposits:nether_gold_vein', 'Nether Gold', 'minecraft:raw_gold', 1.5, 18.0, 1762100201, 10, 320],
    ['coedeposits:nether_quartz_vein', 'Nether Quartz', 'minecraft:quartz', 2.0, 25.0, 1762100200, 8, 256],
    ['coedeposits:quartz_vein', 'Quartz', 'minecraft:quartz', 3.0, 30.0, 1762100010, 8, 256],
    ['coedeposits:redstone_vein', 'Redstone', 'minecraft:redstone', 5.0, 30.0, 1762100005, 8, 256],
    ['coedeposits:water_vein', 'Water', 'minecraft:water_bucket', 2.0, 25.0, 1834970228, 8, 256],
    ['coedeposits:zinc_vein', 'Zinc', 'create:raw_zinc', 2.0, 20.0, 1762100004, 8, 256]
  ]

  veins.forEach(([id, name, icon, min, max, salt, separation, spacing]) => {
    event.remove({ id: id })
    event.custom({
      type: 'createoreexcavation:vein',
      name: JSON.stringify({ text: name }),
      priority: 0,
      finite: 'never',
      amountMultiplierMin: min,
      amountMultiplierMax: max,
      placement: { salt: salt, separation: separation, spacing: spacing },
      icon: { count: 1, id: icon }
    }).id(id)
  })

  const deposits = [
    ['coedeposits:ancient_debris_drilling', 'coedeposits:ancient_debris_vein', 'minecraft:netherite_scrap', 1024, 600],
    ['coedeposits:coal_drilling', 'coedeposits:coal_vein', 'minecraft:coal', 256, 60],
    ['coedeposits:copper_drilling', 'coedeposits:copper_vein', 'minecraft:raw_copper', 256, 80],
    ['coedeposits:diamond_drilling', 'coedeposits:diamond_vein', 'minecraft:diamond', 256, 200],
    ['coedeposits:emerald_drilling', 'coedeposits:emerald_vein', 'minecraft:emerald', 256, 150],
    ['coedeposits:glowstone_drilling', 'coedeposits:glowstone_vein', 'minecraft:glowstone_dust', 256, 90],
    ['coedeposits:gold_drilling', 'coedeposits:gold_vein', 'minecraft:raw_gold', 256, 120],
    ['coedeposits:iron_drilling', 'coedeposits:iron_vein', 'minecraft:raw_iron', 256, 100],
    ['coedeposits:lapis_drilling', 'coedeposits:lapis_vein', 'minecraft:lapis_lazuli', 256, 100],
    ['coedeposits:nether_gold_drilling', 'coedeposits:nether_gold_vein', 'minecraft:raw_gold', 384, 140],
    ['coedeposits:nether_quartz_drilling', 'coedeposits:nether_quartz_vein', 'minecraft:quartz', 256, 80],
    ['coedeposits:quartz_drilling', 'coedeposits:quartz_vein', 'minecraft:quartz', 256, 100],
    ['coedeposits:redstone_drilling', 'coedeposits:redstone_vein', 'minecraft:redstone', 256, 80],
    ['coedeposits:zinc_drilling', 'coedeposits:zinc_vein', 'create:raw_zinc', 256, 100]
  ]

  deposits.forEach(([id, veinId, output, stress, ticks]) => {
    event.remove({ id: id })
    event.custom({
      type: 'createoreexcavation:drilling',
      drill: { tag: 'createoreexcavation:drills' },
      output: [{ id: output }],
      priority: 0,
      stress: stress,
      ticks: ticks,
      veinId: veinId
    }).id(id)
  })

  // Create Excavation Ore Compat's adopted platinum deposit.
  event.remove({ id: 'createexcavationorecompat:drilling/platinum' })
  event.custom({
    'neoforge:conditions': [{ type: 'neoforge:mod_loaded', modid: 'createpropulsion' }],
    type: 'createoreexcavation:drilling',
    drill: { tag: 'createoreexcavation:drills' },
    output: [{ id: 'createpropulsion:raw_platinum' }],
    priority: 0,
    stress: 768,
    ticks: 1200,
    veinId: 'createexcavationorecompat:ore_vein_type/platinum'
  }).id('createexcavationorecompat:drilling/platinum')
})
