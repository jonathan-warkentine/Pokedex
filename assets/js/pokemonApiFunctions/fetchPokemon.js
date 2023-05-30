// import { soundcloudWidget } from "../soundcloud/soundcloudWidget.js";

export async function fetchPokemon(search) {
    search = search.toLowerCase();
    // soundcloudWidget.play();
    return fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(response => response.json() )
    .catch( function(error){
        alert(`Pokémon not found :(" \n ${error}`);
    });
};
