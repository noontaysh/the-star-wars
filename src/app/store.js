import {configureStore} from "@reduxjs/toolkit";
import charactersReducer from '../features/characters/charactersSlice'
// import characterReducer from '../features/characters/characterProfile/characterSlice'
import planetsReducer from '../features/planets/planetsSlice'
// import planetReducer from '../features/planets/planetProfile/planetSlice'
import speciesReducer from '../features/species/speciesSlice'
// import specieReducer from '../features/species/specieProfile/specieSlice'
import profileReducer from '../features/profile/profileSlice'

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        planets: planetsReducer,
        species: speciesReducer,
        profile: profileReducer,
    }
})

window._store_ = store