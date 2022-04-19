import React from "react"


const One  = React.lazy(()=>import("../views/components/ownerComponents/One"))
const Two  = React.lazy(()=>import("../views/components/ownerComponents/Two"))
const DashboardEmail  = React.lazy(()=>import("../views/components/ownerComponents/DashboardEmail"))

export const ownerDashboardRoutes = [
    {
        path: "one",
        name: "One",
        Component: One,
        roles:["*"]  // everyone can access
    },
    {
        path: "two",
        name: "Two",
        Component: Two, 
        roles:["*"]  // everyone can access
    },
    {
        path: "email",
        name: "Email",
        Component: DashboardEmail, 
        roles:["*"]  // everyone can access
    },
]