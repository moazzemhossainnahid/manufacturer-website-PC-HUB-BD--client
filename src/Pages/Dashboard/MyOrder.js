import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
import MyOrderDetails from './MyOrderDetails';

const MyOrder = () => {


  const [orders, setOrders] = useState([]);
  const { user } = useFirebase();
  const email = user?.email;

  useEffect(() => {
    axios.get(`https://pc-hub-bd.herokuapp.com/orders/${email}`)
      .then(data => {
        setOrders(data.data);
      })
  }, [email])

  return (

    <div className="bg-gradient-to-l from-secondary to-accent text-left h-full w-full">

      <div className="w-full flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 lg:px-28 px-4 w-full lg:w-5/6">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Total Order: {orders.length}</p>
          <div className="my-20 w-full">
            <div className='grid grid-cols-1 gap-5'>
              {
                orders.map(order => <MyOrderDetails key={order._id} order={order} setOrders={setOrders} orders={orders} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MyOrder;