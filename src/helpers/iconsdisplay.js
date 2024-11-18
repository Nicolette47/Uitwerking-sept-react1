import {inventory} from '../constants/inventory.js';
import {bestSellingTv} from "../constants/inventory.js";
import check from '../assets/check.png';
import minus from '../assets/minus.png';


// Stappenplan:
// 1. door functie-aanroep komt er telkens 1 object binnen komen in de functie.
// 2. uit dit object willen we naar options gaan.
// 3. Elk object heeft een options met weer een array van objecten.
// 4. Die namen moeten dan worden terug gegeven in string vorm.


// proef 1 om namen te krijgen wifi speech enz
//for (let i = 0; i < inventory.length; i++) {
//    for (let j = 0; j < inventory[i].options.length; j++) {
//        console.log(inventory[i].options[j].name);
//    }
//}

// ik snap dat filter niet gaat hieronder op deze manier, omdat er niet gefilterd moet worden. Maar nieuwe
// array met icoon (op basis true false conditie) gekoppeld aan de naam). Maar hoe?? AI info gaat pet te boven. Ga sorteren oefenen


export function tvOptions (tv) {
    return tv.options
        //.filter((option) => {
        //    if (option.applicable === 'true') {
        //        return check;
        //    } else {
        //        return minus;
        //    };
        //})
        .map(option => option.name)
        .join(",  ");
}


// proef 2 om namen te krijgen.
//const result = inventory.map((tv) => {
//    return tv.options;
//})
//console.log(result);