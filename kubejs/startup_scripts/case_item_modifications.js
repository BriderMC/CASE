// CASE item balance changes that must be applied during item registration.

ItemEvents.modification(event => {
  event.modify('create_aeronautics_toolgun:magnetic_gun', item => {
    item.setUnbreakable()
  })

  event.modify('create:sand_paper', item => {
    item.setMaxDamage(72)
  })

  event.modify('createaddition:diamond_grit_sandpaper', item => {
    item.setUnbreakable()
  })

  event.modify('createsifter:string_mesh', item => {
    item.maxDamage = 32
  })

  event.modify('createsifter:andesite_mesh', item => {
    item.maxDamage = 64
  })
})
