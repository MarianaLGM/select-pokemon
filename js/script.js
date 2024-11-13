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
    pokemonInfo.innerHTML = `
    <h3>Nombre: ${data.name}</h3>
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <h3>Tipo: ${data.types.name}</h3>
    <h3>Altura: ${data.height}</h3>
    <h3>Peso: ${data.weight}</h3>
    `;
    console.log("la altura es: " + data.height)
    })
  }
)

//nombre (name), imagen (sprites), tipo, altura (height) y peso (weight).

//"url": "https://pokeapi.co/api/v2/pokemon/1/sprites" (1,4,7)