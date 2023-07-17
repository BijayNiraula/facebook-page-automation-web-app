import { createSlice } from "@reduxjs/toolkit";
import { errorToast } from "../../module/toast";
import { successToast } from "../../module/toast";
import fetchData from "../../module/fetchData";
const initialState={
    auth:false,
    status:"IDLE",
    data:{}
}


 const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.data=action.payload
            state.auth=true;
            
        },
        logout:(state,action)=>{
            localStorage.removeItem("auth");
            sessionStorage.removeItem("auth");
            state.data={};
            state.auth=false;
        },
        setStatus:(state,action)=>{
            state.status=action.payload

        }

    }
})


export const verifyLoginDetails=(e)=>{
    return async function verifyLoginDetailsThunk(dispatch,getState){
        dispatch(setStatus("LOADING"));
        const page_id = e.target[0].value;
        const page_access_token = e.target[1].value;
        const remeberMe = e.target[2].checked;
        const result = await fetchData("/api/auth/login", {page_id,page_access_token});
          if (result.success) {
            if (remeberMe) {
              localStorage.setItem("auth", JSON.stringify({data:result.data,token:result.token}));
            }
            sessionStorage.setItem("auth", JSON.stringify({data:result.data,token:result.token}));
          
              dispatch(login(result.data));
            successToast("login successfully");
          } else {
            errorToast(result.error);
          }
         dispatch(setStatus("IDLE"))
    }
}


export default authSlice.reducer;
export const{login,logout,setStatus}=authSlice.actions