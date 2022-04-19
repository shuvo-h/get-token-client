import React, { useState } from 'react';
import { hotelImgType } from '../../../type/ownerTypes';
import Hotel from '../../components/hotel/Hotel';
import HotelExploreBar from '../../components/hotel/HotelExploreBar';


export type hotelType = {
    hotel_id: string,
    hotelName: string,
    address: string,
    city: string,
    country: string,
    img_banner: string,
    hotel_category: string
}

const sampleHotels = [
    {   
        hotel_id: "1",
        hotelName: "Hortoli Hotel LTD",
        address: "507, Diya bondor",
        city: "Dhaka",
        country: "bangladesh",
        img_banner: "image banner url",
        hotel_category: "1 star",
    },
    {   
        hotel_id: "1",
        hotelName: "Hortoli Hotel LTD",
        address: "507, Diya bondor",
        city: "Dhaka",
        country: "bangladesh",
        img_banner: "image banner url",
        hotel_category: "1 star",
    },
    {   
        hotel_id: "1",
        hotelName: "Hortoli Hotel LTD",
        address: "507, Diya bondor",
        city: "Dhaka",
        country: "bangladesh",
        img_banner: "image banner url",
        hotel_category: "1 star",
    },
    {   
        hotel_id: "1",
        hotelName: "Hortoli Hotel LTD",
        address: "507, Diya bondor",
        city: "Dhaka",
        country: "bangladesh",
        img_banner: "image banner url",
        hotel_category: "1 star",
    },
    {   
        hotel_id: "1",
        hotelName: "Hortoli Hotel LTD",
        address: "507, Diya bondor",
        city: "Dhaka",
        country: "bangladesh",
        img_banner: "image banner url",
        hotel_category: "1 star",
    },
    {   
        hotel_id: "1",
        hotelName: "Hortoli Hotel LTD",
        address: "507, Diya bondor",
        city: "Dhaka",
        country: "bangladesh",
        img_banner: "image banner url",
        hotel_category: "1 star",
    },
    {   
        hotel_id: "1",
        hotelName: "Hortoli Hotel LTD",
        address: "507, Diya bondor",
        city: "Dhaka",
        country: "bangladesh",
        img_banner: "image banner url",
        hotel_category: "1 star",
    },
]

const AllHotels = () => {
    const [hotels,setHotels] = useState<hotelType[]>(sampleHotels);

    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto border-gray-900 bg-white'>
                <h1 className='text-center text-xl font-bold py-3'>Choose The Best hotel in The World</h1>
                <HotelExploreBar></HotelExploreBar>
                <div className='grid grid-cols-4 gap-3 px-4'>
                    {
                        hotels.map((hotel,id)=><Hotel hotel={hotel} key={id}></Hotel>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllHotels;