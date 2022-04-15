import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/slices/authSlice';

const useAuthAccess = () => {

    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(fetchUser())
    },[])

    return null;
};

export default useAuthAccess;