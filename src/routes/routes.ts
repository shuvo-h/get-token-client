import React from "react"

const Home = React.lazy(()=>import("../views/pages/homePages/home/Home"))

export const allRoutes = [
    {
        path: "/",
        name: "Home",
        Component: Home,
        roles:["*"]  // everyone can access
    },
]