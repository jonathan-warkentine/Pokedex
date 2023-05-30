import { bulkFetchPokemon } from "../pokemonApiFunctions/bulkFetchPokemon.js";

import { data } from "../config/data.js";

export async function populatePokemonList() {
    if (!data.pokemonList.length) {
        bulkFetchPokemon();
    };
}
