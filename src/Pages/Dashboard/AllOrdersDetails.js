import React from 'react';

const AllOrdersDetails = ({order}) => {
    const {productName, imageURL, address, phone, email, orderQuantity} = order;
    
    return (
        <div className='w-5/6 mx-auto'>
            <div class="card card-side shadow-xl bg-rose-300">
            <div className="flex justify-center items-center">
            <figure><img className='w-32 object-cover' src={imageURL} alt="Movie"/></figure>
            </div>
            <div className="flex justify-start items-center">
            <div class="card-body text-left">
                <h2 class="card-title">{productName}</h2>
                <p><span className="font-semibold">Order Quantity:</span> {orderQuantity}</p>
                <p><span className="font-semibold">Email:</span> {email}</p>
                <p><span className="font-semibold">Phone:</span> {phone}</p>
                <p><span className="font-semibold">Address:</span> {address}</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Unpaid</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default AllOrdersDetails;