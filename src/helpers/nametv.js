import {bestSellingTv} from "../constants/inventory.js";

export function nameTv() {
     return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`;
}

console.log(nameTv());




