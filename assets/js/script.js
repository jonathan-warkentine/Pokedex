$("#form").on("submit", function(event){
    event.preventDefault();
    console.log("recent search");
    displayRecent(document.querySelector("#searchBar").value);
})

function displayRecent(){
   document.querySelector("#search-list").textContent = (document.querySelector("#searchBar").value);
}

// displays search when clicked in history
function invokePastSearch(event){
    var liEl = event.target;
    if (event.target.matches("li")){
       $("#searchBar").value = liEl.textContent.trim();
        fetchPokemon(search);
    }
}
$(document).on("click",invokePastSearch);

