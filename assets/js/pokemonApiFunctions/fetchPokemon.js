import { saveLocally } from "./saveLocally.js";
import { writePokemon } from "./writePokemon.js";

export async function fetchPokemon(search) {
    search = search.toLowerCase();
    // widget1.play();
    return fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(response => response.json() )
    .then(data => {
        console.log(data);
        writePokemon(data);
        saveLocally(data.name);
    })
    .catch( function(error){
        alert(`Pokémon not found :(" \n ${error}`);
    });
};
