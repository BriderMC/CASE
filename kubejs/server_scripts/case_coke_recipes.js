// Use TFMG Coal Coke as the pack's canonical coke.
ServerEvents.recipes(event => {
  event.remove({ id: 'tfmg:crafting/materials/coke_oven' })
  event.shaped('9x tfmg:coke_oven', [
    'CCC',
    'C C',
    'CCC'
  ], {
    C: 'tfmg:cast_iron_block'
  }).id('case:coke_oven_from_cast_iron_blocks')

  event.remove({ id: 'tfmg:compacting/cast_iron' })
  event.recipes.create.compacting(
    'tfmg:cast_iron_ingot',
    ['minecraft:iron_ingot', Ingredient.of('#minecraft:coals')]
  ).heated().id('case:cast_iron_from_iron_and_coals')

  event.recipes.create.compacting(
    'tfmg:cast_iron_ingot',
    [Ingredient.of('#c:raw_materials/iron'), Ingredient.of('#minecraft:coals')]
  ).heated().id('case:cast_iron_from_raw_iron_and_coals')

  event.recipes.create.compacting(
    'tfmg:cast_iron_ingot',
    [Ingredient.of('#c:crushed_iron'), Ingredient.of('#minecraft:coals')]
  ).heated().id('case:cast_iron_from_crushed_iron_and_coals')

  event.recipes.create.compacting(
    'tfmg:cast_iron_ingot',
    [Ingredient.of('#c:dusts/iron'), Ingredient.of('#minecraft:coals')]
  ).heated().id('case:cast_iron_from_iron_dust_and_coals')

  event.remove({ id: 'createmetallurgy:smelting/coke_from_coal' })
  event.remove({ id: 'createmetallurgy:blasting/coke_from_coal' })
  event.remove({ id: 'createmetallurgy:crafting/materials/coke_block' })
  event.remove({ id: 'createmetallurgy:crafting/materials/coke_from_block' })

  event.blasting(
    'tfmg:coal_coke',
    'minecraft:coal'
  ).xp(0.5).id('case:tfmg_coal_coke_from_coal')
})

ServerEvents.tags('item', event => {
  event.add('minecraft:coals', 'tfmg:coal_coke')

  event.remove('c:coal_coke', 'createmetallurgy:coke')
  event.add('c:coal_coke', 'tfmg:coal_coke')

  event.remove('c:storage_blocks/coke_block', 'createmetallurgy:coke_block')
  event.add('c:storage_blocks/coal_coke', 'tfmg:coal_coke_block')
})

ServerEvents.tags('block', event => {
  event.remove('c:storage_blocks/coke_block', 'createmetallurgy:coke_block')
  event.add('c:storage_blocks/coal_coke', 'tfmg:coal_coke_block')
})
