import {inventory} from '../constants/inventory.js';
import {bestSellingTv} from "../constants/inventory.js";


// Stappenplan:
// 1. door functie-aanroep komt er telkens 1 object binnen komen in de functie.
// 2. uit dit object willen we naar options gaan.
// 3. Options geeft een array met objecten, waar we willen filteren op naam.
// 4. Die namen moeten dan worden terug gegeven in string vorm.


// proef 1 om namen te krijgen wifi speech enz
//for (let i = 0; i < inventory.length; i++) {
//    for (let j = 0; j < inventory[i].options.length; j++) {
//        console.log(inventory[i].options[j].name);
//    }
//}

export function tvOptions (tv) {
    return tv.options.map(option => option.name).join(" , ");
}


// proef 2 om namen te krijgen.
//const result = inventory.map((tv) => {
//    return tv.options;
//})
//console.log(result);