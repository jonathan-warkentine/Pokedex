import { data } from "../config/data.js";

import { drawPokemonCard } from "./drawPokemonCard.js";
import { fetchPokemon } from "../pokemonApiFunctions/fetchPokemon.js";

import { capitalizeFirstLetter } from "./capitalizeFirstLetter.js";
import { addToRecentSearches } from "./addToRecentSearches.js";

export function populatePage() {
    for (let i = 0; i < data.currentDeck.length; i++) {
        fetchPokemon(data.currentDeck[i])
        .then(jsonData => {
            drawPokemonCard(jsonData);
        });
    };
    for (let i=0; i<data.pokemonSearches.length; i++){
        addToRecentSearches(capitalizeFirstLetter(data.pokemonSearches[i].charAt(0).toUpperCase() + data.pokemonSearches[i].slice(1)));
    }
    data.firstLoad = false;
}
