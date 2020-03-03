const getPokemon = () => {

  promises = []

  for (let poke = 1; poke <= 150; poke ++) {
    //const url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
    promises.push(fetch(url).then( res => res.json()))
  }

  Promise.all(promises).then( res => {
    const pokemon = res.map( data => ({
      ['name']: data.name,
      ['id']: data.id,
      ['image']: data.sprites['front_default'],
      ['type']: data.types.map( (type) => type.type.name).join(', ')

    }))
    displayPokemon(pokemon)
  })
  
}

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  
}

getPokemon()