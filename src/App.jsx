import './App.css';
import {soldTelevisions} from './helpers/totalSoldTVs.js';
import {stockStart} from './helpers/startStock.js';
import {stockCurrent} from './helpers/currentStock.js';

function App() {
    const resultSoldTv = soldTelevisions();
    const resultStartStock = stockStart()
    const resultCurrentStock = stockCurrent();

    return (
        <>
            <header>
                <h1>Tech it easy dashboard</h1>
            </header>

            <main>
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
            </main>

        </>

    );
}

export default App
