import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllOrdersDetails from './AllOrdersDetails';

const AllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/orders')
        .then(data => {
            setOrders(data.data);
        })
    }, [])

    return (
        <div className="mt-[600px]">
            <div className='mt-20'>
            <h2 className="text-3xl font-bold py-20">Total Order: {orders.length}</h2>
            <div className="grid grid-cols-1 gap-5 mb-20">
                {
                    orders.map(order => <AllOrdersDetails key={order._id} order={order} />)
                }
            </div>
        </div>
        </div>
    );
};

export default AllOrders;