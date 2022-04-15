import { createSlice, Action, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../services/Auth.service';
import { userType } from '../../type/allTypes';

type  statusType = "idle" | "pending" | "success" | "error";
type userStateType = {
    status: string
    user: userType | null
    error: string |null 
}

export const fetchUser = createAsyncThunk("user/user", ()=>{
    const response =  AuthService.keepLoggedIn()
    return response;
})
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
            state.user = action.payload.user;
            state.status = action.payload.status;
        },
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchUser.pending, (state,action)=>{
            state.status = "pending";
            state.user = null;
            state.error = null;
        })
        builder.addCase(fetchUser.fulfilled, (state,action)=>{
            state.status = "success";
            state.user = action.payload;
            state.error = null;
        })
        builder.addCase(fetchUser.rejected, (state,action)=>{
            state.status = "idle";
            state.user = null;
            state.error = "Some thing went wrong. Login Again!";
        })
    }

})

export const {setUserInfo} = authSlice.actions;

export default authSlice.reducer;