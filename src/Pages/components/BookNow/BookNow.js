import React from 'react';
import { useParams } from 'react-router-dom';

const BookNow = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Product: {id}</h2>
        </div>
    );
};

export default BookNow;