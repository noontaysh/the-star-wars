import './App.scss';
import './common/Container.scss'
import Characters from "./features/characters/Characters";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharacterProfile from "./features/characters/characterProfile/CharacterProfile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/characters'} element={<Characters/>} />
                    <Route path={'/planets'} element={<p>Planets</p>} />
                    <Route path={'/character/:characterId'} element={<CharacterProfile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
