import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {profileAPI} from "../../api/Api";

const initialState = {
    entity: null,
    status: 'idle',
    error: null,
}

// Thunks
export const loadProfile = createAsyncThunk('entities/loadProfile', /**  @param path {string} */ async (path) => {
    try {
        const response = await profileAPI.getProfile(path)
        return response.data
    } catch(e) {
        return e.message
    }
})

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: {
            [loadProfile.fulfilled]: (state, action) => {
                state.entity = action.payload
                state.status = 'success'
            },
            [loadProfile.pending]: (state, action) => {
                state.status = 'pending'
            },
            [loadProfile.rejected]: (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            },
    }
})

export const selectEntity = (state) => state.profile

export default profileSlice.reducer