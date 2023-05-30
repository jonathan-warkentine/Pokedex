import { drawAndSavePokemon } from "../utils/drawAndSavePokemon.js";
import { fetchPokemon } from "../pokemonApiFunctions/fetchPokemon.js";
// import { soundcloudWidget } from "../soundcloud/soundcloudWidget.js";

export function initializeSubmitSearchEventListener() {
    $( "#form" ).on("submit", function(event){ 
        event.preventDefault();
        drawAndSavePokemon(fetchPokemon(document.querySelector("#searchBar").value));
    });
}