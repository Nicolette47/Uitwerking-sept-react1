import {bestSellingTv} from "../constants/inventory.js";
import {inventory} from "../constants/inventory.js";

export function stockStart() {
    let totalStockStart = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalStockStart += inventory[i].originalStock;
    }
    return totalStockStart;
}
