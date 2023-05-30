import { data } from "../config/data.js";

export function initializeRemoveCardButton() {
    $("#cards").on("click", ".close", function(event){ 
        event.stopPropagation();
        data.currentDeck.splice(data.currentDeck.indexOf($(event.target).parent().parent().attr("id")), 1); 
        // write deletion to local storage
        localStorage.setItem("currentDeck",JSON.stringify(data.currentDeck));
        $(event.target).parent().parent().remove();
    });
}
