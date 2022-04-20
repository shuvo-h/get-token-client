import axios from "axios";
import React, { useEffect, useState } from "react";
import { IHotel } from "../../../../type/adminHotel";

const DashboardHome = () => {
    const [data, setData] = useState<IHotel[]>([])

    useEffect(()=>{
        axios.get('https://fake-hotel-api.herokuapp.com/api/hotels')
        .then((res) => setData(res.data.slice(0,21)));
    },[])
    console.log(data);
    return (
        <div className='ml-10'>
            <p>Hello</p>
            <div className="flex">
                <div className="p-4"></div>
            </div>
        </div>
    );
};

export default DashboardHome;