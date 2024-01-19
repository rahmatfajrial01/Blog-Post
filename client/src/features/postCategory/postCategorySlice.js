import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postCategoriesService } from "./postCategoryService"

export const getAllPostCategories = createAsyncThunk("post/get-all-post-categories", async (thunkApi) => {
    try {
        return await postCategoriesService.getAllPostCategory()
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const getAPostCategory = createAsyncThunk("post/get-a-post-categories", async (id, thunkApi) => {
    try {
        return await postCategoriesService.getAPostCategory(id)
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

export const deletePostCategories = createAsyncThunk("post/delete-post-categories", async (data, thunkApi) => {
    try {
        return await postCategoriesService.deletePostCategory(data)
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const updatePostCategories = createAsyncThunk("post/update-post-categories", async (data, thunkApi) => {
    try {
        return await postCategoriesService.updatePostCategory(data)
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
            .addCase(deletePostCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deletePostCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.postCategoryDeleted = action.payload;
            })
            .addCase(deletePostCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getAPostCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAPostCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.getACategory = action.payload;
            })
            .addCase(getAPostCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(updatePostCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updatePostCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.postCategoryUpdated = action.payload;
                state.getACategory = "";
            })
            .addCase(updatePostCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })

    }
})

export default postSliceCategories.reducer
