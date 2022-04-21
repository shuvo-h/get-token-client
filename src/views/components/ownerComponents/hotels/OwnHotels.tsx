import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/store';
import HotelService from '../../../../services/hotelPublicService/hotel.services';
import { addNewHotelType } from '../../../../type/hotelType';
import { getOwnerHotelType } from '../../../../type/ownerTypes';
import EditOwnerHotel from './EditOwnerHotel';



const OwnHotels = () => {
    const [ownerHotels,setOwnerHotels] = useState<getOwnerHotelType[]>([]);
    const [openEditOwnerModal,setOpenEditOwnerModal] = useState<string|null>(null);

    const user = useSelector((state:RootState)=>state.user);
    useEffect(()=>{
        if (user.user?.email) {
            HotelService.getOwnerAllHotel({owner_email : user.user?.email})
            .then(data=>{
                setOwnerHotels(data.hotels)
            })
        }
    },[user.user?.email])

    const handleDeleteHotel = (hotelID: string) =>{
        const confirm = window.confirm(`Do you want to delete the hotel?`)
        if (hotelID && confirm) {
            HotelService.deleteOwnerSingleHotel(hotelID)
            .then(data=>{
                if (data.success && data.result.deletedCount > 0) {
                    const restHotels = ownerHotels.filter(hotel=> hotel.hotel_id !== hotelID)
                    setOwnerHotels(restHotels)
                    alert("deleted confirmed")
                }
            })
        }
        
    }

    return (
        <div>
            OwnHotels
            {
                ownerHotels?.map(hotel=><div>
                    <div  className='grid grid-cols-8 border my-2' key={hotel.hotel_id}>
                        <div>{hotel.hotelName}</div>
                        <div>{hotel.contact_email}</div>
                        <div>{hotel.contact_phone}</div>
                        <div>{hotel.room.total}</div>
                        <div>{hotel.room.booked}</div>
                        <div>{hotel.room.available}</div>
                        <button className='bg-sky-100' onClick={()=>setOpenEditOwnerModal(hotel.hotel_id)}>edit</button>
                        <button className='bg-pink-400' onClick={()=>handleDeleteHotel(hotel.hotel_id)}>delete</button>
                    </div>
                    {
                        openEditOwnerModal === hotel.hotel_id && <EditOwnerHotel hotel={hotel}></EditOwnerHotel>
                        
                    }
                </div>)
            }
        </div>
    );
};

export default OwnHotels;