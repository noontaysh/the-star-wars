import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {planetsApi} from "../../api/Api";

const initialState = {
    planets: [],
    status: 'idle',
    error: null,
}

export const planetsSlice = createSlice({
    name: 'planets',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPlanets.fulfilled, (state, action) => {
                state.status = 'idle'
                state.planets = action.payload.results
            })
            .addCase(fetchPlanets.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPlanets.rejected, (state, action) => {
                if (action.meta.aborted) {
                    state.status = 'loading'
                } else {
                    state.status = 'failed'
                    state.error = action.payload
                }
            })
    }
})

// Thunks
export const fetchPlanets = createAsyncThunk('planets/fetchPlanets', async (currentPage) => {
    try {
        const response = await planetsApi.getPlanets(currentPage)
        return response.data
    } catch (e) {
        return e.message
    }
})

// Selectors
export const selectAllPlanets = (state) => state.planets.planets
export const getPlanetsStatus = (state) => state.planets.status
export const getPlanetsError = (state) => state.planets.error

export default planetsSlice.reducer