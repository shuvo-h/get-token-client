import { newHotelInfoType } from './../../type/ownerTypes';
import httpReq from "../http.services";

class OwnerHotelAllService {
    async addNewHotel(payload:newHotelInfoType){
        const {data} = await httpReq.post("/hotels/.hotel",payload)
        return data
    }

}

const OwnerService = new OwnerHotelAllService();

export default OwnerService;