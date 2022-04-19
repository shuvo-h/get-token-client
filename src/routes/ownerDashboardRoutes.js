import React from "react"



const One  = React.lazy(()=>import("../views/components/ownerComponents/One"))
const Two  = React.lazy(()=>import("../views/components/ownerComponents/Two"))
const Email  = React.lazy(()=>import("../views/components/ownerComponents/Email"))
const Invoices  = React.lazy(()=>import("../views/components/ownerComponents/Invoices"))
const Media  = React.lazy(()=>import("../views/components/ownerComponents/Media"))
const Total  = React.lazy(()=>import("../views/components/ownerComponents/Total"))

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
        name: "email",
        Component:Email, 
        roles:["*"]  // everyone can access
    },
    {
        path: "invoices",
        name: "invoices",
        Component:Invoices, 
        roles:["*"]  // everyone can access
    },
    {
        path: "media",
        name: "media",
        Component:Media, 
        roles:["*"]  // everyone can access
    },
    {
        path: "total",
        name: "total",
        Component:Total, 
        roles:["*"]  // everyone can access
    },
]