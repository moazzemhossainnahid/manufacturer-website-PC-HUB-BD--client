import React from 'react';



import image1 from '../../images/products/Computer-Motherboard.png';
import image2 from '../../images/products/Graphic-Card.png';
import image3 from '../../images/products/keyboard.png';
import image4 from '../../images/products/monitor.png';
import image5 from '../../images/products/pc case.png';
import image6 from '../../images/products/psu.png';
import image7 from '../../images/products/RAM.png';
import image8 from '../../images/products/DVD.png';
import image9 from '../../images/products/CMOS.png';
import image10 from '../../images/products/Computer-Cooling-Fan.png';
import image11 from '../../images/products/computer_mouse.png';
import image12 from '../../images/products/SSD.png';
import image13 from '../../images/products/SATA-Hard-Disk-Drive.png';
import image14 from '../../images/products/UPS-PNG.png';
const WhatWeMake = () => {
    return (
        <div>
            <div className="bg-gray-50 py-20 flex flex-col items-center justify-center">
            <div className="xl:w-1/2 w-11/12">
                <h1 tabIndex={0} className="text-3xl lg:text-6xl font-bold leading-0 text-center text-gray-800">
                    What We <span className="text-accent">Actually Make</span>
                </h1>
                <h2 role="contentinfo" tabIndex={0} className="text-base leading-normal text-center text-gray-600 mt-5">
                    we make all parts of need to build a personal computer. like HDD, Mouse, SSD, Chipset, Processor, RAM, ROM etc.
                </h2> 
            </div>
            <div className="2xl:px-20 lg:px-12 px-4 flex flex-wrap items-start justify-center mt-4">
                <div className="mt-24">
                    <div className="flex items-end ">
                        <img tabIndex={0} src={image1} alt="girl with blue background" className="w-20 h-20 object-cover rounded-lg mr-6" />
                        <img tabIndex={0} src={image2} alt="guy winking" className="w-48 h-36 object-cover rounded-lg" />
                    </div>
                    <div className="flex items-center justify-end my-6">
                        <img className="object-cover w-96" tabIndex={0} src={image3} alt="guy smiling" />
                    </div>
                    <div className="flex items-start">
                        <img tabIndex={0} src={image4} alt="girl with bluw background" className="w-48 h-48 rounded-lg" />
                        <img tabIndex={0} src={image7} alt="guy with glasses" className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit" />
                    </div>
                </div>
                <div className="ml-6 mt-32">
                    <img tabIndex={0} src={image5} className="w-72 h-80 rounded-lg" alt="guy with sunglasses" />
                    <div className="flex items-start mt-6">
                        <img tabIndex={0} src={image6} alt="girl  laughing" className="w-48 h-48 rounded-lg" />
                        <img tabIndex={0} src={image8} alt="guy with glasses" className="w-20 h-20 rounded-lg ml-6 object-cover object-fit" />
                    </div>
                </div>
                <div className="mt-14 ml-6">
                    <div className="lg:flex ">
                        <div>
                            <img tabIndex={0} src={image9} alt="group of friends" className="w-96 h-72 rounded-lg object-center object-fit" />
                        </div>
                        <div>
                            <div className="flex ml-6">
                                <img tabIndex={0} src={image10} className="w-20 h-20 rounded-lg mt-14" alt="man" />
                                <img tabIndex={0} src={image11} className="w-20 h-24 rounded-lg ml-6" alt="woman" />
                            </div>
                            <img tabIndex={0} src={image13} alt="boy with blonde hair" className="ml-6 mt-6 w-48 h-32 rounded-lg" />
                        </div>
                    </div>
                    <div className="mt-6 flex">
                        <img tabIndex={0} className="w-48 h-48 block rounded-lg" src={image12} alt="young girl with red hair" />
                    </div>
                    <div className="mt-6 flex">
                        <img tabIndex={0} className="w-96 h-56 block rounded-lg ml-6" src={image14} alt="young girl with red hair" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default WhatWeMake;