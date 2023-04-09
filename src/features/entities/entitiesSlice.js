import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {entitiesAPI} from "../../api/Api";
import axios from "axios";

const initialState = {
    entities: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    totalCount: 0,
    pageSize: 10, // 10 by default
}

// Thunks
export const fetchEntities = createAsyncThunk('planets/fetchEntities', /**
 @param {Object} signal
 @param {Object} data
 */ async (data, {signal}) => {
    try {
        const {pathname, currentPage} = data
        const source = axios.CancelToken.source()
        signal.addEventListener('abort', () => {
            source.cancel()
        })
        const response = await entitiesAPI.getAllEntities(pathname,currentPage, {
            cancelToken: source.token
        })
        return response.data
    } catch (e) {
        return e.message
    }
})

export const entitiesSlice = createSlice({
    name: 'entities',
    initialState,
    reducers: {
        pageChanged(state, action) {
            state.currentPage = action.payload
        }
    },
    extraReducers: {
            [fetchEntities.fulfilled]: (state, action) => {
                state.status = 'success'
                state.entities = action.payload.results
                state.totalCount = action.payload.count
            },
            [fetchEntities.pending]: (state, action) => {
                state.status = 'pending'
            },
            [fetchEntities.rejected]: (state, action) => {
                if (action.meta.aborted) {
                    state.status = 'pending'
                } else {
                    state.status = 'failed'
                    state.error = action.payload
                }
            }
    }
})


// Selectors
export const selectAllEntities = (state) => state.entities

export const {pageChanged} = entitiesSlice.actions

export default entitiesSlice.reducer