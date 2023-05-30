import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter.js";
import { data } from "../config/data.js";

export async function bulkFetchPokemon(url = "https://pokeapi.co/api/v2/pokemon/") { 
    fetch(url)
    .then(response => response.json())
    .then(jsonData => {
        for (let i=0; i<jsonData.results.length; i++) {
            if ( !jsonData.results[i].name.includes("-") ) {
                data.pokemonList.push(capitalizeFirstLetter(jsonData.results[i].name))
            }
        };

        if (jsonData.next) {
            bulkFetchPokemon(jsonData.next, data.pokemonList);
        } else {
            localStorage.setItem("pokemonList", JSON.stringify(data.pokemonList));
        }
    })
    .catch( function(error){
        alert(error);
    });

    return data.pokemonList;
}
