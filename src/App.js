import './App.scss';
import './common/Container.scss'
import Characters from "./features/characters/Characters";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharacterProfile from "./features/characters/characterProfile/CharacterProfile";
import Planets from "./features/planets/Planets";
import PlanetProfile from "./features/planets/planetProfile/PlanetProfile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/characters'} element={<Characters/>} />
                    <Route path={'/character/:characterId'} element={<CharacterProfile />} />
                    <Route path={'/planets'} element={<Planets />} />
                    {/*<Route path={'/planet/:planetId'} element={<PlanetProfile />} />*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
