import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import useAuthAccess from '../../../hooks/useAuthAccess';
import { setUserInfo } from '../../../redux/slices/authSlice';
import { RootState } from '../../../redux/store/store';
import AuthService from '../../../services/Auth.service';

type OwnerGuardPropType = {
    children: JSX.Element,

}

const OwnerGuard = ({children,...rest}:OwnerGuardPropType )=> {
    const user = useSelector((state:RootState)=>state.user);
    const location = useLocation();
    // useAuthAccess()
    
    if (user.status === "pending") {
        return (
            <div>
                Loading...........
            </div>
        )
    }

    if (user.status === "success" && !user.user?.email) {
        return    <Navigate to="/login" state={{from:location}}></Navigate>
    }

    if (user.user?.email && user.user?.role === "owner") {
        return children;
    }
    
    return    <h1>You are unauthorized!</h1>
};

export default OwnerGuard;