// Create Metallurgy-compatible molten fluids for materials that are supplied by
// other mods in CASE. These are deliberately CASE fluids rather than aliases of
// another mod's molten fluid, so the material boundaries remain explicit.
StartupEvents.registry('fluid', event => {
  event.create('case:molten_andesite', 'thick')
    .displayName('Molten Andesite')
    .tint(0x777570)

  event.create('case:molten_andesite_alloy', 'thick')
    .displayName('Molten Andesite Alloy')
    .tint(0xa6aaa4)

  event.create('case:molten_platinum', 'thick')
    .displayName('Molten Platinum')
    .tint(0x9ad9d5)

  event.create('case:molten_titanium', 'thick')
    .displayName('Molten Titanium')
    .tint(0xffb9c9d6)

  event.create('case:sodium_aluminate', 'thick')
    .displayName('Sodium Aluminate')
    .tint(0x8a8a40)

  event.create('case:hydrochloric_acid', 'thick')
    .displayName('Hydrochloric Acid')
    .tint(0xd9e6c4)

})
