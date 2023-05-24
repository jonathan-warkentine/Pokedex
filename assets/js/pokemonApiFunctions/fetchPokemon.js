export function fetchPokemon(search) { // Fetches from Pokemon API
    search = search.toLowerCase();
    // widget1.play();
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data);
        writePokemon(data);
        saveLocally(data.name);
    });
    // .catch( function(error){
    //     alert(`Pokémon not found :(" \n ${error}`);
    // });
};
