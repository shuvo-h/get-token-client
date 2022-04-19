import React from 'react';

const HotelExploreBar = () => {
    return (
        <div className='bg-cyan-200 grid grid-cols-6 mb-4 py-3 text-center'>
            <div><input className='px-1 rounded' type="text" placeholder='type the hotel name' /></div>
            <div>
                <select className='rounded px-1' name="" defaultValue={"Short by Country"}>
                    <option value="Short by Country" disabled>Short by Country</option>
                    <option value="all">All Countries</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Nepal">Nepal</option>
                </select>
            </div>
            <div>
                <select className='rounded px-1' name="" defaultValue={"Short by Cities"}>
                    <option value="Short by Cities" disabled>Short by Cities</option>
                    <option value="all">All Cities</option>
                    <option value="Bangladesh">Dhaka</option>
                    <option value="India">Delhi</option>
                    <option value="Nepal">Kathmundu</option>
                </select>
            </div>
            <div>
                <select className='rounded px-1' name="" defaultValue={"Short by Category"}>
                    <option value="Short by Category" disabled>Short by Category</option>
                    <option value="all">Default Price</option>
                    <option value="Bangladesh">Low to high</option>
                    <option value="India">High to Low</option>
                </select>
            </div>
            <div>
                <select className='rounded px-1' name="" defaultValue={"Short by Category"}>
                    <option value="Short by Category" disabled>Short by Category</option>
                    <option value="all">All Hotels</option>
                    <option value="Bangladesh">1 start</option>
                    <option value="India">2 star</option>
                </select>
            </div>
            <div>
                <select className='rounded px-1' name="" defaultValue={"Short by Status"}>
                    <option value="Short by Status" disabled>Short by Status</option>
                    <option value="all">All</option>
                    <option value="Bangladesh">1 start</option>
                    <option value="India">2 star</option>
                </select>
            </div>
        </div>
    );
};

export default HotelExploreBar;