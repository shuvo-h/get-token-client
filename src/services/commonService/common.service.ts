import { contactFormType } from "../../views/pages/ContactUS/ContactUS";
import httpReq from "../http.services";

class CommonHttpService {
    async sendContactMessage(payload: contactFormType){
        const {data} = await httpReq.post("/contact/receive",payload);
        return data;
    }
}

const commonService = new CommonHttpService();

export default commonService;