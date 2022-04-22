import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../../../../redux/slices/ownerHotelSlice';
import { RootState } from '../../../../redux/store/store';
import AddNewRoom from '../AddNewRoom';

const HotelsForRooms = () => {
    const dispatch = useDispatch()

    const user = useSelector((state:RootState)=>state.user);
    const hotelsStore = useSelector((state:RootState)=>state.hotels)
    useEffect(()=>{
        if (user.user?.email) {
            dispatch(fetchHotels({owner_email : user.user?.email}))
        }
    },[user.user?.email])

    return (
        <div>
            HotelsForRooms
            <AddNewRoom></AddNewRoom>
        </div>
    );
};

export default HotelsForRooms;