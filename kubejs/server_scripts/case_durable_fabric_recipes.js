// CASE reinforced Durable Fabric recipe.
ServerEvents.recipes(event => {
  const wool = Ingredient.of('#minecraft:wool')
  const string = 'minecraft:string'
  const rubber = 'rubberworks:rubber_sheet'
  const incomplete = 'northstar:durable_fabric'

  event.remove({ id: 'northstar:crafting/durable_fabric' })
  event.recipes.create.sequenced_assembly(
    ['northstar:durable_fabric'],
    wool,
    [
      event.recipes.create.deploying(incomplete, [incomplete, string]),
      event.recipes.create.deploying(incomplete, [incomplete, rubber]),
      event.recipes.create.deploying(incomplete, [incomplete, string]),
      event.recipes.create.deploying(incomplete, [incomplete, wool]),
      event.recipes.create.deploying(incomplete, [incomplete, string]),
      event.recipes.create.deploying(incomplete, [incomplete, rubber]),
      event.recipes.create.deploying(incomplete, [incomplete, string]),
      event.recipes.create.deploying(incomplete, [incomplete, wool])
    ]
  ).transitionalItem(incomplete).loops(1).id('case:durable_fabric_from_wool_string_and_rubber')
})
