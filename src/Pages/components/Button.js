import React from 'react';

const Button = ({children}) => {
    return (
        <div className='py-5'>
            <button class="btn btn-outline px-7 btn-secondary">{children}</button> 
        </div>
    );
};

export default Button;