import React, { useEffect, useState } from 'react';
import HotelService from '../../../services/hotelPublicService/hotel.services';
import { hotelImgType } from '../../../type/ownerTypes';
import Hotel from '../../components/hotel/Hotel';
import HotelExploreBar from '../../components/hotel/HotelExploreBar';


export type hotelType = {
    _id: string,
    hotel_id: string,
    hotelName: string,
    address: string,
    city: string,
    country: string,
    img_uri: {uri:string,title:string,id: string,_id:string}[],
    hotel_category: string
}



const AllHotels = () => {
    const [hotels,setHotels] = useState<hotelType[]>([] as hotelType[]);

    useEffect(()=>{
            HotelService.getAllHotels()
            .then(data=>{
                console.log(data)
                if (data?.success) {
                    setHotels(data.hotels);
                }
            })
    },[])


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