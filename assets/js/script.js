//list of potential variables
const pokemon = "";
const searchPoke = $("#searchBar");
const searchButton = $("#searchBtn");
const currentPoke = $("#pokemonname");
const currentType = $("#pokemontype");
const hp = $("#hpResult");
const attack = $("#attack-result");
const defense = $("#defense-result");
const specialAttack = $("#special-attackresult");
const specialDefense = $("#special-defenseresult");
const speed = $("#speedresult");
//pokemon array
const sPoke = [];

$("#form").on("submit", function(event){
    event.preventDefault();
    console.log("recent search");
    displayRecent(document.querySelector("#searchBar").value);
})

function recentPokemon(){
    document.querySelector("#recent").textContent = (document.querySelector("#search").value);
}



