import { createSlice, Action, createAsyncThunk } from '@reduxjs/toolkit';
import HotelService, { getOwnerAllHotelPayloadType, getOwnerAllHotelType } from '../../services/hotelPublicService/hotel.services';
import { getOwnerHotelType } from '../../type/ownerTypes';
// import AuthService from '../../services/Auth.service';
// import { userType } from '../../type/allTypes';

type  statusType = "idle" | "pending" | "success" | "error";
export type hotelStateType = {
    status: string
    hotels: getOwnerHotelType[] | null
    error: string |null 
}

export const fetchHotels = createAsyncThunk("hotels/hotels", async(payload:getOwnerAllHotelPayloadType)=>{
    const response =  await HotelService.getOwnerAllHotel(payload)
    return response;
})

const hotelsState: hotelStateType = {
    status: "idle",
    hotels: null,
    error: null
}

const ownerHotelSlice = createSlice({
    name: "hotelState",
    initialState: hotelsState,
    reducers:{
        // set hotels to state 
        storeHotels: (state:hotelStateType,action:{payload:hotelStateType}) =>{
            state.hotels = action.payload.hotels;
            state.status = action.payload.status;
        },
        // delete a hotel from state 
        deleteHotelById: (state:hotelStateType,action:{payload:string}) =>{
            if (!state.hotels?.length) return
            const restHotels = state.hotels.filter(hotel=> hotel.hotel_id !== action.payload);
            state.hotels = restHotels;
        },
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchHotels.pending, (state,action)=>{
            state.status = "pending";
            state.hotels = null;
            state.error = null;
        })
        builder.addCase(fetchHotels.fulfilled, (state,action)=>{
            state.status = "success";
            state.hotels = action.payload.hotels;
            state.error = null;
        })
        builder.addCase(fetchHotels.rejected, (state,action)=>{
            state.status = "success";
            state.hotels = null;
            state.error = "Error in data loading. Please try again!";
        })
    }

})

export const {storeHotels,deleteHotelById} = ownerHotelSlice.actions;

export default ownerHotelSlice.reducer;