import './App.css';
import {soldTelevisions} from './helpers/totalSoldTVs.js';
import {stockStart} from './helpers/startStock.js';
import {stockCurrent} from './helpers/currentStock.js';

function App() {
    const resultSoldTv = soldTelevisions();
    const resultStartStock = stockStart()
    const resultCurrentStock = stockCurrent();

    function printText(buttonText) {
        console.log(buttonText);
    }

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
                    <h3>best sold tv info here</h3>

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
