import React from 'react';
import Footer from '../Shared Pages/Footer/Footer';
import HomeSlider from './HomeSlider';
import Products from '../Products/Products';
import HomeProducts from '../Products/HomeProducts/HomeProducts';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            {/* <HomeSlider/> */}
            <HomeProducts/>
            <BusinessSummery/>
            <Reviews/>

            {/* <Footer/> */}
        </div>
    );
};

export default Home;