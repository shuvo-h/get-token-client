import { hotelImgType } from "./ownerTypes"

export type addNewHotelType = {
    owner_email: string
    hotelName: string
    address: string
    city: string
    country: string
    img_banner: string
    hotel_category: string
    room: {
        total: number
        booked: number
        available: number
    },
    img_uri:hotelImgType[],
    description: string,
    contact_email: string,
    contact_phone: string,
    contact_Extra_info: string
}