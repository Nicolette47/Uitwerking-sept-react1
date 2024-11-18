import {inventory} from "../constants/inventory.js"
import {soldTelevisions} from "./totalsoldtvs.js";
import {stockStart} from "./startstock.js";

export function stockCurrent() {
    const currentStock = stockStart() - soldTelevisions()
    return currentStock;
}
