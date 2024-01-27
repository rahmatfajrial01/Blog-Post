import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { toast } from "react-toastify"
import { commentService } from "./commentService"

export const getAllComments = createAsyncThunk("comment/get-all", async (thunkApi) => {
    try {
        return await commentService.getAllComments()
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const createComment = createAsyncThunk("comment/create", async (data, thunkApi) => {
    try {
        return await commentService.createComment(data)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})


const initialState = {
    comments: "",
    isError: "",
    isSuccess: "",
    isLoading: "",
    message: ""
}

export const postSliceCategories = createSlice({
    name: "post-categories",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllComments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.comments = action.payload;
            })
            .addCase(getAllComments.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createComment.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.commentCreated = action.payload;
            })
            .addCase(createComment.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })


    }
})

export default postSliceCategories.reducer
