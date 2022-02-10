// Search Submit Event Listener
$("#form").on("submit", function(event){
    event.preventDefault();
    console.log("search submitted");
    fetchPokemon(document.querySelector("#searchBar").value)
})

// Fetches Search from Pokemon API
function fetchPokemon(search) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data);
        writePokemon(data);
    })
    .catch( function(error){
        alert(error);
    })
}
    

function writePokemon(data){
    console.log("name: "+ data.name);
}