import {bestSellingTv} from "../constants/inventory.js";

export function priceOfTv() {
    return `€${bestSellingTv.price},-`;
}