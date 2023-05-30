import { data } from "../config/data.js";
import { fetchPokemon } from "../pokemonApiFunctions/fetchPokemon.js";
import { drawAndSavePokemon } from "../utils/drawAndSavePokemon.js";

/* JQuery Autcomplete Feature */
export function initializeSearchbarAutocomplete() {
    $( "#searchBar" ).autocomplete({
        source: data.pokemonList,
        select: function(event, ui) {
            drawAndSavePokemon(fetchPokemon(ui.item.label));
        } 
    });
}
