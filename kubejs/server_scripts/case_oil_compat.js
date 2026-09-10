// CASE crude-oil compatibility.
// The common c:crude_oil and c:oil tags contain only the three crude-oil
// fluids used by the progression: Create Diesel Generators, TFMG, and Oritech.
// Plant oil, seed oil, and lubrication oil are intentionally excluded.

ServerEvents.recipes(event => {
  const tfmgDistillation = [
    {
      id: 'tfmg:distillation/crude_oil',
      amount: 340,
      results: [
        { amount: 120, id: 'tfmg:heavy_oil' },
        { amount: 60, id: 'createdieselgenerators:diesel' },
        { amount: 30, id: 'tfmg:kerosene' },
        { amount: 10, id: 'tfmg:naphtha' },
        { amount: 60, id: 'createdieselgenerators:gasoline' },
        { amount: 60, id: 'tfmg:lpg' }
      ]
    },
    {
      id: 'tfmg:distillation/crude_oil_light_distillation',
      amount: 200,
      results: [
        { amount: 150, id: 'tfmg:heavy_oil' },
        { amount: 45, id: 'createdieselgenerators:diesel' },
        { amount: 5, id: 'createdieselgenerators:gasoline' }
      ]
    },
    {
      id: 'tfmg:distillation/crude_oil_no_naphtha',
      amount: 330,
      results: [
        { amount: 120, id: 'tfmg:heavy_oil' },
        { amount: 60, id: 'createdieselgenerators:diesel' },
        { amount: 30, id: 'tfmg:kerosene' },
        { amount: 60, id: 'createdieselgenerators:gasoline' },
        { amount: 60, id: 'tfmg:lpg' }
      ]
    }
  ]

  tfmgDistillation.forEach(recipe => {
    event.remove({ id: recipe.id })
    event.custom({
      type: 'tfmg:distillation',
      ingredients: [{
        type: 'neoforge:tag',
        amount: recipe.amount,
        tag: 'c:crude_oil'
      }],
      results: recipe.results
    }).id(recipe.id)
  })
})
