import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postCategoriesService } from "./postCategoryService"

export const getAllPostCategories = createAsyncThunk("post/get-all-post-categories", async (thunkApi) => {
    try {
        return await postCategoriesService.getAllPostCategory()
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const createPostCategories = createAsyncThunk("post/create-post-categories", async (data, thunkApi) => {
    try {
        return await postCategoriesService.createPostCategory(data)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

const initialState = {
    postCategories: "",
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
            .addCase(getAllPostCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllPostCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.postCategories = action.payload;
            })
            .addCase(getAllPostCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(createPostCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createPostCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.postCategoryCreated = action.payload;
            })
            .addCase(createPostCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })

    }
})

export default postSliceCategories.reducer
