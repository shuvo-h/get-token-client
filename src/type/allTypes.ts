export interface ILoginDataType  {
    email : string,
    password: string
}

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
