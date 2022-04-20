import React from "react";

const One  = React.lazy(()=>import("../views/components/ownerComponents/One"))
const Two  = React.lazy(()=>import("../views/components/ownerComponents/Two"))
const Email  = React.lazy(()=>import("../views/components/ownerComponents/Email"))
const Invoices  = React.lazy(()=>import("../views/components/ownerComponents/Invoices"))
const Media  = React.lazy(()=>import("../views/components/ownerComponents/Media"))
const Total  = React.lazy(()=>import("../views/components/ownerComponents/Total"))
const OwnHotels  = React.lazy(()=>import("../views/components/ownerComponents/hotels/OwnHotels"))
const AddNewHotel  = React.lazy(()=>import("../views/components/ownerComponents/AddNewHotel"))


export const ownerDashboardRoutes = [
    {path: "one",name: "One",Component: One},
    {path: "two",name: "Two",Component: Two},
    {path: "email",name: "email",Component:Email,},
    { path: "invoices",name: "invoices",Component:Invoices, },
    {path: "media",name: "media",Component:Media, },
    {path: "total",name: "total",Component:Total, },
    {path: "addHotel",name: "AddNewHotel", Component:AddNewHotel,},
    { path: "hotels",name: "Hotels",Component:OwnHotels, },
]