import { saveReorderedDeck } from "../utils/saveReorderedDeck.js";

export function initializeDeckSaver() {
    // Saves the new order of the deck after rearrangements
    $("#cards").on("mouseup", ".card", function(){ 
        // 250ms delay allows JQuery to finish rearranging in order to avoid null placeholder values
        setTimeout(saveReorderedDeck, 250); 
    })
}
