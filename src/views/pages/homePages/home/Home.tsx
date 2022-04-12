import React from 'react';
import Header from '../../common/header/Header';
import Banner from '../banner/Banner';
import InspirationTrip from '../inspriationTrip/InspirationTrip';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner />
            <InspirationTrip />
        </div>
    );
};

export default Home;