export function populatePage (){ //
    for (let i = 0; i < currentDeck.length; i++) {
        fetchPokemon(currentDeck[i]);
    };
    for (let i=0; i<pokemonSearches.length; i++){
        addToList(capitalizeFirstLetter(pokemonSearches[i].charAt(0).toUpperCase() + pokemonSearches[i].slice(1)));
    }
};
