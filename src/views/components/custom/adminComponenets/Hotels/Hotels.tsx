import React from 'react';
import { IHotel } from '../../../../../type/adminHotel';

const Hotels = ({hotel} : {hotel:IHotel}) => {
    return (
        <div className="border border-gray-100 shadow rounded-lg px-2 py-5 flex justify-between my-6">
            <h4 className="text-lg font-light">{hotel.name.toUpperCase()}</h4>
        </div>
    );
};

export default Hotels;