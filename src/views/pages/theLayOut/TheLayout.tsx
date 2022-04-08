import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import Main from '../common/main/Main';
import Home from '../homePages/home/Home';
import Login from '../login/Login';
import Registration from '../registration/Registration';


const TheLayout = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                < Login />
            </div>
            <div>
                < Registration />
            </div>
            <div>
                <Home />
            </div>
            <div>
                <Main></Main>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default TheLayout;