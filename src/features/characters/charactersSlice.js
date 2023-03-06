import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersAPI} from "../../api/Api";
import {useDispatch} from "react-redux";

// From SWAPI we will get all the characters that will be placed in the characters array
// As well as we have status for handling the status of operation, values for that: 'idle', 'loading', 'succeeded', 'failed'
// And error to hold an error, in case we receive one
const initialState = {
    characters: [],
    status: 'idle',
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
                state.status = 'succeeded'
                state.characters = action.payload.results
                state.totalCount = action.payload.count
                state.pageSize = action.payload.results.length
                // console.log(action.payload.count)
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
export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async (currentPage) => {
    try {
        const response = await charactersAPI.getCharacters(currentPage)
        return response.data
    } catch (e) {
        return e.message
    }
})

// Selectors for convenient work with state
export const selectAllCharacters = (state) => state.characters.characters
export const getCharactersStatus = (state) => state.characters.status
export const getCharactersError = (state) => state.characters.error

export const {pageChanged, statusChanged} = charactersSlice.actions
export default charactersSlice.reducer