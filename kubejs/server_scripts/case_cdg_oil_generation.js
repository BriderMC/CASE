// CASE CDG oil distribution.
// High reserves are limited to deserts and deep oceans. Other ocean and
// desert-like biomes receive normal finite reserves; all other biomes are dry.

const CDG_NORMAL_OIL_CHANCE = 0.10
const CDG_HIGH_OIL_CHANCE = 0.20
// CDG's scanner recognizes Integer.MAX_VALUE as bottomless oil.
const CDG_INFINITE_OIL = 2147483647
const CDG_NORMAL_OIL_MIN = 500000
const CDG_NORMAL_OIL_MAX = 4000000
const CDG_HIGH_OIL_BIOMES = [
  'minecraft:desert',
  'terralith:desert_canyon',
  'terralith:desert_oasis',
  'terralith:desert_spires',
  'terralith:lush_desert'
]

function caseOilChunkRoll(x, z, seed) {
  let value = Math.imul(x, 374761393) ^ Math.imul(z, 668265263) ^ Number(seed)
  value = Math.imul(value ^ (value >>> 13), 1274126177)
  value ^= value >>> 16
  return (value >>> 0) / 0x100000000
}

function caseOilBiomeClass(biomes) {
  const ids = biomes.map(id => id.toLowerCase())
  const isDeepOcean = ids.some(id => id.endsWith(':deep_ocean') || (id.includes(':deep_') && id.includes('ocean')))
  const isOcean = ids.some(id => id.endsWith(':ocean') || id.includes('_ocean'))
  const isDesert = ids.some(id => CDG_HIGH_OIL_BIOMES.includes(id))
  const isDesertLike = ids.some(id =>
    id.includes('badlands') || id.includes('savanna') || id.includes('steppe') || id.includes('mesa') || id.endsWith(':plains')
  )

  if (isDeepOcean || isDesert) return 'high'
  if (isOcean || isDesertLike) return 'normal'
  return 'none'
}

CDGEvents.oilAmount(event => {
  const biomeClass = caseOilBiomeClass(event.biomes)
  const oilChance = biomeClass === 'high' ? CDG_HIGH_OIL_CHANCE : CDG_NORMAL_OIL_CHANCE

  if (biomeClass === 'none' || caseOilChunkRoll(event.chunkPos.x, event.chunkPos.z, event.seed) >= oilChance) {
    return event.success(0)
  }

  if (biomeClass === 'high') {
    return event.success(CDG_INFINITE_OIL)
  }

  const normalRange = CDG_NORMAL_OIL_MAX - CDG_NORMAL_OIL_MIN
  const amountRoll = caseOilChunkRoll(event.chunkPos.x + 734287, event.chunkPos.z - 192811, event.seed)
  return event.success(CDG_NORMAL_OIL_MIN + Math.floor(amountRoll * normalRange))
})
