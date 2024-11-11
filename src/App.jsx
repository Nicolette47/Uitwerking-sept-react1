import './App.css';
import {soldTelevisions} from './helpers/totalSoldTVs.js';


function App() {
const resultSoldTv = soldTelevisions();
    return (
        <>
            <header>
                <h1>Tech it easy dashboard</h1>
            </header>

            <main>
                <h2>Verkoopoverzicht</h2>
                <div>
                    <p className="soldTvs">Het aantal verkochte producten: {resultSoldTv}</p>
                </div>

            </main>

        </>

    );
}

export default App
