import {configureStore} from "@reduxjs/toolkit";
import charactersReducer from '../features/characters/charactersSlice'
import characterReducer from '../features/characters/characterProfile/characterSlice'
import planetsReducer from '../features/planets/planetsSlice'
import planetReducer from '../features/planets/planetProfile/planetSlice'

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        character: characterReducer,
        planets: planetsReducer,
        planet: planetReducer,
    }
})

window._store_ = store