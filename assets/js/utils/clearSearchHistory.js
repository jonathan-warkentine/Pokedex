//clear list resets the page
export function clearSearchHistory(event) {
    $("#search-list").empty();
    localStorage.removeItem("pokemonSearches");
    pokemonSearches = [];
}
