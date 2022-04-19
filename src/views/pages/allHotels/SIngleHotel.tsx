import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HotelService from '../../../services/hotelPublicService/hotel.services';
import { hotelImgType } from '../../../type/ownerTypes';

export type singleHotelType = {
    _id: string,
    hotelName: string,
    address: string,
    city: string,
    country: string,
    room: {
        total: number,
        booked: number,
        available: number
    },
    img_banner: string
    img_uri: hotelImgType[],
    description: string,
    contact_email: string,
    contact_phone: string,
    contact_Extra_info: string,
    hotel_category: string
}

const SIngleHotel = () => {
    const [hotel,setHotel]  = useState<singleHotelType>({} as singleHotelType);
    const {hotel_id} = useParams();
    const navigate = useNavigate();
    console.log(hotel);
    
    useEffect(()=>{
        if (hotel_id) {
            HotelService.getSingleHotel(hotel_id)
            .then(data=>{
                if (data.success) {
                    setHotel(data.hotel)
                }
            })
        }
    },[hotel_id])

    const handleRoom = (hotelId:string,roomType:string) =>{
        navigate(`/hotels/hotel/${hotelId}/rooms/${roomType}`);
    }
    if (!hotel_id) {
        return <div>Hotel Not Found!</div>
    }
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <h1 className='text-xl font-bold my-2'>{hotel.hotelName}</h1>
                    <div>
                        <h3 className='border text-center rounded font-bold text-blue-800 w-fit mx-auto px-2 bg-green-100'>{hotel.hotel_category}</h3>
                    </div>
                </div>
                <div className='shadow-md p-2 bg-gray-100 rounded'>
                    <p className='font-semibold'>(icon) {hotel.address}</p>
                    <p>(icon) {hotel.city}, {hotel.country}</p>
                    <p>Email: {hotel.contact_email}</p>
                    <p>Phone: {hotel.contact_phone}</p>
                    <p>{hotel.contact_Extra_info}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>images slider</p>
                    <p>images slider</p>
                    <p>images slider</p>
                </div>
                <div>

                </div>
            </div>
            <div className='grid md:grid-cols-3 bg-gray-600 rounded text-white text-center py-8'>
                <div className='my-2'>
                    <div className='w-fit mx-auto px-3 rounded-lg cursor-pointer hover:text-blue-200' onClick={()=>handleRoom(hotel_id,"total")}>
                        <h2 className='text-5xl text-blue-500 hover:text-blue-400'>{hotel.room?.total}</h2>
                        <h4 className='text-xl'>Total Rooms</h4>
                    </div>
                </div>
                <div className='my-2'>
                    <div className='w-fit mx-auto px-3 rounded-lg cursor-pointer hover:text-blue-200' onClick={()=>handleRoom(hotel_id,"available")}>
                        <h2 className='text-5xl text-blue-500 hover:text-blue-400'>{hotel.room?.available}</h2>
                        <h4 className='text-xl'>Available Rooms</h4>
                    </div>
                </div>
                <div className='my-2'>
                    <div className='w-fit mx-auto px-3 rounded-lg cursor-pointer hover:text-blue-200' onClick={()=>handleRoom(hotel_id,"booked")}>
                        <h2 className='text-5xl text-blue-500 hover:text-blue-400'>{hotel.room?.booked}</h2>
                        <h4 className='text-xl'>Booked Rooms</h4>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <p>{hotel.description}</p>
            </div>
        </div>
    );
};

export default SIngleHotel;