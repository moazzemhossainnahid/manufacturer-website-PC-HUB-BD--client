import React from 'react';
import Footer from '../Shared Pages/Footer/Footer';
import HomeProducts from '../Products/HomeProducts/HomeProducts';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';
import WhyUs from './WhyUs';
import WhatWeMake from './WhatWeMake';
import OurTeam from './OurTeam';
import OurPartners from './OurPartners';
import HomeBanner from './HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <HomeProducts/>
            <BusinessSummery/>
            <Reviews/>
            <WhyUs/>
            <OurTeam/>
            <OurPartners/>
            <WhatWeMake/>
            <Footer/>
        </div>
    );
};

export default Home;