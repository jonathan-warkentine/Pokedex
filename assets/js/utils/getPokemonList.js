export async function getPokemonList() {
    let pokemonList = JSON.parse(localStorage.getItem("pokemonList"));

    if (!pokemonList) {
        pokemonList = fetchAllPokemon();
    };

    return pokemonList;
}
