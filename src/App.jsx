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


function App() {

    function printText(buttonText) {
        console.log(buttonText);
    }

    console.log(allTvNames);
    console.log(soldTvInfo);
    console.log(infoTvNH);
    console.log(suitableSportLovers);
    console.log(tvInches);

const tvNamesGeneral = inventory.map((tv) => {
    return `${tv.brand} ${tv.type} - ${tv.name}`
});
console.log(tvNamesGeneral);


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
                            <button type="button" onClick={() => printText('Meest verkochte eerst')}>Meest verkochte
                                eerst
                            </button>
                            <button type="button" onClick={() => printText('Goedkoopste eerst')}>Goedkoopste eerst
                            </button>
                            <button type="button" onClick={() => printText('Meest geschikt voor sport eerst')}>Meest
                                geschikt
                                voor sport eerst
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
