import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faClose } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageProductDetails = ({product, setProducts, products}) => {
    const {_id, imageURL, name} = product;

    const navigate = useNavigate();

const handleDeleteProduct = (id) => {
    
    const proceed = window.confirm('Are You Sure to Delete ?')
    // Post to database

    if(proceed){
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(inserted => {
            // console.log(inserted);
            if(inserted.deletedCount > 0 ){
                toast.success("Product Deleted Successfully");
                const newProducts = products.filter(p => p._id !== id);
                setProducts(newProducts);
            }else{
                toast.error("Faild to Delete Product")
            }
        })
    }
}

    return (
        <div className='w-full'>
            <div className="bg-base-300 rounded-3xl p-2 px-5 flex flex-col  md:flex-row justify-between items-center">
                <img className='w-24 h-24 p-2 rounded-full bg-white' src={imageURL} alt="" />
                <h3 className="text-xl font-bold text-secondary">{`${name.slice(0,30)}...`}</h3>
            <div className="flex justify-around items-center w-4/6 md:w-1/4">
            <div className="">
                    <button onClick={() => navigate(`/dashboard/updateproduct/${_id}`)} className=''><FontAwesomeIcon className='hover:color-white' size='2x' color='green' icon={faEdit}/></button>
                </div>
                <div className="">
                    <button onClick={() => handleDeleteProduct(`${_id}`)} className=''><FontAwesomeIcon className='hover:color-white' size='2x' color='red' icon={faClose}/></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ManageProductDetails;