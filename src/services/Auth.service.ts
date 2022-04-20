import { AxiosResponse } from "axios";
import { ILoginDataType, RegInfoType, userType } from "../type/allTypes";
import httpReq from "./http.services";


class MainAuthService {
    async login(payload:ILoginDataType): Promise<userType> {
      const {data} = await httpReq.post("/authenticate/login",payload); // API endpoint
      return data
    }
    async registerMember(payload:RegInfoType): Promise<any> {
      const ResponseData = await httpReq.post("/register",payload); // API endpoint
      return ResponseData
    }

    async keepLoggedIn():Promise<userType>{
      const {data} = await httpReq.get("/authenticate/onAuthStateChange");
      return data;
    }

    async logoutUser():Promise<any>{
      const ResponseData = await httpReq.delete("/authenticate/logout");
      return ResponseData;
    }

  }
  
  const AuthService = new MainAuthService();
  
  export default AuthService;