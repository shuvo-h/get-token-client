import React, { useState } from 'react';
// import Pichart2 from './Pichart2';
// import Piechart from './Piechart';
import arrow from '../../../assets/images/arrow.jpg';
import Piechart from './Piechart';




const One = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        {title:"Dashboard", src:""},
        {title:"Email", src:""},
        {title:"Invoices", src:""},
        {title:"Total", src:""},
        {title:"Media", src:""},
        {title:"Setting", src:""},
    ]
    return (
     <div className='flex'>
         <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-gray-800 relative`} >
         <img src={arrow} alt="" className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple  ${!open && "rotate-180"}`} 
           onClick={() => setOpen(!open)}
         />
         <div className='flex gap-x-4 items center' >
             < img src='' className='cursor-pointer duration-500' />
             <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`} >Dashboard</h1>
         </div>
              <ul className='pt-6' >
                 {Menus.map((menu, index) => (
                    <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2" } `} >
                      < img src='' /> 
                      <span>{menu.title}</span>  
                        
                        </li> 
                 ))} 
              </ul> 

         </div>
         <div className='p-7 text-2xl font-semibold flex-1 h-screen' >
             <h1>Home Page</h1>

             <div className="">
            
            <div className='flex-auto '>
                <div className=' flex flex-col bg-white'>
                    <div className='  flex-row'>
                        <h1 className='text-center font-bold text-gray-500 py-6 '>Welcome to Owner Dashboard again</h1>
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
                        
                     </div>
                 </div>
            </div>

         </div>
         </div>
     </div>
    );
};

export default One;