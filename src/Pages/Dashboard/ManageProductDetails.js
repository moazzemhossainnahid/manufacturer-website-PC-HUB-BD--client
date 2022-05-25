import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faClose } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ManageProductDetails = ({product}) => {
    const {_id, imageURL, name} = product;

    const navigate = useNavigate();



    return (
        <div className='w-full'>
            <div className="bg-base-300 rounded-3xl p-2 flex flex-col  md:flex-row justify-around items-center">
                <img className='w-32' src={imageURL} alt="" />
                <h3 className="text-xl text-secondary">{`${name.slice(0,30)}...`}</h3>
            <div className="flex justify-around items-center w-4/6 md:w-1/4">
            <div className="">
                    <button onClick={() => navigate(`/dashboard/updateproduct/${_id}`)} className=''><FontAwesomeIcon className='hover:color-white' size='2x' color='green' icon={faEdit}/></button>
                </div>
                <div className="">
                    <button className=''><FontAwesomeIcon className='hover:color-white' size='2x' color='red' icon={faClose}/></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ManageProductDetails;