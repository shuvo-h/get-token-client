import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ownerDashboardRoutes } from '../../../../routes/ownerDashboardRoutes';

const DashboardMain = () => {
    return (
        <Suspense fallback={<>Loading.......</>}>
            <Routes>
                {
                    ownerDashboardRoutes.map((route,id)=>{
                        return(
                            route.Component && <Route path={route.path} element={<route.Component />} key={id}></Route>
                        )
                    })
                }
            </Routes>
        </Suspense>
    );
};

export default DashboardMain;