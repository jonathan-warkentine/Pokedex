import { data } from "../config/data.js";

import { fetchPokemon } from "../pokemonApiFunctions/fetchPokemon.js";
import { drawAndSavePokemon } from "./drawAndSavePokemon.js";

// writes given pokemon to recent search list
export function addToRecentSearches(pokeName){ 
    var listEl= $("<li>"+pokeName+"</li>");
    $(listEl).attr("class","list-group-item");
    $(listEl).text(pokeName);
    $("#search-list").append(listEl);
    listEl.click(function(event){
        drawAndSavePokemon(fetchPokemon(event.target.innerText));
    })
};
