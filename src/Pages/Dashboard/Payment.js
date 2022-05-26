import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3TaVKQApjCPl5WWUHVzWyDMFjNTNqz4ICJGqIW88FRoSGqUoxVTxFaGVQoGVAArvREE5aXMfQY2md2CmJ0w5Jy00pegF3Un3');

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/order/${id}`, {
            method: 'GET',
            headers: {
                'content-rype': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(data => setOrder(data.data))
    }, [id]);

    console.log(order);

    return (
        <div className="w-full">
            <div className='mx-auto my-8 flex justify-center'>
                <div class="card w-full md:w-3/6 bg-base-100 shadow-xl">
                    <div class="card-body text-left">
                        <p className="text-success font-bold text-xl">Hello, {order?.userName}</p>
                        <h2 class="card-title">Please Pay For: <span className="text-green-700">{order?.productName}</span></h2>
                        <p className='font-semibold'>Payable Amount: <span className="text-indigo-700">{order?.orderValue}</span></p>

                    </div>
                </div>
            </div>
            <div className='mx-auto my-8 flex justify-center'>
                <div class="card w-full md:w-3/6 bg-base-200 shadow-xl">
                    <div class="card-body text-left">
                        <Elements stripe={stripePromise} >
                            <CheckoutForm />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;