import React from 'react'

const Home = React.lazy(() => import('../views/pages/adminDashboard/DashboardHome/DashboardHome'))
const Mail = React.lazy(() => import('../views/pages/adminDashboard/DashboardMail/DashboardMail'))
const About = React.lazy(() => import('../views/pages/adminDashboard/DashboardHome/DashboardHome'))

export const adminRoutes = [
    {
        path: '/',
        title: 'Home',
        Componenet: Home,
        roles: ['*'] // Anyone can access
    },
    {
        path: '/mail',
        title: 'Mail',
        Component: About,
        roles: ['*'] // Anyone can access
    }
]