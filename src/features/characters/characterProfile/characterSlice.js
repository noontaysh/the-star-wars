import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersAPI} from "../../../api/Api";

const initialState = {
    character: null,
    status: 'idle',
    error: null
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(loadCharacter.fulfilled, (state, action) => {
                state.character = action.payload
                state.status = 'succeeded'
            })
            .addCase(loadCharacter.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(loadCharacter.rejected, (state, action) => {
                state.staus = 'failed'
                state.error = action.payload
            })
    }
})

// Thunks
export const loadCharacter = createAsyncThunk('characters/loadCharacter', async (characterId) => {
    try {
        const response = await charactersAPI.getCharacterById(characterId)
        console.log(response.data)
        return response.data
    } catch (e) {
        return e.message
    }
})

export const selectCharacter = (state) => state.character.character
export const getCharacterStatus = (state) => state.character.status
export const getCharacterError = (state) => state.character.error

export default characterSlice.reducer