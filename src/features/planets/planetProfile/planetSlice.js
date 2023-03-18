import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {planetsApi} from "../../../api/Api";

const initialState = {
    planet: null,
    status: 'idle',
    error: null,
}

export const planetSlice = createSlice({
    name: 'planet',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loadPlanet.fulfilled, (state, action) => {
                state.planet = action.payload
                state.status = 'idle'
            })
            .addCase(loadPlanet.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(loadPlanet.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

// Thunk
export const loadPlanet = createAsyncThunk('planet/loadPlanet', async (planetId) => {
    try {
        const response = await planetsApi.getPlanetById(planetId)
        return response.data
    } catch (error) {
        return error.message
    }
})

export const selectPlanet = (state) => state.planet.planet
export const getPlanetStatus = (state) => state.planet.status
export const getPlanetError = (state) => state.planet.error

export default planetSlice.reducer
