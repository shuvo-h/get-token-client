import { AxiosResponse } from "axios";
import { addNewHotelType } from "../../type/hotelType";
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

class AllHotelServices{
    async getAllHotels(): Promise<getAllHotelType> {
        const {data} = await httpReq.get("/hotels");
        return data;
    }
    async getSingleHotel(hotel_id:string): Promise<getSingleHotelType> {
        const {data} = await httpReq.get(`/hotels/${hotel_id}`);
        return data;
    }
}

const HotelService = new AllHotelServices();

export default HotelService;