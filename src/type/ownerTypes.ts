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

type getOwnerImgType = {uri: string, title: string, id: string, _id: string}
export type getOwnerHotelType = {
    address: string
    city: string
    contact_Extra_info: string
    contact_email: string
    contact_phone: string
    country: string
    createdAt: string
    description: string
    hotelName:string
    hotel_category: string
    hotel_id: string
    img_uri: getOwnerImgType[]
    owner_email: string
    room: {total: number, booked: number, available: number}
    updatedAt: string
    __v: number
    _id: string
}

export type singleHotelDeleteType = {
    result: {
        acknowledged: boolean
        deletedCount: number
    }
    success: boolean
}