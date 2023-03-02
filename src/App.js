import './App.scss';
import {fetchCharacters} from "./features/characters/charactersSlice";
import {useDispatch} from "react-redux";
import Characters from "./features/characters/Characters";

function App() {
  return (
    <div className="App">
        <Characters />
    </div>
  );
}

export default App;
