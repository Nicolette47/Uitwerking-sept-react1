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
// a) filter alle tv´s met schermgrootte 65 inch of meer eruit (let op: moet de array availableSizes doorzoeken (niet veranderen)!! =>  inventory[i].availableSizes [i]). Blijkt de some-methode te zijn (thanks to ChatGTP)
// b) die entry moet in de array komen .
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
// loop door de array heen en:
// a) filter alle tv´s met ambilight. Let op: filteren op inventory[i].options[4].applicable === true. De filter methode geeft hele entry terug, maar in call back moet dus stuk code komen waarin wordt gecheckt of options[4].applicable true is.
// b) die entry moet in de array komen .
// resultaat: array met objecten, waarbij elk object een tv bevat die ambilight heeft.