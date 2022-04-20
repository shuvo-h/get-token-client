import React from 'react';
import Footer from '../../common/footer/Footer';
import Header from '../../common/header/Header';
import Banner from '../banner/Banner';
import InspirationTrip from '../inspriationTrip/InspirationTrip';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner />
            <InspirationTrip />
            <Footer></Footer>
        </div>
    );
};

export default Home;