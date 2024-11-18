import {inventory} from './inventory.js';

//Opdracht 1a: Gebruik een array-methode om een array te maken met daarin alle tv-type namen. Log de uitkomst in de console.

export const allTvNames = inventory.map((tv) => {
    return tv.brand;
});


//Opdracht 1b: Gebruik een array-methode om alle informatie te verzamelen van de tv's die volledig uitverkocht zijn. Log de uitkomst in de console.
// filter methode

export const soldTvInfo = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
});

//Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen.
export const infoTvNH = inventory.find((tv) => {
    return tv.type === 'NH3216SMART';
});

//Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger). Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.

// map methode:
// ga alle entries langs en haal op:
// a brand en zet ervoor: name:
// b schrijf erachter de "name" info uit inventory
// c scan de refreshrate en als deze 100 of meer is dan return als suitable:true of als minder is suitable: false.

export const suitableSportLovers = inventory.map((tv) => {
    if (tv.refreshRate >= 100) {
        return {
            Name:`${tv.brand} ${tv.name}` + ', suitable: true'
        };
    } else {
        return {
            name: `${tv.brand} ${tv.name}`+ ', suitable: false'
    };
    }
});

//Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter.
// stappenplan:
// loop door de array heen en:
// a) filter alle tv´s met schermgrootte 65 inch of meer eruit (let op: moet de array availableSizes doorzoeken (niet veranderen)!!
// b) inventory[i].availableSizes [i]). De eerste i wordt verzorgd door de filter methode. De tweede i daar moet gescand worden op 65 inch of meer. Blijkt some-methode te zijn?? Chat GTP kwam ermee. Some method heeft ook een call back functie nodig.
// b) die entry waar 65 inch of meer als true wordt gezien, die moet eruit gefilterd worden en in de array komen die wordt teruggegeven.
// resultaat: array met objecten, waarbij elk object een tv bevat die schermgrootte 65 of meer heeft.

export const tvInches = inventory.filter ( (tv) => {
    if (tv.availableSizes.some(size => size >= 65)) {
        return true;
    } else {
        return false;
    }
});



// Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight beschikken. Log de uitkomst in de console.
// stappenplan:
// 1. moet nieuwe array worden met alleen tv´s die ambilight hebben. Dus filter methode nodig.
// 2. Elk object komt in zijn geheel binnen via de filter methode.
// 3. Er moet gefilterd worden in de inventory.options array. Ambilight heeft index nr 4
// a. als ambilight true is dan moet in array komen.
// b. als ambilight false is dan overslaan.
// resultaat: array met objecten, waarbij elk object een tv bevat die ambilight heeft.

export const ambiTvs = inventory.filter( (tv) => {
    tv.options.some(option => option.name === "ambilight" && option.applicable)
    }
);