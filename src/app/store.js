import {configureStore} from "@reduxjs/toolkit";
import profileReducer from '../features/profile/profileSlice'
import entitiesReducer from "../features/entities/entitiesSlice";

export const store = configureStore({
    reducer: {
        entities: entitiesReducer,
        profile: profileReducer,
    }
})

window._store_ = store