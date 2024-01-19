import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../features/user/userSlice'
import userReducer from '../features/user2/userSlice'
import postCategoryReducer from '../features/postCategory/postCategorySlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        postCategory: postCategoryReducer,
    },
})
