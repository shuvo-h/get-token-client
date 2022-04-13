// login form data 
export interface ILoginDataType  {
    email : string,
    password: string
}

export interface logInfoType  {
    email: string,
    password: string
}

// registration form data 
export interface RegInfoType {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: number;
    address: {
        houseNo: string;
        road: string;
        post: string;
        division: string;
    };
    birthday: string;
}

// user info redux state type 

export interface userType {
        email: string,
        mobile: string,
        name: string,
        role: string
} 
