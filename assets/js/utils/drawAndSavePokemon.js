import { drawPokemonCard } from "./drawPokemonCard.js";
import { saveLocally } from "./saveLocally.js";

export async function drawAndSavePokemon(pokemonDataPromise) {
    const pokemonData = await pokemonDataPromise;
    drawPokemonCard(pokemonData);
    saveLocally(pokemonData.name);
}