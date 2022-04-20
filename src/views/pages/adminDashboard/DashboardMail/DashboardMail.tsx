import React from 'react';

const DashboardMail = () => {
    return (
        <div className='ml-10'>
            <h1 className='text-4xl p-4'>Mail someone</h1>
            <form action="">
                <input type="email" id='email' />
                <label htmlFor="email">Enter hotel owner's email here: </label>
            </form>
        </div>
    );
};

export default DashboardMail;