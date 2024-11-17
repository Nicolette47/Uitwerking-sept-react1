import {bestSellingTv} from '../constants/inventory.js';
import {inventory} from '../constants/inventory.js';

export function priceOfTv() {
    return `€${bestSellingTv.price},-`;
}

export function priceAllTvs(tv) {
    return `€${tv.price},-`;
}