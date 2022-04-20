import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { allRoutes } from '../../../../routes/routes';
import AdminGuard from '../../../components/AuthGuard/AdminGuard';
import OwnerGuard from '../../../components/AuthGuard/OwnerGuard';

const Main = () => {
    return (
        <div>
            <Suspense fallback={<>Loading......</>}>
                <Routes>
                    {
                        allRoutes.map((route,index)=>{
                            if (route.name === "Owner Dashboard") {
                                
                                return (
                                    route.Component && <Route path={route.path} element={<OwnerGuard><route.Component/></OwnerGuard>} key={index}></Route>
                                )
                            }else if (route.name === "Admin Dashboard") {
                                return (
                                    route.Component && <Route path={route.path} element={<AdminGuard><route.Component/></AdminGuard>} key={index}></Route>
                                )
                                
                            }else{
                                return (
                                    route.Component && <Route path={route.path} element={<route.Component/>} key={index}></Route>
                                )
                            }
                        })
                    }
                </Routes>
            </Suspense>
        </div>
    );
};

export default Main;