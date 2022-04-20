import React, { Suspense } from 'react';
import {  Route, Routes } from 'react-router-dom';
import { adminDashboardRoutes } from '../../../../routes/adminDashboardRoutes';
import AdminGuard from '../../AuthGuard/AdminGuard';

const AdminDashboardMain = () => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                {
                    adminDashboardRoutes.map((route,index)=>{
                        return (
                            route.Componenet && <Route path={route.path} element={<AdminGuard><route.Componenet/></AdminGuard>} key={index} ></Route>
                        )
                    })
                }
            </Routes>
        </Suspense>
    );
};

export default AdminDashboardMain;