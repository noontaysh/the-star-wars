import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {speciesApi} from "../../../api/Api";

const initialState = {
    specie: null,
    status: 'idle',
    error: null,
}

export const specieSlice = createSlice({
    name: 'specie',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loadSpecie.fulfilled, (state, action) => {
                state.status = 'idle'
                state.specie = action.payload
            })
            .addCase(loadSpecie.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(loadSpecie.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

// Thunks
export const loadSpecie = createAsyncThunk('species/loadSpecie', async(specieId) => {
    try {
        const response = await speciesApi.getSpecieById(specieId)
        return response.data
    } catch(e) {
        return e.message
    }
})

export const selectSpecie = (state) => state.specie.specie
export const getSpecieStatus = (state) => state.status
export const getSpecieError = (state) => state.error

export default specieSlice.reducer