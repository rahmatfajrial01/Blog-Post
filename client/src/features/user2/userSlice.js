import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import { authService } from "./userService"

export const getAllUser = createAsyncThunk("user/all/user", (thunkApi) => {
    try {
        return authService.getAllUser()
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const addToFavorite = createAsyncThunk("user/add-favorite", (data, thunkApi) => {
    try {
        return authService.addToFavorite(data)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const getUserFavorite = createAsyncThunk("user/get-user-favorite", (data, thunkApi) => {
    try {
        return authService.getUserFavorite(data)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const resetState = createAction("Reset_all")

const initialState = {
    isError: "",
    isSuccess: "",
    isLoading: "",
    allUser: "",
}

export const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.allUser = action.payload;
            })
            .addCase(getAllUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(addToFavorite.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.addedToFavorite = action.payload;
            })
            .addCase(addToFavorite.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getUserFavorite.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserFavorite.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.userFavorite = action.payload;
            })
            .addCase(getUserFavorite.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState)
    }
})

export default authSlice.reducer