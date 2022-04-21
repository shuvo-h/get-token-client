import React from 'react'
// import DashboardHome from '../views/pages/adminDashboard/DashboardHome/DashboardHome'
// import DashboardMail from '../views/pages/adminDashboard/DashboardMail/DashboardMail'

const DashboardHome  = React.lazy(()=>import("../views/pages/adminDashboard/DashboardHome/DashboardHome"))
const DashboardMail  = React.lazy(()=>import("../views/pages/adminDashboard/DashboardMail/DashboardMail"))

export const adminDashboardRoutes = [
    {
        path: 'mail',
        title: 'Mail',
        Componenet: DashboardMail,
        roles: ['*'] // Anyone can access
    },
    {
        path: '',
        title: 'DashboardHome',
        Componenet: DashboardHome,
        roles: ['*'] // Anyone can access
    },
]