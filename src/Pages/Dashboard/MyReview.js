import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {


    const [reviews, setReviews] = useState([]);
    const { user } = useFirebase();
    const email = user?.email;

    useEffect(() => {
        axios.get(`https://pc-hub-bd-server.vercel.app/reviews/${email}`)
            .then(data => {
                setReviews(data.data);
            })
    }, [email])

    // console.log(reviews);


    return (
        <div className="bg-gradient-to-l from-secondary to-accent text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 lg:px-28 px-4 w-full lg:w-5/6">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">My Review : {reviews?.length}</p>
                    <div className="my-20 w-full">
                        <div className='grid grid-cols-1 gap-5'>
                            {
                                reviews.map(rview => <MyReviewDetails key={rview._id} rview={rview} reviews={reviews} setReviews={setReviews} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;