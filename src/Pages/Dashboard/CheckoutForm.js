import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, userName, email, orderValue } = order;

    useEffect(() => {
        fetch("https://pc-hub-bd.herokuapp.com/create-payment-intent", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ orderValue })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [orderValue]);


    // if (processing) {
    //     return <Loading />
    // }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error?.message || '');
            setSuccess('');
            // setProcessing(true);

        //     // // confirm card payment
        //     // const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        //     //     clientSecret,
        //     //     {
        //     //         payment_method: {
        //     //             card: card,
        //     //             billing_details: {
        //     //                 name: userName,
        //     //                 email: email,
        //     //             },
        //     //         },
        //     //     },
        //     // );

        //     // if (intentError) {
        //     //     setCardError(intentError?.message);
        //     //     setProcessing(false);
        //     // } else {
        //     //     setCardError('');
        //     //     setTransactionId(paymentIntent.id);
        //     //     setSuccess('Congrats! Your payment is completed.');

        //         // //store payment on database
        //         // const payment = {
        //         //     booking: _id,
        //         //     transactionId: paymentIntent.id
        //         // }

        //         // fetch(`https://pc-hub-bd.herokuapp.com/order/${_id}`, {
        //         //     method: 'PATCH',
        //         //     headers: {
        //         //         'content-type': 'application/json',
        //         //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //         //     },
        //         //     body: JSON.stringify(payment)
        //         // }).then(res => res.json())
        //         // .then(data => {
        //         //     console.log(data);
        //         //     setProcessing(false)
        //         // })
        //     // }
        }

    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="pt-8">
                    <button className='btn btn-accent text-white px-7' type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
            </form>
            {
                cardError && <p className='text-red-700'>{cardError}</p>
            }
            {/* {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            } */}
        </>
    );
};

export default CheckoutForm;