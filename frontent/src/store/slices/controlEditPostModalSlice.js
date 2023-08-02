import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    open: false,
    data: {}
}
const cotrolEditPostModalSlice = createSlice({
    name: "editPostModal",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.data = action.payload;
            state.open = true;
        },
        closeModal: (state, action) => {
            state.data = {}
            state.open = false
        }
    }

})

export default cotrolEditPostModalSlice.reducer;
export const { openModal, closeModal } = cotrolEditPostModalSlice.actions
