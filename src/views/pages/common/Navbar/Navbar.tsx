import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar_wrap flex justify-between items-center border-2">
                <div>
                    <h1 className="text-2xl font-bold">Get-Tokens</h1>
                </div>
                <div className="flex justify-between items-center font-semibold text-lg">
                    <li className="list-none mx-2 cursor-pointer">
                        Place to Visit
                    </li>
                    <li className="list-none mx-2 cursor-pointer">
                        Feedback
                    </li>
                </div>
                <div className="profile cursor-pointer">
                    <div className="flex justify-between items-center text-xl bg-black text-white py-2 px-5 rounded-xl relative ">
                        <FaUserCircle className="inline-block" />
                        <span className="ml-5">Name</span>
                    </div>
                    <div className="userMenu absolute top-12 right-20">
                        <div className="bg-white rounded-xl drop-shadow-lg w-48 ">
                            <div className='flex flex-col justify-items-start gap-y-4 py-5 px-2 font-medium text-lg  '>
                                <li className="list-none">Profile</li>
                                <hr />  
                                <li className="list-none">Register</li>
                                <li className="list-none">Login</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
