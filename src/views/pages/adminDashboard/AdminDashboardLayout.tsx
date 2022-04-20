import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminDashboardMain from '../../components/common/AdminDashboardMain/AdminDashboardMain';
import Sidebar from '../../components/custom/adminComponenets/Sidebar';

const AdminDashboard = () => {
    return (
        <div className='flex'>
            <div>
                <div>
                    <Sidebar/>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <div>
               <AdminDashboardMain/>
            </div>
        </div>
    );
};

export default AdminDashboard;