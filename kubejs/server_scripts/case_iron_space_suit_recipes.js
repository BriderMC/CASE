// CASE fabric-centered Iron Space Suit recipes.
ServerEvents.recipes(event => {
  event.remove({ id: 'northstar:crafting/iron_space_suit_helmet' })
  event.shaped('northstar:iron_space_suit_helmet', [
    'GGG',
    'GFG',
    'NNN'
  ], {
    G: 'minecraft:tinted_glass',
    F: 'northstar:durable_fabric',
    N: 'northstar:titanium_nugget'
  }).id('case:iron_space_suit_helmet_from_fabric_and_titanium')

  event.remove({ id: 'northstar:crafting/iron_space_suit_chestpiece' })
  event.shaped('northstar:iron_space_suit_chestpiece', [
    'FCF',
    'FFF',
    'FNF'
  ], {
    F: 'northstar:durable_fabric',
    C: 'create:copper_backtank',
    N: 'northstar:titanium_sheet'
  }).id('case:iron_space_suit_chestpiece_from_fabric_and_hardware')

  event.remove({ id: 'northstar:crafting/iron_space_suit_leggings' })
  event.shaped('northstar:iron_space_suit_leggings', [
    'FNF',
    'FFF',
    'FNF'
  ], {
    F: 'northstar:durable_fabric',
    N: 'northstar:titanium_nugget'
  }).id('case:iron_space_suit_leggings_from_fabric_and_titanium')

  event.remove({ id: 'northstar:crafting/iron_space_suit_boots' })
  event.shaped('northstar:iron_space_suit_boots', [
    'F F',
    'N N',
    'N N'
  ], {
    F: 'northstar:durable_fabric',
    N: 'northstar:titanium_nugget'
  }).id('case:iron_space_suit_boots_from_fabric_and_titanium')
})
