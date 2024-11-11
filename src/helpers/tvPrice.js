import {bestSellingTv} from "../constants/inventory.js";

export function priceTv() {
    return `€${bestSellingTv.price},-`;
}