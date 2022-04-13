import { createSlice } from '@reduxjs/toolkit';
import { userType } from '../../type/allTypes';

type  statusType = "idle" | "pending" | "success" | "error";
type userStateType = {
    status: string
    user: userType | null
    error: string |null 
}
const userState: userStateType = {
    status: "idle",
    user: null,
    error: null
}

const authSlice = createSlice({
    name: "userState",
    initialState: userState,
    reducers:{
        // set user to state 
        setUserInfo: (state:userStateType,action:{payload:userStateType}) =>{
            console.log(action,"called");
            
            state.user = action.payload.user;
            state.status = action.payload.status;
        }
    },
    extraReducers: (builder) =>{}

})

export const {setUserInfo} = authSlice.actions;

export default authSlice.reducer;