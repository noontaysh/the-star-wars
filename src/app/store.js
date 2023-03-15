import {configureStore} from "@reduxjs/toolkit";
import charactersReducer from '../features/characters/charactersSlice'
import characterReducer from '../features/characters/characterProfile/characterSlice'
import planetsReducer from '../features/planets/planetsSlice'

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        character: characterReducer,
        planets: planetsReducer,
    }
})

window._store_ = store