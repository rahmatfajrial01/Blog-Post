import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../features/user/userSlice'
import userReducer from '../features/user2/userSlice'
import postCategoryReducer from '../features/postCategory/postCategorySlice'
import postReducer from '../features/post/postSlice'
import commentReducer from '../features/comment/commentSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        postCategory: postCategoryReducer,
        post: postReducer,
        comment: commentReducer,
    },
})
