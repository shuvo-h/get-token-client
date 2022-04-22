import React from "react";
import HotelsForRooms from "../views/components/ownerComponents/Rooms/HotelsForRooms";

const One  = React.lazy(()=>import("../views/components/ownerComponents/One"))
const Two  = React.lazy(()=>import("../views/components/ownerComponents/Two"))
const Email  = React.lazy(()=>import("../views/components/ownerComponents/Email"))
const DashHome  = React.lazy(()=>import("../views/components/ownerComponents/DashHome"))
const Invoices  = React.lazy(()=>import("../views/components/ownerComponents/Invoices"))
const Media  = React.lazy(()=>import("../views/components/ownerComponents/Media"))
const Total  = React.lazy(()=>import("../views/components/ownerComponents/Total"))
const OwnHotels  = React.lazy(()=>import("../views/components/ownerComponents/hotels/OwnHotels"))
const AddNewHotel  = React.lazy(()=>import("../views/components/ownerComponents/AddNewHotel"))
const AddNewRoom  = React.lazy(()=>import("../views/components/ownerComponents/AddNewRoom"))


export const ownerDashboardRoutes = [
    {path: "one",name: "One",Component: One},
    {path: "two",name: "Two",Component: Two},
    {path: "",name: "Home",Component:DashHome,},
    {path: "email",name: "email",Component:Email,},
    { path: "invoices",name: "invoices",Component:Invoices, },
    {path: "media",name: "media",Component:Media, },
    {path: "total",name: "total",Component:Total, },
    {path: "addHotel",name: "AddNewHotel", Component:AddNewHotel,},
    { path: "hotels",name: "Hotels",Component:OwnHotels, },
    { path: "rooms",name: "Hotels",Component:HotelsForRooms, },
]