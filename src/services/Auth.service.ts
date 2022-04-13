import { AxiosResponse } from "axios";
import { ILoginDataType, RegInfoType, userType } from "../type/allTypes";
import httpReq from "./http.services";

type err = {
  errors: any
}

class MainAuthService {
    async login(payload:ILoginDataType): Promise<userType> {
      const {data} = await httpReq.post("/authenticate/login",payload); // API endpoint
      // logInfoType
      return data
    }
    async registerMember(payload:RegInfoType): Promise<any> {
      const ResponseData = await httpReq.post("/register",payload); // API endpoint
      console.log(ResponseData);
      return ResponseData
    }

    async logoutUser():Promise<any>{
      const ResponseData = await httpReq.delete("/logout");
      return ResponseData;
    }
  }
  
  const AuthService = new MainAuthService();
  
  export default AuthService;