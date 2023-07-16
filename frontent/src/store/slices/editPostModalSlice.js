import { createSlice } from "@reduxjs/toolkit";
const initialState={
    open:false,
    data:{}
}
const editPostModalSlice=createSlice({
    name:"editPostModal",
    initialState,
    reducers:{
        openModal:(state,action)=>{
            state.data=action.payload;
            state.open=true;
        },
        closeModal:(state,action)=>{
            state.data={}
            state.open=false
        }
    }

})

export default editPostModalSlice.reducer;
export const{openModal,closeModal}=editPostModalSlice.actions
