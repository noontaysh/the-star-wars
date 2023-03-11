import {configureStore} from "@reduxjs/toolkit";
import charactersReducer from '../features/characters/charactersSlice'
import characterReducer from '../features/characters/characterProfile/characterSlice'

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        character: characterReducer,
    }
})

window._store_ = store