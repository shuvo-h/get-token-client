import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { allRoutes } from '../../../../routes/routes';

const Main = () => {
    return (
        <div>
            <Suspense fallback={<>Loading......</>}>
                <Routes>
                    {
                        allRoutes.map((route,index)=>{
                            return (
                                route.Component && <Route path={route.path} element={<route.Component/>} key={index}></Route>
                            )
                        })
                    }
                </Routes>
            </Suspense>
        </div>
    );
};

export default Main;