import httpReq from "../http.services";
import { addNewHotelType } from '../../type/hotelType';

class OwnerHotelAllService {
    async addNewHotel(payload:addNewHotelType){
        const {data} = await httpReq.post("/hotels/hotel",payload)
        return data
    }

}

const OwnerService = new OwnerHotelAllService();

export default OwnerService;