import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-section bg-black '>
            <div className="banner-content bg-red-500 rounded lg:mt-7 mb-5">
                <div className='banner-text'>
                    <h2 className=''>Help house 100,000 refugees fleeing Ukraine</h2>
                </div>
                <button>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;