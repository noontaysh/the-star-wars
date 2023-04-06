import './App.scss';
import './common/Container.scss'
// import Characters from "./features/characters/Characters";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Planets from "./features/planets/Planets";
import Root from "./components/Root/Root";
// import Species from "./features/species/Species";
import Profile from "./features/profile/Profile";
import Entities from "./features/entities/Entities";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Root />} />
                    <Route path={'/people'} element={<Entities/>} />
                    <Route path={'/people/:objectId'} element={<Profile />} />
                    <Route path={'/planets'} element={<Entities />} />
                    <Route path={'/planets/:objectId'} element={<Profile />} />
                    <Route path={'/species'} element={<Entities />} />
                    <Route path={'/species/:objectId'} element={<Profile />} />
                    <Route path={'*'} element={<p>You lost your own way my son</p>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
