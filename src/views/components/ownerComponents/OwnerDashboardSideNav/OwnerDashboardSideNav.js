import React from 'react';
import { NavLink } from 'react-router-dom';

const OwnerDashboardSideNav = () => {
    return (
        <div>
            <div className='text-center' >
                <NavLink to="one">child 1</NavLink> |||| 
                <NavLink to="two">child 2</NavLink>
                <NavLink to="email">Email</NavLink>
            </div>
        </div>
    );
};

export default OwnerDashboardSideNav;