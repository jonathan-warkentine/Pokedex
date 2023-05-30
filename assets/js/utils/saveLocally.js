import { data } from "../config/data.js";
import { addToRecentSearches } from "../utils/addToRecentSearches.js";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter.js";

export function saveLocally(pokeName) {
    // check for existing pokemon in deck to prevent duping, then adding the pokemon to the recent searches
    // Add new pokemon to recent searches list
    data.pokemonSearches.push(pokeName);
    localStorage.setItem("pokemonSearches", JSON.stringify(data.pokemonSearches));
    addToRecentSearches(capitalizeFirstLetter(pokeName));

    // Add new pokemon to our deck
    data.currentDeck.push(pokeName)
    localStorage.setItem("currentDeck", JSON.stringify(data.currentDeck));
};
