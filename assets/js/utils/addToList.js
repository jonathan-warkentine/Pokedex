export function addToList(pokeName){ //writes given pokemon to recents list
    var listEl= $("<li>"+pokeName+"</li>");
    $(listEl).attr("class","list-group-item");
    $(listEl).text(pokeName);
    $("#search-list").append(listEl);
    listEl.click(function(event){
        firstLoad = false;
        fetchPokemon(event.target.innerText);
    })
};
