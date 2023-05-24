export function saveReorderedDeck() {
    currentDeck = [];
    for (let i=0; i<$("#cards").children().length; i++){
        currentDeck.unshift($("#cards").children()[i].getAttribute("id"));
    }
    localStorage.setItem("currentDeck", JSON.stringify(currentDeck));
}
