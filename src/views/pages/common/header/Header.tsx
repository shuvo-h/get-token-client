import React from 'react';
import BookingForm from '../../../components/common/BookingForm';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className='pb-10' id='header'>
            <Navbar />
            {/* booking form  */}
            <div className='container mx-auto my-5 text-white'>
                <h2 className='text-2xl font-bold text-center my-5'>PLease Set your Destination</h2>
                <div className="form_container">
                    <BookingForm />
                </div>
            </div>
        </div>
    );
};

export default Header;