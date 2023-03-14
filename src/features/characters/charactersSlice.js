import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersAPI} from "../../api/Api";
import axios from "axios";


// From SWAPI we will get all the characters that will be placed in the characters array
// As well as we have status for handling the status of operation, values for that: 'idle', 'loading', 'succeeded', 'failed'
// And error to hold an error, in case we receive one
const initialState = {
    characters: [],
    status: 'idle',
    currentRequestId: undefined,
    error: null,
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        pageChanged(state, action) {
            state.currentPage = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                console.log(action)
                state.status = 'idle'
                state.characters = action.payload.results
                state.totalCount = action.payload.count
                state.pageSize = action.payload.results.length
            })
            .addCase(fetchCharacters.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }

})

// Thunks
export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async (currentPage, {signal}) => {
    // try {
    //     const source = axios.CancelToken.source()
    //     signal.addEventListener('abort', () => {
    //         source && source.cancel('Operation canceled due to new request.');
    //     })
    //     const {data} = await charactersAPI.getCharacters(currentPage,{
    //         cancelToken: source.token
    //     })
    //     return data
    // } catch (e) {
    //     console.log(e)
    //     return e.message
    // }
    const source = axios.CancelToken.source()
    signal.addEventListener('abort', () => {
        source.cancel()
    })
    const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`, {
        cancelToken: source.token,
    })
    return response.data

})

// Selectors for convenient work with state
export const selectAllCharacters = (state) => state.characters.characters
export const getCharactersStatus = (state) => state.characters.status
export const getCharactersError = (state) => state.characters.error

export const {pageChanged} = charactersSlice.actions
export default charactersSlice.reducer