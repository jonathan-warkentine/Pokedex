import { initializeSearchbarAutocomplete } from "./searchbarAutocomplete.js";
import { initializeSortableCards } from "./sortableCards.js";
import { initializeSubmitSearchEventListener } from "./submitSearchEventListener.js";
import { initializeDeckSaver } from "./deckSaver.js";
import { initializeRemoveCardButton } from "./removeCardButton.js";
import { initializeClearSearchHistoryButton } from "./clearSearchHistoryButton.js";

export function initializeJqueryWidgets() {
    initializeSearchbarAutocomplete();
    initializeSortableCards();
    initializeSubmitSearchEventListener();
    initializeDeckSaver();
    initializeRemoveCardButton();
    initializeClearSearchHistoryButton();
}
