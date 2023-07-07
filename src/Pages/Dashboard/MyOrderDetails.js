import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';



const MyOrderDetails = ({order, orders, setOrders}) => {
    const {_id, productName, imageURL, address, phone, email, orderQuantity, orderValue, paid} = order;

    const handleDeleteOrder = (id) => {
    
        // Post to database
    
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                
            fetch(`https://pc-hub-bd-server.vercel.app/order/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(inserted => {
                // console.log(inserted);
                if(inserted.deletedCount > 0 ){
                    const newOrders = orders.filter(p => p._id !== id);
                    setOrders(newOrders);
                    swal("Poof! Your Product has been deleted!", {
                        icon: "success",
                      });
                }
            })
    
            } else {
              swal("Your Product file is safe!");
            }
          });
    
    
    }
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
                <p><span className="font-semibold">Order Value: </span>$ {orderValue}</p>
                <p><span className="font-semibold">Email:</span> {email}</p>
                <p><span className="font-semibold">Phone:</span> {phone}</p>
                <p><span className="font-semibold">Address:</span> {address}</p>
                <div class="card-actions w-full my-5 flex justify-between">


                {/* i face a problem in payment method...when i click in pay button...
                then my server site crushed again and again..i try to solve this but dont do it..
                thats why i commented this button at last moment...please check my code for payment method */}

                {/* {!paid ? <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-primary">Pay</button></Link> : <div class="badge badge-accent">Paid</div>} */}
                <button class="btn btn-accent">Pay</button>
                <button onClick={() => handleDeleteOrder(`${_id}`)} class="btn btn-gray-500">Delete</button>
            </div>
            </div>
            </div>
            </div>

        </div>
    );
};

export default MyOrderDetails;