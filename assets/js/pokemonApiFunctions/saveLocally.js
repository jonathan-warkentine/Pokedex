export function saveLocally (pokeName, pokemonSearches) {
    if (pokemonSearches.indexOf(pokeName) === -1 && !firstLoad) { //check for existing pokemon in list to prevent duping, then adding the pokemon to the recent searches
    pokemonSearches.push(pokeName)
    localStorage.setItem("pokemonSearches", JSON.stringify(pokemonSearches));
    addToList(capitalizeFirstLetter(pokeName.charAt(0).toUpperCase() + pokeName.slice(1)));
    };
    if (currentDeck.indexOf(pokeName) === -1 && !firstLoad) { //check for existing pokemon in list to prevent duping, then adding pokemon to the current deck
        currentDeck.push(pokeName)
        localStorage.setItem("currentDeck", JSON.stringify(currentDeck));
    };
};
