import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {speciesApi} from "../../api/Api";

const initialState = {
    entities: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    totalCount: 0,
    pageSize: 10, // 10 by default
}

export const speciesSlice = createSlice({
    name: 'species',
    initialState,
    reducers: {
        pageChanged(state, action) {
            state.currentPage = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchSpecies.fulfilled, (state, action) => {
                state.status = 'idle'
                state.entities = action.payload.results
                state.totalCount = action.payload.count
            })
            .addCase(fetchSpecies.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchSpecies.rejected, (state, action) => {
                if(action.meta.aborted) {
                    state.status = 'pending'
                } else {
                    state.status = 'failed'
                    state.error = action.payload
                }
            })
    }
})

// Thunks

export const fetchSpecies = createAsyncThunk('species/fetchSpecies', async (currentPage, {signal}) => {
    try {
        const source = axios.CancelToken.source()
        signal.addEventListener('abort', () => {
            source.cancel()
        })
        const response = await speciesApi.getSpecies(currentPage, {
            cancelToken: source.token
        })
        return response.data
    } catch (e) {
        return e.message
    }
})

export const selectAllSpecies = (state) => state.species.entities
export const getSpeciesError = (state) => state.species.error
export const getSpeciesStatus = (state) => state.species.status

export const {pageChanged} = speciesSlice.actions
export default speciesSlice.reducer