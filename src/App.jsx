import './App.css';
import {soldTelevisions} from './helpers/totalsoldtvs.js';
import {stockStart} from './helpers/startstock.js';
import {stockCurrent} from './helpers/currentstock.js';
import {nameOfTv} from './helpers/nametv.js';
import {nameOfTv2} from './helpers/nametv.js';
import {priceOfTv} from './helpers/tvprice.js';
import {priceAllTvs} from './helpers/tvprice.js';
import {sizeOfTv} from './helpers/tvsize.js';
import {sizesOfTvs} from './helpers/tvsize.js';
import {bestSellingTv} from './constants/inventory.js';
import check from './assets/check.png';
import minus from './assets/minus.png';
import {inventory} from './constants/inventory.js';
import {allTvNames} from './constants/deel2opdracht1.js';
import {soldTvInfo} from './constants/deel2opdracht1.js';
import {infoTvNH} from './constants/deel2opdracht1.js';
import {suitableSportLovers} from './constants/deel2opdracht1.js';
import {tvInches} from './constants/deel2opdracht1.js';
import {tvOptions} from './helpers/iconsdisplay.js';
import {ambiTvs} from './constants/deel2opdracht1.js';



function App() {

// DEEL 2 OPDRACHT 1 (functies in helperfiles)

   console.log(allTvNames);
   console.log(soldTvInfo);
   console.log(infoTvNH);
   console.log(suitableSportLovers);
   console.log(tvInches);
   console.log(ambiTvs);




// BUTTON + DEEL 2 OPDRACHT 3  (NB daarna aan buttons gekoppeld)
   // function printText(buttonText) {
   //     console.log(buttonText);
   // }

    function printArray(buttonText) {
        console.log(buttonText);
    }

// Meest verkochte items van hoog naar laag.
    //Stappenplan:
    // 1. over array gaan = elk object scannen- via de sort methode
    // 2. eerste keer loop : van het object de sold property getal 1 nemen
    // 3. naar volgende object gaan. Daar weer sold property getal 2 nemen
    // 4. dan deze twee getallen vergelijken
    // 5. Als getal 2 kleiner is dan getal 1, dan dat object naar links schuiven= neg getal etc.

    inventory.sort((a, b) => {
        if (a.sold > b.sold) {
            return -1;
        } else if (a.sold < b.sold) {
            return 1;
        } else {
            return 0;
        }
    });
    console.log(inventory);

    inventory.sort((a, b) => b.sold - a.sold)

// Goedkoopste eerst :sorten prijs van laag naar hoog
    inventory.sort((a, b) => {
        if (a.price > b.price) {
            return 1;
        } else if (a.price < b.price) {
            return -1;
        } else {
            return 0;
        }
    });
    console.log(inventory);

    inventory.sort((a, b) => a.price - b.price)



// Meest geschikt voor sport : van hoog naar laag
    inventory.sort((a, b) => {
        if (a.refreshRate > b.refreshRate) {
            return -1;
        } else if (a.refreshRate < b.refreshRate) {
            return 1;
        } else {
            return 0;
        }
    });
    console.log(inventory);

    inventory.sort((a, b) => b.sold - a.sold)


    return (
        <>
            <div className="outer-container">
                <div className="inner-container">

                    <header>
                        <h1>Tech it easy dashboard</h1>
                    </header>

                    <main>
                        <section>
                            <h2>Verkoopoverzicht</h2>
                            <div className="dashboard-container">
                                <article className="dashboard-item items-sold">
                                    <h3>Aantal verkochte producten</h3>
                                    <h2>{soldTelevisions(inventory)}</h2>
                                </article>
                                <article className="dashboard-item items-original">
                                    <h3>Aantal ingekochte producten</h3>
                                    <h2>{stockStart(inventory)}</h2>
                                </article>
                                <article className="dashboard-item items-to-sell">
                                    <h3>Aantal te verkopen producten</h3>
                                    <h2>{stockCurrent(inventory)}</h2>
                                </article>
                            </div>
                        </section>

                        <section>
                            <h2>Best verkochte TV</h2>
                            <div className="best-sold-tv">
                                <div className="tv-image">
                                    <img src={bestSellingTv.sourceImg} alt="afbeelding van de tv"/>
                                </div>

                                <div className="tv-information">
                                    <h3>{nameOfTv()}</h3>
                                    <p className="best-tv-price">{priceOfTv()}</p>
                                    <p>{sizeOfTv()}</p>
                                    <div className="icon-wrapper">
                                        <img src={check} className="icons" alt="check-icon"/>
                                        <p>wifi</p>

                                        <img src={minus} className="icons" alt="minus-icon"/>
                                        <p>speech</p>

                                        <img src={check} className="icons" alt="check-icon"/>
                                        <p>hdr</p>

                                        <img src={check} className="icons" alt="check-icon"/>
                                        <p>bluetooth</p>

                                        <img src={minus} className="icons" alt="check-icon"/>
                                        <p>ambilight</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <button type="button" onClick={() => printArray( inventory.sort((a, b) => b.sold - a.sold))}>Meest verkochte
                                eerst
                            </button>
                            <button type="button" onClick={() => printArray(  inventory.sort((a, b) => a.price - b.price))}>Goedkoopste eerst
                            </button>
                            <button type="button" onClick={() => printArray(inventory.sort((a, b) => b.refreshRate - a.refreshRate))}>Meest
                                geschikt voor sport eerst
                            </button>
                        </section>

                        <section>
                            <h2>List of TV names:</h2>
                            <ul className="tv-list">
                                {inventory.map((tv) => {
                                    return <li key={tv.type}>{tv.brand}</li>
                                })}
                            </ul>
                        </section>

                        <section>
                            <ul>
                                {inventory.map((tv) => {
                                    return (
                                        <li key={tv.type} className="tv-overview">
                                            <div className="tv-image"><img src={tv.sourceImg}
                                                                           alt="afbeelding van de tv"/>
                                            </div>
                                            <div className="tv-information">
                                                <h3>{nameOfTv2(tv)}</h3>
                                                <p className="best-tv-price">{priceAllTvs(tv)}</p>
                                                <p>{sizesOfTvs(tv)}</p>
                                                <p>{tvOptions(tv)}</p>
                                            </div>
                                        </li>
                                    );
                                })
                                }
                            </ul>
                        </section>
                    </main>
                </div>
            </div>
        </>

    );
}

export default App
