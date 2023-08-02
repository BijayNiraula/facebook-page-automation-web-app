import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import postsReducer from "./slices/postsSlice";
import controlEditPostModalReducer from "./slices/controlEditPostModalSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        editPostModal: controlEditPostModalReducer,
        posts: postsReducer,
    }
})