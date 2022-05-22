import React from 'react';
import Footer from '../Shared Pages/Footer/Footer';
import HomeSlider from './HomeSlider';
import HomeProducts from '../Products/HomeProducts/HomeProducts';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';
import WhyUs from './WhyUs';
import WhatWeMake from './WhatWeMake';

const Home = () => {
    return (
        <div>
            {/* <HomeSlider/> */}
            <HomeProducts/>
            <BusinessSummery/>
            <Reviews/>
            <WhyUs/>
            <WhatWeMake/>
            <Footer/>
        </div>
    );
};

export default Home;