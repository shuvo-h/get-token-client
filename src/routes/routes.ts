import React from "react"
import TestHotelInfoUpload from "../views/pages/login/TestHotelInfoAdd"

const Home = React.lazy(()=>import("../views/pages/homePages/home/Home"))
const Login  = React.lazy(()=>import("../views/pages/login/Login"))
const Registration  = React.lazy(()=>import("../views/pages/registration/Registration"))
const AdminDashboard = React.lazy(()=>import("../views/pages/adminDashboard/AdminDashboardLayout"))
const OwnerDashboardLayout = React.lazy(()=>import("../views/pages/ownerDashboard/OwnerDashboardLayout"))
const AllHotels = React.lazy(()=>import("../views/pages/allHotels/AllHotels"))
const SIngleHotel = React.lazy(()=>import("../views/pages/allHotels/SIngleHotel"))
const HotelRooms = React.lazy(()=>import("../views/pages/allHotels/HotelRooms/HotelRooms"))
const ContactUS = React.lazy(()=>import("../views/pages/ContactUS/ContactUS"))

export const allRoutes = [
    {
        path: "/",
        name: "Home",
        Component: Home,
        roles:["*"]  // everyone can access
    },
    {
        path: "/home",
        name: "Home",
        Component: Home,
        roles:["*"]  // everyone can access
    },
    {
        path: "/login",
        name: "Login",
        Component: Login,
        roles:["*"]  // everyone can access
    },
    {
        path: "/registration",
        name: "Registration",
        Component: Registration,
        roles:["*"]  // everyone can access
    },
    {
        path: "/hotels",
        name: "Hotels",
        Component: AllHotels,
        roles:["*"]  // everyone can access
    },
    {
        path: `/hotels/hotel/:hotel_id`,
        name: "SIngleHotel",
        Component: SIngleHotel,
        roles:["*"]  // everyone can access
    },
    {
        path: `/hotels/hotel/:hotelId/rooms/:roomType`,
        name: "HotelRooms",
        Component: HotelRooms,
        roles:["*"]  // everyone can access
    },
    {
        path: `contact-us`,
        name: "Contact Us",
        Component: ContactUS,
        roles:["*"]  // everyone can access
    },
    {
        path: "/testhotelupload",
        name: "test API",
        Component: TestHotelInfoUpload,
        roles:["*"]  // everyone can access
    },
    {
        path: "/dashboard/owner/*",
        name: "Owner Dashboard",
        Component: OwnerDashboardLayout,
        roles:["*"]  // everyone can access
    },
    {
        path: "/dashboard/admin/*",
        name: "Admin Dashboard",
        Component: AdminDashboard,
        roles: ["*"] // everyone can access
    }
]