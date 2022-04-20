import React, { Suspense } from 'react';
import {  Route, Routes } from 'react-router-dom';
import { adminRoutes } from '../../../../routes/adminDashboardRoutes';

const AdminDashboardMain = () => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <Routes>
                {
                    adminRoutes.map((route,index)=>{
                        console.log(route.Componenet);
                        return (
                            route.Componenet && <Route path={route.path} element={<route.Componenet/>} key={index} />
                        )
                    })
                }
            </Routes>
        </Suspense>
    );
};

export default AdminDashboardMain;