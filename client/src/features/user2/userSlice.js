import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import { authService } from "./userService"

export const getAllUser = createAsyncThunk("user/all/user", (thunkApi) => {
    try {
        return authService.getAllUser()
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
            .addCase(resetState, () => initialState)
    }
})

export default authSlice.reducer