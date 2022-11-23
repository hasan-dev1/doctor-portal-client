import React from 'react';
import Appointment from './Appointment/Appointment';
import ContuctUs from './Contuctus/ContuctUs';
import Exceptional from './Exceptional/Exceptional';
import HomeBanner from './HomeBanner';
import HomeCart from './HomeCart/CartItem'
import HomeService from './HomeService/HomeService';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeCart></HomeCart>
            <HomeService></HomeService>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <ContuctUs></ContuctUs>
        </div>
    );
};

export default Home;