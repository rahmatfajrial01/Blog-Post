import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../features/user/userSlice'
import postCategoryReducer from '../features/postCategory/postCategorySlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        postCategory: postCategoryReducer,
    },
})
