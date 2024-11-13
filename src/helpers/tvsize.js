import {bestSellingTv} from "../constants/inventory.js";

// omrekeningsfactor: 1 inch is 2,54 cm.
// Stappenplan:
// via loop leest hij inches en rekent het om in cm (hele getal via Math.round).
// De inch met cm waarde in nieuwe array plaatsen.
// die array weergeven.Methoden van array nodig Maargoed, simpel bedacht alleen had ChatGTP toch echt nodig.



export function sizeOfTv() {
    let cmSizes = [];
    const sizes = bestSellingTv.availableSizes
    for (let i = 0; i < sizes.length; i++) {
        let cmSize = sizes[i] * 2.54;
        cmSizes.push(`${sizes[i]} inches ( ${Math.round(cmSize)} cm)`);
    }
    return cmSizes.join(" | ")
}