import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersAPI} from "../../api/Api";

// From SWAPI we will get all the characters that will be placed in the characters array
// As well as we have status for handling the status of operation, values for that: 'idle', 'loading', 'succeeded', 'failed'
// And error to hold an error, in case we receive one
const initialState = {
    characters: [],
    status: 'idle',
    error: null,
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                console.log(action)
                state.status = 'succeeded'
                state.characters = state.characters.concat(action.payload.results)
            })
            .addCase(fetchCharacters.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

})

// Thunks
export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
    try {
        const response = await charactersAPI.getCharacters()
        console.log(response)
        return response.data
    } catch (e) {
        return e.message
    }
})

// Selectors for convenient work with state
export const selectAllCharacters = (state) => state.characters.characters
export const getCharactersStatus = (state) => state.characters.status
export const getCharactersError = (state) => state.characters.error

export default charactersSlice.reducer