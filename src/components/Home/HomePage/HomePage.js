import React from 'react';
import Apartment from '../Aparments/Apartment';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NavBar from '../Nav/NavBar';
import Service from '../Service/Service';

const HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Apartment></Apartment>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;