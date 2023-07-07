import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('https://pc-hub-bd-server.vercel.app/reviews')
            .then(data => {
                setReviews(data.data);
            })
    }, [])


    return (
        <div>
            <div className='py-10'>
                <h2 className="text-2xl leading-6 text-gray-800 text-center px-4">Testimonials</h2>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">What our <span className="text-accent">client says</span></h1>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-6">
                    {
                        reviews.map(rview => <ReviewDetails key={rview._id} rview={rview} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;