/*<option value="bulbasaur">Bulbasaur</option>
        <option value="charmander">Charmander</option>
        <option value="squirtle">Squirtle</option>
        select id="pokemon-select">
        id="get-pokemon">*/

const pokemonSelection= document.getElementById ("pokemon-select");
const pokemonButton= document.getElementById ("get-pokemon");

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
        const pokemonData= (data)
    console.log (data.name)
    })
  }
)

//nombre (name), imagen (sprites), tipo, altura (height) y peso (weight).

//"url": "https://pokeapi.co/api/v2/pokemon/1/sprites" (1,4,7)