import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeProduct = ({product}) => {
    const {_id, name, imageURL, description, avQuantity, price} = product;
    const navigate = useNavigate();
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={imageURL} alt="" className='w-52 h-52 p-2' /></figure>
            <div className="card-body bg-accent text-left">
                <h2 style={{overflowWrap: 'break-word'}} className="card-title"> {name}
                </h2>
                <p style={{overflowWrap: 'break-word'}} className=''>{description.slice(0,100)}...</p>
                <p className="font-semibold">Available: <span className="text-white">{avQuantity}</span> Pcs</p>
                <p className="font-semibold">Price: <span className="text-white">{price}</span> Tk</p>
                <div className="card-actions justify-end">
                <div onClick={() => navigate(`/product/${_id}`)} className="btn btn-primary">Book Now</div> 
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeProduct;