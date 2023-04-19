import './App.scss';
import './common/Container.scss'
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Root from "./components/Root/Root";
import Profile from "./features/profile/Profile";
import Entities from "./features/entities/Entities";
import Intro from "./components/intro/Intro";
import './common/Container.scss'

function App() {

    return (
        <div className="App">
            <Intro/>
            <BrowserRouter>
                <div className={'main'}>
                    <Header/>
                    <Routes>
                        <Route path={'/the-star-wars'} element={<Root/>}/>
                        <Route path={'/people'} element={<Entities/>}/>
                        <Route path={'/people/:objectId'} element={<Profile/>}/>
                        <Route path={'/planets'} element={<Entities/>}/>
                        <Route path={'/planets/:objectId'} element={<Profile/>}/>
                        <Route path={'/species'} element={<Entities/>}/>
                        <Route path={'/species/:objectId'} element={<Profile/>}/>
                        <Route path={'/starships/'} element={<Entities/>}/>
                        <Route path={'/starships/:objectId'} element={<Profile/>}/>
                        <Route path={'/vehicles/'} element={<Entities/>}/>
                        <Route path={'/vehicles/:objectId'} element={<Profile/>}/>
                        <Route path={'/films/'} element={<Entities/>}/>
                        <Route path={'/films/:objectId'} element={<Profile/>}/>
                        <Route path={'*'} element={<p>You lost your own way my son</p>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
