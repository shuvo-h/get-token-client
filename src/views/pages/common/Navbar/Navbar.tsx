import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div className="navbar_wrap">
                <div>
                    <h1>Get-Tokens</h1>
                </div>
                <div>
                    <li>Place to Visit</li>
                    <li >About</li>
                </div>
                <div className="profile">
                    <FaUserCircle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
