import React from 'react';
import Piechart from './Piechart';

const One = () => {
    return (
        <div className="">
            <div className='flex-auto'>
                <div className='flex flex-col bg-white'>
                    <div className='flex flex-row'>
                        <h2 className='text-center font-bold text-gray-500'>Welcome to Owner Dashboard</h2>

                        <Piechart></Piechart>
                    </div>
                </div>
            </div>

            <div className='min-h-screen bg-blue-50'>
                 <div className='mt-8'>
                     <div className='flex items-center bg-white'>
                        <div className='text-sm'>Check In Today</div>
                        <div className='flex items-center pt-1' >
                            <div className='text-3xl'>34</div>
                            <div className='text-pink-500'>
                                <svg>

                                </svg>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>


         </div>

        
    );
};

export default One;