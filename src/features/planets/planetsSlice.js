import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {planetsApi} from "../../api/Api";
import axios from "axios";

const initialState = {
    planets: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    totalCount: 0,
    pageSize: 10,
}

export const planetsSlice = createSlice({
    name: 'planets',
    initialState,
    reducers: {
        pageChanged(state, action) {
            state.currentPage = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPlanets.fulfilled, (state, action) => {
                state.status = 'idle'
                state.planets = action.payload.results
                state.totalCount = action.payload.count
                state.pageSize = action.payload.results.length
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
export const fetchPlanets = createAsyncThunk('planets/fetchPlanets', async (currentPage, {signal}) => {
    try {
        const source = axios.CancelToken.source()
        signal.addEventListener('abort', () => {
            source.cancel()
        })
        const response = await planetsApi.getPlanets(currentPage, {
            cancelToken: source.token
        })
        return response.data
    } catch (e) {
        return e.message
    }
})

// Selectors
export const selectAllPlanets = (state) => state.planets.planets
export const getPlanetsStatus = (state) => state.planets.status
export const getPlanetsError = (state) => state.planets.error

export const {pageChanged} = planetsSlice.actions

export default planetsSlice.reducer