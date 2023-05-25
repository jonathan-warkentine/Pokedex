import { data } from "../config/data.js";

export function saveReorderedDeck() {
    const newDeck = [];
    for (let i=0; i<$("#cards").children().length; i++){
        newDeck.unshift($("#cards").children()[i].getAttribute("id"));
    }
    localStorage.setItem("currentDeck", JSON.stringify(newDeck));
}
