import React, { useState } from 'react';
// import Pichart2 from './Pichart2';
// import Piechart from './Piechart';
import Piechart from './Piechart';




const One = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Dashboard", src: "Chart_fill" },
      { title: "Inbox", src: "Chat" },
      { title: "Email", src: "User", },
      { title: "Tokens ", src: "Setting" },
      { title: "Media", src: "Setting" },
      { title: "Setting", src: "Setting" },
    ];
  
   return(
    <div className="flex">
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src="../../../assets/images/control.png "
        alt=''
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="../../../assets/images/logo.png"
          alt=''
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src={`../../../assets/images/${Menu.src}.png`} alt="" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
    {/* <div className="h-screen flex-1 p-7">
      <h1 className="text-2xl font-semibold ">Home Page</h1>
    </div> */}

    {/* rest code */}

    <div className=" p-7">
            
            <div className='flex-auto '>
                <div className=' flex flex-col bg-white'>
                    <div className='  flex-row'>
                        <h1 className='text-center font-bold text-gray-500 py-6 '>Welcome to Owner Dashboard</h1>
                        <h1>testing push</h1>
                    </div>
                </div>
            </div>

                     <div className='text-center mb-6 pt-3 rounded bg-gray-200'>
                          
                           <input className='  rounded w-64 text-gray-700 focus:outline-none border-b-4 border-gray-300   px-3 pb-3' type="search"  />
                           <button className=''>Search</button>
                       </div>

                        <div className='flex gap-x-8 '>
                            
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
                        {/* another section */}

                        <div className='flex gap-x-8 mt-5 '>
                            <div className='bg-gray-400' >
                              <h2>Social Sources</h2>
                             
                                <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                                <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                                <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                                <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                              
                            </div>
                            <div className='bg-gray-400'>
                              <h2>Activites</h2>

                              <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                                <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                                <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                                <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                              <button><a>View More</a><a href='/#'/></button>
                            </div>
                            <div className='bg-gray-400'>
                              <h2>Top Cities Hotel</h2>
                              <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                                <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                                <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                                <h2>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</h2>
                            </div>
                         
                        </div>

                        {/* transaction */}
                        <div className='py-5'>
                          <div>
                            <h1 className='font-bold text-gray-700 py-5'>Latest transaction</h1>
                          </div>

                          <div>
                              <div className='flex font-bold text-gray-700 bg-gray-300 gap-x-8' >
                                <h2>Order Id</h2>
                                <h2>Billing Name</h2>
                                <h2>Date</h2>
                                <h2>Total</h2>
                                <h2>Payment Status</h2>
                                <h2>Payment Method</h2>
                                <h2>View Details</h2>
                              </div>
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
   ) 
};

export default One;