import axios from "axios";
import React, { useEffect, useState } from "react";
import { IHotel } from "../../../../type/adminHotel";
import Hotels from "../../../components/custom/adminComponenets/Hotels/Hotels";

const DashboardHome = () => {
    const [data, setData] = useState<IHotel[]>([])

    useEffect(()=>{
        axios.get('https://fake-hotel-api.herokuapp.com/api/hotels')
        .then((res) => setData(res.data.slice(0,20)));
    },[])
    console.log(data);
    return (
        <div className='ml-3'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 ml-4 gap-3 mr-2">
                <div className="p-4 border-solid border-2 border-cyan-400 rounded bg-cyan-200 text-gray-600">
                    <h1 className="text-2xl">Total Hotel {data.length}</h1>
                    <p className="text-sm mt-3">
                        We have total {data.length} hotel registered in our website.
                    </p>
                </div>
                <div className="p-4 border-solid border-2 border-cyan-400 rounded bg-cyan-200 text-gray-600">
                    <h1 className="text-2xl">Total Hotel {data.length}</h1>
                    <p className="text-sm mt-3">
                        We have total {data.length} hotel registered in our website.
                    </p>
                </div>
                <div className="p-4 border-solid border-2 border-cyan-400 rounded bg-cyan-200 text-gray-600">
                    <h1 className="text-2xl">Total Hotel {data.length}</h1>
                    <p className="text-sm mt-3">
                        We have total {data.length} hotel registered in our website.
                    </p>
                </div>
            </div>
            <div className="mt-3">
                {
                    data.map((hotel, index) => {
                       return <Hotels hotel={hotel} key={index}/>
                    })
                }
            </div>
        </div>
    );
};

export default DashboardHome;