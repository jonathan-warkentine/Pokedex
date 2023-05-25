import { data } from "../config/data.js";

import { saveLocally } from "../utils/saveLocally.js";
import { drawPokemonCard } from "./drawPokemonCard.js";

export async function fetchPokemon(search) {
    search = search.toLowerCase();
    // widget1.play();
    return fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(response => response.json() )
    .catch( function(error){
        alert(`Pokémon not found :(" \n ${error}`);
    });
};
