import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faDesktopAlt, faThumbsUp, faMale } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import image from '../../images/bg-5.jpg';
const BusinessSummery = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl py-5  uppercase text-secondary">Millions of People <span className="border-b-2 border-primary text-accent">Trust Us</span></h2>
            <h3 className="text-xl text-natural uppercase font-semibold">We Try to Understand Users Expectation</h3>

            <div style={{backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover", padding: "20px"}} className="py-10 my-10 w-full h-fit">
                <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center mx-auto">
                <div className="">
                    <FontAwesomeIcon className='text-accent' size='3x' icon={faFlag}/>
                    <div className="py-5 text-5xl font-bold text-natural"><CountUp className='text-5xl font-bold text-natural' end={65} /></div>
                    <h2 className="text-2xl font-bold text-primary">Countries</h2>
                </div>
                <div className="">
                    <FontAwesomeIcon className='text-accent' size='3x' icon={faDesktopAlt}/>
                    <div className="py-5 text-5xl font-bold text-natural"><CountUp className='text-5xl font-bold text-natural' end={197} />+</div>
                    <h2 className="text-2xl font-bold text-primary">Manufacture Products</h2>
                </div>
                <div className="">
                    <FontAwesomeIcon className='text-accent' size='3x' icon={faMale}/>
                    <div className="py-5 text-5xl font-bold text-natural"><CountUp className='text-5xl font-bold text-natural' end={525} />+</div>
                    <h2 className="text-2xl font-bold text-primary">Happy Clients</h2>
                </div>
                <div className="">
                    <FontAwesomeIcon className='text-accent' size='3x' icon={faThumbsUp}/>
                    <div className="py-5 text-5xl font-bold text-natural"><CountUp className='text-5xl font-bold text-natural' end={480} />+</div>
                    <h2 className="text-2xl font-bold text-primary">Feedbacks</h2>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;