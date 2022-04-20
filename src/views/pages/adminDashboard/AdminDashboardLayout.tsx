import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AdminDashboardMain from '../../components/common/AdminDashboardMain/AdminDashboardMain';

import Sidebar from '../../components/custom/adminComponenets/Sidebar';

const AdminDashboardLayout = () => {
    return (
        <div style={{display:"flex"}}>
            <div style={{display:"flex"}}>
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

export default AdminDashboardLayout;
