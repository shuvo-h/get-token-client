import httpReq from "../http.services";
import { addNewHotelType, updateSingleHoltelType } from '../../type/hotelType';

class OwnerHotelAllService {
    async addNewHotel(payload:addNewHotelType){
        const {data} = await httpReq.post("/hotels/hotel",payload)
        return data
    }

    async updateOwnerSingleHotel(hotel_id:string,payload:addNewHotelType): Promise<updateSingleHoltelType> {
        const {data} = await httpReq.update(`hotels/hotel/${hotel_id}`,payload);
        return data;
    }
}

const OwnerService = new OwnerHotelAllService();

export default OwnerService;