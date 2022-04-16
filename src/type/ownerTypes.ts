export interface hotelImgType {uri:string,title:string,id:string}
export interface newHotelInfoType {
    hotelName: string,
    address: string,
    city: string,
    country: string,
    totalRoom: number,
    img_uri: hotelImgType[],
    description: string,
    owner_email: string,
    contact_email: string,
    contact_phone: string,
    contact_Extra_info: string,
    hotel_category: "1 star" | "2 star" | "3 star" | "4 star" |"5 star" | "General" | "Other",
}
