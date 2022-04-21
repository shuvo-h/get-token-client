import { AxiosResponse } from "axios";
import { addNewHotelType, updateSingleHoltelType } from "../../type/hotelType";
import { getOwnerHotelType, singleHotelDeleteType } from "../../type/ownerTypes";
import { hotelType } from "../../views/pages/allHotels/AllHotels";
import { singleHotelType } from "../../views/pages/allHotels/SIngleHotel";
import httpReq from "../http.services";

type getAllHotelType = {
    hotels: hotelType[]
    success: boolean
}
type getSingleHotelType = {
    hotel: singleHotelType
    success: boolean
}
type getOwnerAllHotelPayloadType = {
    owner_email : string
}
type getOwnerAllHotelType = {hotels: getOwnerHotelType[], success: boolean}



class AllHotelServices{
    async getAllHotels(): Promise<getAllHotelType> {
        const {data} = await httpReq.get("/hotels");
        return data;
    }
    async getSingleHotel(hotel_id:string): Promise<getSingleHotelType> {
        const {data} = await httpReq.get(`/hotels/${hotel_id}`);
        return data;
    }
    async getOwnerAllHotel(payload:getOwnerAllHotelPayloadType): Promise<getOwnerAllHotelType> {
        const {data} = await httpReq.post(`hotels/hotel/owner`,payload);
        return data;
    }
    async deleteOwnerSingleHotel(hotel_id:string): Promise<singleHotelDeleteType> {
        const {data} = await httpReq.delete(`hotels/hotel/${hotel_id}`);
        return data;
    }
    
}

const HotelService = new AllHotelServices();

export default HotelService;