/*<option value="bulbasaur">Bulbasaur</option>
        <option value="charmander">Charmander</option>
        <option value="squirtle">Squirtle</option>
        select id="pokemon-select">
        id="get-pokemon">*/

const pokemonSelection= document.getElementById ("pokemon-select");
const pokemonButton= document.getElementById ("get-pokemon");
const pokemonInfo = document.getElementById("info-pokemon");

pokemonButton.addEventListener ("click", ()=>{
  //console.log(pokemonSelection.value)

    const pokemonNombre=pokemonSelection.value;
    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonNombre}`) 
    .then ((response)=>{
        if(!response.ok){
            throw new Error ("No se puede cargar info")
        }
        return response.json ()
    })
    .then ((data) =>{

      let tipo = ""
      data.types.forEach(element => {
      const tipoName = element.type.name
      tipo += tipoName + ", "
      console.log(tipoName)

    });
    
    pokemonInfo.innerHTML = `
    <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}" id="pokemon">
    <h3>-Nombre: ${data.name}</h3>
    <h3>-Tipo: ${tipo}</h3>
    <h3>-Altura: ${data.height}</h3>
    <h3>-Peso: ${data.weight}</h3>
    `;
    
    })
  }
)

//nombre (name), imagen (sprites), tipo, altura (height) y peso (weight).

//"url": "https://pokeapi.co/api/v2/pokemon/1/sprites" (1,4,7)