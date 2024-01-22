import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit"
import { postService } from "./postService"
import { toast } from 'react-toastify';

export const createPost = createAsyncThunk(
    "post/create-post", async (postData, thunkApi) => {
        try {
            return await postService.createPost(postData)
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    })
export const getAllPosts = createAsyncThunk(
    "post/get-all-posts", async (thunkApi) => {
        try {
            return await postService.getAllPosts()
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    })

export const deletePost = createAsyncThunk(
    "post/delete-post", async (data, thunkApi) => {
        try {
            return await postService.deletePost(data)
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    })

export const resetState = createAction("resetState")

const initialState = {
    isError: "",
    isSuccess: "",
    isLoading: "",
    message: "",
    posts: ""
}

export const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.postCreated = action.payload;
                if (state.isSuccess === true) {
                    toast.success("Post Created Successfully")
                }
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getAllPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.posts = action.payload;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deletePost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedPost = action.payload;
                if (state.isSuccess === true) {
                    toast.success("Post Deleted Successfully")
                }
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState)

    }
})

export default postSlice.reducer