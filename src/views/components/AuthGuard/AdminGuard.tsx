import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import useAuthAccess from '../../../hooks/useAuthAccess';
import { RootState } from '../../../redux/store/store';

type OwnerGuardPropType = {
    children: JSX.Element,

}

const AdminGuard = ({children,...rest}:OwnerGuardPropType )=> {
    const user = useSelector((state:RootState)=>state.user);
    const location = useLocation();
    useAuthAccess()

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

    if (user.user?.email && user.user?.role === "admin") {
        return children;
    }

    return    <h1>You are unauthorized!</h1>
};

export default AdminGuard;