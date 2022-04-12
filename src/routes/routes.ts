import React from "react"

const Home = React.lazy(()=>import("../views/pages/homePages/home/Home"))
const Login  = React.lazy(()=>import("../views/pages/login/Login"))
const Registration  = React.lazy(()=>import("../views/pages/registration/Registration"))

export const allRoutes = [
    {
        path: "/",
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
]