import './App.scss';
import './common/Container.scss'
import Characters from "./features/characters/Characters";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/characters'} element={<Characters/>} />
                    <Route path={'/planets'} element={<p>Planets</p>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
