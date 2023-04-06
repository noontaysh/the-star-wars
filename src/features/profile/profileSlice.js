import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {profileAPI} from "../../api/Api";

const initialState = {
    entity: null,
    status: 'idle',
    error: null,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loadProfile.fulfilled, (state, action) => {
                state.entity = action.payload
                state.status = 'idle'
            })
            .addCase(loadProfile.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(loadProfile.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

// Thunks
export const loadProfile = createAsyncThunk('entities/loadProfile', /**  @param path {string} */ async (path) => {
    try {
        const response = await profileAPI.getProfile(path)
        return response.data
    } catch(e) {
        return e.message
    }
})

export const selectEntity = (state) => state.profile.entity
export const getEntityStatus = (state) => state.profile.status
export const getEntityError = (state) => state.profile.error

export default profileSlice.reducer