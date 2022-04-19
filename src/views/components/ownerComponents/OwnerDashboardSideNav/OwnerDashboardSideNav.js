import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../../../assets/images/arrow.jpg';
import logo from '../../../../assets/images/logo.png';
import x from '../../../../assets/images/Setting.png';

import Piechart from '../Piechart';

const OwnerDashboardSideNav = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Email", src: "email" },
        { title: "Invoices", src: "invoices", },
        { title: "Media ", src: "media" },
        { title: "Hotels", src: "hotels" },
    
        
      ];
    return (

        // <div>
        //     <div className='text-center' >
        //         <NavLink to="one">child 1</NavLink> |||| <NavLink to="two">child 2</NavLink>
        //     </div>
        // </div>
        <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={arrow}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
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
              {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
              <img src={x} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
               
                <NavLink to={`${Menu.src}`}>{Menu.title}</NavLink>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
    );
};

export default OwnerDashboardSideNav;