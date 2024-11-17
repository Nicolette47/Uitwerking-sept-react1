import {bestSellingTv} from '../constants/inventory.js';
import {inventory} from '../constants/inventory.js';

export function nameOfTv() {
     return `${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`;
}

export function nameOfTv2() {
     return `${inventory.brand} ${inventory.type} - ${inventory.name}`;
}




