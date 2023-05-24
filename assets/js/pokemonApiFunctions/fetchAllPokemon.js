// Recursive API call that populates our list of Pokemon for use by our autocomplete JQuery widget
// returns a promise
export async function fetchAllPokemon(){ 
    return fetch("https://pokeapi.co/api/v2/pokemon/")
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        for (i=0; i<data.results.length; i++){
            !data.results[i].name.includes("-") 
                ? pokemonList.push(capitalizeFirstLetter(data.results[i].name))
                : null;
        };

        data.next 
            ? fetchAllPokemon(data.next) 
            : localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
    })
    .catch( function(error){
        alert(error);
    });
}
