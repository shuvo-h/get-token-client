import React from 'react';
// import Pichart2 from './Pichart2';
import Piechart from './Piechart';
import Reservation from './Reservation';



const One = () => {
    return (
        <div className="">
            
            <div className='flex-auto '>
                <div className=' flex flex-col bg-white'>
                    <div className='  flex-row'>
                        <h1 className='text-center font-bold text-gray-500 py-6 '>Welcome to Owner Dashboard</h1>
                    </div>
                </div>
            </div>

                     <div className='text-center mb-6 pt-3 rounded bg-gray-200'>
                          
                           <input className='  rounded w-64 text-gray-700 focus:outline-none border-b-4 border-gray-300   px-3 pb-3' type="search"  />
                           <button className=' ' >Search</button>
                       </div>

                        <div className=' text-center  mx-32 flex gap-x-8 '>
                            
                            <div className=' text-center rounded w-64 h-32 bg-gray-500 pt-6'>
                                <h2>Total Profit</h2>
                                <h2>$2455</h2>
                                <h5>Compared To Last month</h5>

                            </div>
                            <div className=' text-center rounded w-64 bg-gray-500 pt-6'>
                                <h2>Total Cost</h2>
                                <h2>$2455</h2>
                                <h5>Compared To Last month</h5>

                            </div>
                            <div className=' text-center rounded w-64 bg-gray-500 pt-6'>
                                <h2>Total Revenue</h2>
                                <h2>$2455</h2>
                                <h5>Compared To Last month</h5>

                            </div>
                            <div className=' text-center rounded w-64 bg-gray-500 pt-6'>
                                <h2>Others</h2>
                                <h2>$2455</h2>
                                <h5>Compared To Last month</h5>

                            </div>
                        </div>

            <div className=' '>
                 <div className='mt-8'>
                     <div className='flex items-center bg-white'>
                        <div className=''><Piechart></Piechart></div>
                        <div className=''><Piechart></Piechart></div>
                        <div className=''><Piechart></Piechart></div>
                        {/* <div className=''><Pichart2></Pichart2></div> */}
                     </div>
                 </div>
            </div>

            <div>
                <div>
                    <Reservation></Reservation>
                </div>
            </div>

         </div>

        
    );
};

export default One;