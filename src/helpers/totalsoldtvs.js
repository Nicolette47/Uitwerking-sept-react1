import {bestSellingTv} from "../constants/inventory.js";
import {inventory} from "../constants/inventory.js";


export function soldTelevisions() {
    let totalSold = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalSold +=  inventory[i].sold;
    }
 return totalSold;
}


