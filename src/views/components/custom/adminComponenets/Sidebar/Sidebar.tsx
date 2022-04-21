import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "https://i.ibb.co/BK79vgr/bar-chart.png", to:"" },
    { title: "Mail", src: "https://i.ibb.co/R4SSyhV/mailed.png", to:'mail' },
    { title: "Experiences", src: "https://i.ibb.co/jZgg6bV/experience.png", to:'experience' },
    { title: "Home", src: "https://i.ibb.co/Jd0SKfC/home.png", gap: true, to:'/' },
  ];
    return (
        <div className='sticky top-0'>
            <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300 z-10`}
      >
        <img
          alt='Controller'
          src="https://i.ibb.co/ThpS7tH/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            alt='Logo'
            src="https://i.ibb.co/85rjsZt/dashboard.png"
            width="24px"
            className={`cursor-pointer duration-500 ${
              open && "rotate-90"
            }`}
          />
          <h1
            className={`text-white origin-left font-light text-lg duration-200 ${
              !open && "scale-0"
            }`}
          >
            Get-token
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <NavLink
              to={Menu.to}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} `}
            >
              <img alt='Menu logo' src={`${Menu.src}`} width="23px" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </NavLink>
          ))}
          <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">
              <img alt='Menu logo' src="https://i.ibb.co/Gvc0rNF/shutdown.png" width="23px" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                  Logout
              </span>
          </div>
        </ul>
      </div>
        </div>
    );
};

export default Sidebar;