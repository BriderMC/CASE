// CASE Mechanical Extruder recipes
ServerEvents.recipes(event => {
  function addCatalystStoneRecipe(name, blockId) {
    const block = blockId || `minecraft:${name}`
    event.remove({ id: `create_mechanical_extruder:extruding/${name}` })

    event.custom({
      type: 'create_mechanical_extruder:extruding',
      blockIngredients: {
        first: {},
        second: {}
      },
      catalyst: {
        blocks: block
      },
      result: {
        id: block
      }
    }).id(`create_mechanical_extruder:extruding/${name}`)
  }

  addCatalystStoneRecipe('andesite')
  addCatalystStoneRecipe('granite')
  addCatalystStoneRecipe('diorite')
  addCatalystStoneRecipe('deepslate')
  addCatalystStoneRecipe('limestone', 'create:limestone')

  event.remove({ id: 'create_mechanical_extruder:extruding/cobblestone' })
  event.custom({
    type: 'create_mechanical_extruder:extruding',
    blockIngredients: {
      first: {},
      second: {}
    },
    catalyst: {
      blocks: 'minecraft:stone'
    },
    result: {
      id: 'minecraft:cobblestone'
    }
  }).id('create_mechanical_extruder:extruding/cobblestone')

  addCatalystStoneRecipe('dirt')
  addCatalystStoneRecipe('clay')
  addCatalystStoneRecipe('calcite')
  addCatalystStoneRecipe('tuff')
  addCatalystStoneRecipe('asurine', 'create:asurine')
  addCatalystStoneRecipe('crimsite', 'create:crimsite')
  addCatalystStoneRecipe('veridium', 'create:veridium')
  addCatalystStoneRecipe('scoria', 'create:scoria')
  addCatalystStoneRecipe('basalt')
  addCatalystStoneRecipe('blackstone')
  addCatalystStoneRecipe('ochrum', 'create:ochrum')
})
