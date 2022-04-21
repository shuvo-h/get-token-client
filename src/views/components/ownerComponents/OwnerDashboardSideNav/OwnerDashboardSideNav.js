import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import arrow from '../../../../assets/images/arrow.jpg';
import logo from '../../../../assets/images/logo.png';
import x from '../../../../assets/images/Setting.png';
import { setUserInfo } from '../../../../redux/slices/authSlice';
import AuthService from '../../../../services/Auth.service';

const OwnerDashboardSideNav = () => {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const Menus = [
        { title: "Dashboard", src: "" },
        { title: "Email", src: "email" },
        { title: "Invoices", src: "invoices", },
        { title: "Media ", src: "media" },
        { title: "Hotels", src: "hotels" },
        { title: "Add Hotel", src: "addHotel" },
        { title: "Rooms", src: "rooms" },
      ];

      // logout the user 
      const handleLogout = async() =>{
        try {
            const result =  await AuthService.logoutUser();
            if (result.user == null) {
                dispatch(setUserInfo({user: result.user,status: 'success',error:null}))
                navigate("/login")
            }
        } catch (err) {
            console.log(err);
            dispatch(setUserInfo({user:null,status: 'error',error:"Something went wrong!"}))
        }
    }

    return (
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
              <img src={x}  />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                <NavLink to={`${Menu.src}`}>{Menu.title}</NavLink>
              </span>
            </li>
          ))}
          <li><button className='bg-sky-400' onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>

      {/* new added */}
      
    </div>
    );
};

export default OwnerDashboardSideNav;