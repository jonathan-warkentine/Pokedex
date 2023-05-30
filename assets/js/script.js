/****************************************
              I M P O R T S
****************************************/
// function imports
import { populatePokemonList } from "./utils/populatePokemonList.js";
import { populatePage } from "./utils/populatePage.js";

// JQuery widget imports
import { initializeJqueryWidgets } from "./jquery/initializeJqueryWidgets.js";

/****************************************
                M A I N
****************************************/
async function main() {
    populatePokemonList();
    populatePage();
    initializeJqueryWidgets();
}

main();
