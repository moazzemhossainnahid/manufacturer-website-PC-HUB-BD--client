import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faDesktopAlt, faThumbsUp, faMale } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import image from '../../images/bg-5.jpg';

import icon1 from '../../images/icons/cliennts.png';
import icon2 from '../../images/icons/projects.png';
import icon3 from '../../images/icons/flag.png';
import icon4 from '../../images/icons/rating.png';

const BusinessSummery = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl py-5  uppercase text-secondary">Millions of People <span className="border-b-2 border-primary text-accent">Trust Us</span></h2>
            <h3 className="text-xl text-natural uppercase font-semibold">We Try to Understand Users Expectation</h3>

            <div style={{backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover", padding: "20px"}} className="py-10 my-10 w-full h-fit">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 justify-center items-center mx-auto">
                <div className="">
                    <img className='w-32 object-cover mx-auto' src={icon3} alt="" />
                    <div className="py-5 text-5xl font-bold text-natural"><CountUp className='text-5xl font-bold text-natural' end={65} /></div>
                    <h2 className="text-2xl font-bold text-primary">Countries</h2>
                </div>
                <div className="">
                <img className='w-32 object-cover mx-auto' src={icon2} alt="" />
                    <div className="py-5 text-5xl font-bold text-natural"><CountUp className='text-5xl font-bold text-natural' end={197} />+</div>
                    <h2 className="text-2xl font-bold text-primary">Manufacture Products</h2>
                </div>
                <div className="">
                <img className='w-32 object-cover mx-auto' src={icon1} alt="" />
                    <div className="py-5 text-5xl font-bold text-natural"><CountUp className='text-5xl font-bold text-natural' end={525} />+</div>
                    <h2 className="text-2xl font-bold text-primary">Happy Clients</h2>
                </div>
                <div className="">
                <img className='w-32 object-cover mx-auto' src={icon4} alt="" />
                    <div className="py-5 text-5xl font-bold text-natural"><CountUp className='text-5xl font-bold text-natural' end={480} />+</div>
                    <h2 className="text-2xl font-bold text-primary">Feedbacks</h2>
                </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;