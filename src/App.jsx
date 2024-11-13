import './App.css';
import {soldTelevisions} from './helpers/totalsoldtvs.js';
import {stockStart} from './helpers/startstock.js';
import {stockCurrent} from './helpers/currentstock.js';
import {nameOfTv} from './helpers/nametv.js';
import {priceOfTv} from './helpers/tvprice.js';
import {sizeOfTv} from './helpers/tvsize.js';
import {bestSellingTv} from "./constants/inventory.js";
import check from './assets/check.png';
import minus from './assets/minus.png';
import {inventory} from './constants/inventory.js';
import (allTvNames) from



function App() {
    const resultSoldTv = soldTelevisions();
    const resultStartStock = stockStart()
    const resultCurrentStock = stockCurrent();

    function printText(buttonText) {
        console.log(buttonText);
    }

    console.log(allTvNames);

    return (
        <>
            <header>
                <h1>Tech it easy dashboard</h1>
            </header>

            <main>
                <section className="verkoopoverzicht">
                    <h2>Verkoopoverzicht</h2>
                    <div>
                        <p className="soldTvs">Aantal verkochte producten: {resultSoldTv}</p>
                    </div>
                    <div>
                        <p className="startStock">Aantal ingekochte producten: {resultStartStock}</p>
                    </div>
                    <div>
                        <p className="currentStock">Aantal te verkopen producten: {resultCurrentStock}</p>
                    </div>
                </section>

                <section className="best-sold-Tv">
                    <h2>Best verkochte TV</h2>
                    <div >
                        <img src={bestSellingTv.sourceImg} alt="afbeelding van de tv" />
                    </div>
                    <div>
                        <h3>{nameOfTv()}</h3>
                        <p>{priceOfTv(bestSellingTv.price)}</p>
                        <p>{sizeOfTv(bestSellingTv.availableSizes)}</p>
                    </div>
                    <div>
                        <div className="icon-part">
                            <img src={check} className="icons" alt="check-icon"/>
                            <p>wifi</p>
                        </div>
                        <div className="icon-part">
                            <img src={minus} className="icons" alt="minus-icon"/>
                            <p>speech</p>
                        </div>
                        <div className="icon-part">
                            <img src={check} className="icons" alt="check-icon"/>
                            <p>hdr</p>
                        </div>
                        <div className="icon-part">
                            <img src={check} className="icons" alt="check-icon"/>
                            <p>bluetooth</p>
                        </div>
                        <div className="icon-part">
                            <img src={minus} className="icons" alt="check-icon"/>
                            <p>ambilight</p>
                        </div>
                    </div>

                </section>
                <section>
                    <button type="button" onClick={() => printText('Meest verkochte eerst')}>Meest verkochte eerst
                    </button>
                    <button type="button" onClick={() => printText('Goedkoopste eerst')}>Goedkoopste eerst
                    </button>
                    <button type="button" onClick={() => printText('Meest geschikt voor sport eerst')}>Meest geschikt
                        voor sport eerst
                    </button>
                </section>

            </main>

        </>

    );
}

export default App
