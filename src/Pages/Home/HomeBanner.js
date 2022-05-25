import React from 'react';
import { useNavigate } from 'react-router-dom';

import image1 from '../../../src/images/pc.png';
import image2 from '../../../src/images/ssd.png';
const HomeBanner = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-rose-100'>
            <div className="sm:mx-auto sm:container px-6 xl:px-0">
            <div className="flex items-center justify-between md:flex-row flex-col py-12 space-y-6 md:space-y-0 w-full">
                <div className="hidden md:block">
                    <img className="hidden xl:block w-52 object-cover" src={image1} alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                    <img className="xl:hidden w-52 object-cover" src={image2} alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
                </div>
                <div className="flex justify-center items-center flex-col xl:w-2/5 md:px-6 sm:w-3/4 md:w-2/4">
                    <div className="">
                        <h1 className="xl:text-4xl text-3xl font-semibold leading-9 text-gray-800">Act before it’s too late!</h1>
                    </div>
                    <div className="mt-4">
                        <p className="xl:text-xl text-base leading-7 text-center text-gray-600">Explore Our Company Top sell Product. and Get Order if You Want.</p>
                    </div>
                    <div className="mt-8 flex justify-center items-center w-full">
                        <button onClick={() => navigate('/products')} className="hover:opacity-75 flex justify-center bg-gray-800 sm:w-32 w-full h-10 py-3">
                            <p className="text-base font-medium leading-none text-white">Explore More</p>
                        </button>
                    </div>
                </div>
                <div className="flex md:w-auto w-full justify-center flex-row space-x-4 md:space-x-0">
                    <div className="w-full">
                        <img className="hidden xl:block w-52 object-cover" src={image2} alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                        <img className="xl:hidden w-52 object-cover" src={image1} alt="sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1" />
                    </div>
                    <div className="md:hidden w-full">
                        <img className="hidden xl:block w-52 object-cover" src={image1} alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                        <img className="xl:hidden w-52 object-cover" src={image2} alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HomeBanner;