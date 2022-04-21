import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/store';
import HotelService from '../../../../services/hotelPublicService/hotel.services';
import { addNewHotelType } from '../../../../type/hotelType';

const OwnHotels = () => {
    const [ownerHotels,setOwnerHotels] = useState<addNewHotelType[]>([]);
    const user = useSelector((state:RootState)=>state.user);
    useEffect(()=>{
        if (user.user?.email) {
            HotelService.getOwnerAllHotel({owner_email : user.user?.email})
            .then(data=>{
                console.log(data.hotels);
                setOwnerHotels(data.hotels)
            })
        }
    },[user.user?.email])

    return (
        <div>
            OwnHotels
            {
                ownerHotels?.map(hot=><li>{hot.hotelName}</li>)
            }
        </div>
    );
};

export default OwnHotels;