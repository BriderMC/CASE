// CASE space suits are environmental equipment, not combat armor.

const $ItemAttributeModifierEvent = Java.loadClass('net.neoforged.neoforge.event.ItemAttributeModifierEvent')

NativeEvents.onEvent($ItemAttributeModifierEvent, event => {
  const id = event.itemStack.item.id
  const spaceSuitPieces = [
    'northstar:iron_space_suit_helmet',
    'northstar:iron_space_suit_chestpiece',
    'northstar:iron_space_suit_leggings',
    'northstar:iron_space_suit_boots'
  ]

  if (spaceSuitPieces.includes(id)) {
    event.clearModifiers()
  }
})
