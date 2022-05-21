import React from 'react';

import image from '../../images/404-Page.gif';
const NotFound = () => {
    return (
        <div className=''>
            <img src={image} alt="" className="object-cover w-screen h-screen" />
        </div>
    );
};

export default NotFound;