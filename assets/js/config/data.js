export const data = {
    pokemonSearches: JSON.parse(localStorage.getItem("pokemonSearches")) || [],
    currentDeck: JSON.parse(localStorage.getItem("currentDeck")) || [],
    pokemonList: JSON.parse(localStorage.getItem("pokemonList")) || []
}
