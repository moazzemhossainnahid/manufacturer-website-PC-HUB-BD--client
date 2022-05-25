import React from 'react';

const MyOrderDetails = ({order}) => {
    const {productName, imageURL, address, phone, email, orderQuantity, orderValue} = order;
    return (
        <div className='w-5/6 mx-auto'>
            <div class="card card-side shadow-xl bg-rose-300 p-2">
            <div className="flex justify-center items-center">
            <figure><img className='w-32 object-cover' src={imageURL} alt="Movie"/></figure>
            </div>
            <div className="flex justify-start items-center">
            <div class="card-body text-left">
                <h2 class="card-title">{productName}</h2>
                <p><span className="font-semibold">Order Quantity:</span> {orderQuantity}</p>
                <p><span className="font-semibold">Order Value:</span> {orderValue}</p>
                <p><span className="font-semibold">Email:</span> {email}</p>
                <p><span className="font-semibold">Phone:</span> {phone}</p>
                <p><span className="font-semibold">Address:</span> {address}</p>
                <div class="card-actions w-full my-5 flex justify-between">
                <button class="btn btn-primary">Pay</button>
                <button class="btn btn-gray-500">Delete</button>
            </div>
            </div>
            </div>
            </div>

        </div>
    );
};

export default MyOrderDetails;