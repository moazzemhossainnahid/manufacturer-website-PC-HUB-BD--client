import React from 'react';

import loader from '../../images/loadergif.gif';
const Loading = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen py-10'>
           <img src={loader} alt="" className="w-fit h-fit" /> 
        </div>
    );
};

export default Loading;