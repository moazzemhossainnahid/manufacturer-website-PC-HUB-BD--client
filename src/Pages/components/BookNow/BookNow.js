import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const BookNow = () => {
    const {id} = useParams();
    const [product, setProduct] = useState();
    const {user, register, handleSubmit, handlePurchase} = useFirebase();
    useEffect( () => {
        axios.get(`http://localhost:5000/product/${id}`)
        .then(data => setProduct(data.data))
    },[id]);
    console.log(user);
    return (
        <div>
            <h2 className='text-2xl py-5'>Product: <span className="font-semibold text-accent">{product?.name}</span></h2>
            
            <div className="flex justify-center items-center py-10">
            <div className='mx-auto w-screen flex justify-center items-center'>
            <div className="card w-3/5 shadow-xl  bg-gray-200">
            <figure><img src={product?.imageURL} alt="" className='w-96 object-cover' /></figure>
            <div className="card-body bg-accent text-left">
                <h2 className="card-title"> {product?.name}
                </h2>
                <p className=''>{product?.description}</p>
                <div className="py-5">
                    <h3 className="font-semibold text-2xl text-white text-center">Booked for</h3>
                    <form onSubmit={handleSubmit(handlePurchase)} action="" className='py-3'>
                    <input type="text" value={user?.displayName} disabled className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
                    <input type="email" value={user?.email} disabled className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
                    <div className="form-control w-full mx-auto max-w-xs">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Available Quantity</span>
                    </label>
                    <input type="text" {...register("avQuantity")} value={product?.avQuantity} readOnly id="avQuantity" className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full mx-auto max-w-xs">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Price Per Unit</span>
                    </label>
                    <input type="text" {...register("price")} value={product?.price} readOnly className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full mx-auto max-w-xs">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Minimum Order Quantity</span>
                    </label>
                    <input type="text" {...register("minOrder")} value={product?.minOrder} readOnly className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
                    </div>
                    
                    
                    
                    <input type="number" {...register("quantity")} required placeholder="Enter Quantity You Want Purchess" className="input bg-slate-100 my-2 block mx-auto input-ghost w-full max-w-xs" />
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