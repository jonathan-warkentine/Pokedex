import { clearSearchHistory } from "../utils/clearSearchHistory.js";

export function initializeClearSearchHistoryButton() {
    $("#clear").click(clearSearchHistory);
}
