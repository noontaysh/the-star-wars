import {configureStore} from "@reduxjs/toolkit";
import charactersReducer from '../features/characters/charactersSlice'
import characterReducer from '../features/characters/characterProfile/characterSlice'
import planetsReducer from '../features/planets/planetsSlice'
import planetReducer from '../features/planets/planetProfile/planetSlice'
import speciesReducer from '../features/species/speciesSlice'
import specieReducer from '../features/species/specieProfile/specieSlice'

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        character: characterReducer,
        planets: planetsReducer,
        planet: planetReducer,
        species: speciesReducer,
        specie: specieReducer,
    }
})

window._store_ = store