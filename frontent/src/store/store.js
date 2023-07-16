import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import editPostModalReducer from "./slices/editPostModalSlice";
import postsReducer from "./slices/postsSlice";
export const store=configureStore({
    reducer:{
        auth:authReducer,
        editPostModal:editPostModalReducer,
        posts:postsReducer
    }
})