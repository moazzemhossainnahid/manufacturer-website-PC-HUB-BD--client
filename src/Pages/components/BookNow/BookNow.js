import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useFirebase from '../../../Hooks/useFirebase';
import swal from 'sweetalert';

const BookNow = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const { user } = useFirebase();
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        axios.get(`https://pc-hub-bd-server.vercel.app/product/${id}`)
            .then(data => setProduct(data.data))
    }, [id]);


    const handlePurchase = (data) => {
        const avQuantity = product?.avQuantity;
        const minOrder = product?.minOrder;
        const price = product?.price;
        const quantity = data.quantity;
        const address = data.address;
        const phone = data.phone;
        const orderValue = (price * quantity);


        if (quantity < minOrder) {
            toast.error(`Order At Least ${minOrder} Pcs`);
            return;
        }
        if (quantity > avQuantity) {
            toast.error(`Order Processed Maximum ${avQuantity} Pcs`);
            return;
        }

        const order = {
            productName: product?.name,
            imageURL: product?.imageURL,
            userName: user?.displayName,
            email: user?.email,
            address: address,
            phone: phone,
            orderQuantity: quantity,
            orderValue: orderValue,
        }

        swal({
            title: "Are you sure to Order ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`https://pc-hub-bd-server.vercel.app/orders`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(order)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                swal("Order Purchase Successfully", {
                                    icon: "success",
                                    
                                });
                                reset();
                            }
                        })
                } else {
                    swal("Order Purchase UnSuccessfull");
                }
            })


    }







    return (
        <div>
            <h2 className='text-2xl py-5'>Product: <span className="font-semibold text-accent">{product?.name}</span></h2>

            <div className="flex justify-center items-center py-10">
                <div className='mx-auto w-screen flex justify-center items-center'>
                    <div className="card w-full md:w-3/5 m-2 md:m-0 shadow-xl  bg-gray-200">
                        <figure><img src={product?.imageURL} alt="" className='w-96 h-60 p-2 object-cover' /></figure>
                        <div className="card-body bg-accent text-left">
                            <h2 style={{ overflowWrap: 'break-word' }} className="card-title"> {product?.name}
                            </h2>
                            <p style={{ overflowWrap: 'break-word' }} className=''>{product?.description}</p>
                            <p className='font-semibold'>Available Quantity: <span className="text-white">{product?.avQuantity} Pcs</span></p>
                            <p className='font-semibold'>Minimum Order Quantity: <span className="text-white">{product?.minOrder} Pcs</span></p>
                            <div className="py-5">
                                <h3 className="font-semibold text-2xl text-white text-center">Booked for</h3>
                                <form onSubmit={handleSubmit(handlePurchase)} action="" className='py-3'>

                                    <div className="form-control w-full mx-auto max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-white font-semibold">Name</span>
                                        </label>
                                        <input type="text" value={user?.displayName} disabled className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full mx-auto max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-white font-semibold">Email</span>
                                        </label>
                                        <input type="email" value={user?.email} disabled className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full mx-auto max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-white font-semibold">Phone</span>
                                        </label>
                                        <input type="text" {...register("phone")} required className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full mx-auto max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-white font-semibold">Address</span>
                                        </label>
                                        <textarea type="text" {...register("address")} id="address" required placeholder='Enter Your Address' className="input bg-slate-100 h-24 resize-none my-2 block mx-auto input-ghost w-full max-w-xs" />
                                    </div>
                                    <div className="form-control w-full mx-auto max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-white font-semibold">Quantity</span>
                                        </label>

                                        <input type="number" {...register("quantity")} required placeholder="Enter Quantity as You Want Purchess" className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
                                    </div>

                                    <input className='btn px-7 btn-secondary my-5 block mx-auto' type="submit" value="Purchase" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNow;