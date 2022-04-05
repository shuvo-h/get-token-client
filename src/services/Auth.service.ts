import { ILoginDataType, RegInfoType } from "../type/allTypes";
import httpReq from "./http.services";

class MainAuthService {
    async login(payload:ILoginDataType): Promise<any> {
      const ResponseData = await httpReq.post("/login",payload); // API endpoint
      console.log(ResponseData);
      return ResponseData
    }
    async registerMember(payload:RegInfoType): Promise<any> {
      const ResponseData = await httpReq.post("/register",payload); // API endpoint
      console.log(ResponseData);
      return ResponseData
    }
  }
  
  const AuthService = new MainAuthService();
  
  export default AuthService;