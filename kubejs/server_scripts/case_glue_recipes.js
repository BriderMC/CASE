// CASE glue recipes
ServerEvents.recipes(event => {
  // Solidified Resin + iron components creates Create Super Glue.
  event.shapeless('create:super_glue', [
    'createpropulsion:pine_resin',
    '#c:plates/iron',
    '#c:nuggets/iron'
  ]).id('case:super_glue_from_resin')

  event.shapeless('createpropulsion:auto_glue', [
    'simulated:honey_glue',
    'create:electron_tube'
  ]).id('case:auto_glue_from_honey_glue')

  // A Create Spout applies liquid resin to an iron plate to make Honey Glue.
  event.recipes.create.filling(
    'simulated:honey_glue',
    [Ingredient.of('#c:plates/iron'), Fluid.of('rubberworks:resin', 500)]
  ).id('case:honey_glue_from_resin')

  // A Create Diesel Generators Basin Lid dries liquid resin into Solidified Resin.
  event.custom({
    type: 'createdieselgenerators:basin_fermenting',
    ingredients: [
      { type: 'fluid_stack', fluid: 'rubberworks:resin', amount: 500 }
    ],
    processing_time: 200,
    results: [
      { id: 'createpropulsion:pine_resin' }
    ]
  }).id('case:pine_resin_from_resin_basin')
})
