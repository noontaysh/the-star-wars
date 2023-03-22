import './App.scss';
import './common/Container.scss'
import Characters from "./features/characters/Characters";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharacterProfile from "./features/characters/characterProfile/CharacterProfile";
import Planets from "./features/planets/Planets";
import PlanetProfile from "./features/planets/planetProfile/PlanetProfile";
import Root from "./components/Root/Root";
import Species from "./features/species/Species";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Root />} />
                    <Route path={'/characters'} element={<Characters/>} />
                    <Route path={'/characters/:characterId'} element={<CharacterProfile />} />
                    <Route path={'/planets'} element={<Planets />} />
                    <Route path={'/planets/:planetId'} element={<PlanetProfile />} />
                    <Route path={'/species'} element={<Species />} />
                    <Route path={'*'} element={<p>You lost your own way my son</p>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
