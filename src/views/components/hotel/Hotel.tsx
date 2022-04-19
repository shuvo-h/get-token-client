import React from 'react';
import { hotelType } from '../../pages/allHotels/AllHotels';
import bike from "../../../assets/icons/bike.png";
import { NavLink } from 'react-router-dom';

type hotelPropType = {
    hotel: hotelType
}

const Hotel = ({hotel}: hotelPropType) => {
    
    return (
        <div className='border border-2 p-3 rounded-md shadow'>
            <div>
                <img src={`${hotel?.img_uri[0]?.uri}`} alt="" />
            </div>
            <div className='text-center'>
                <h5 className='font-bold'>{hotel.hotelName}</h5>
                <p>{hotel.city}, {hotel.country}</p>
                <p>{hotel.hotel_category}</p>
                <button className='bg-blue-200 px-3 rounded hover:bg-blue-400 hover:font-semibold'><NavLink to={`/hotels/hotel/${hotel.hotel_id }`}>Explore</NavLink></button>
            </div>
        </div>
    );
};

export default Hotel;