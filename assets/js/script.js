//setting up local storage
if(response.cod==200){
    sCity=JSON.parse(localStorage.getItem("pokename"));
    console.log(sCity);
    if (sCity==null){
        sCity=[];
        sCity.push(city.toUpperCase()
        );
        localStorage.setItem("pokename",JSON.stringify(sCity));
        addToList(city);
    }
    else {
        if(find(city)>0){
            sCity.push(city.toUpperCase());
            localStorage.setItem("pokename",JSON.stringify(sCity));
            addToList(city);
        }
    }
}

//adds to history list
function addToList(c){
    var listEl= $("<li>"+c.toUpperCase()+"</li>");
    $(listEl).attr("class","list-group-item");
    $(listEl).attr("data-value",c.toUpperCase());
    $("#search-list").append(listEl);
}
// displays search when clicked in history
function invokePastSearch(event){
    var liEl=event.target;
    if (event.target.matches("li")){
        city=liEl.textContent.trim();
        currentWeather(city);
    }

}

// render function
function loadlastPoke(){
    $("ul").empty();
    var sCity = JSON.parse(localStorage.getItem("pokename"));
    if(sCity!==null){
        sCity=JSON.parse(localStorage.getItem("pokename"));
        for(i=0; i<sCity.length;i++){
            addToList(sCity[i]);
        }
        city=sCity[i-1];
        currentWeather(city);
    }

}
//Click Handlers
$(document).on("click",invokePastSearch);
$(window).on("load",loadlastPoke);