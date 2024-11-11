import {inventory} from "../constants/inventory.js"
import {soldTelevisions} from "./totalSoldTVs.js";
import {stockStart} from "./startStock.js";

export function stockCurrent() {
    const currentStock = stockStart() - soldTelevisions()
    return currentStock;
}
