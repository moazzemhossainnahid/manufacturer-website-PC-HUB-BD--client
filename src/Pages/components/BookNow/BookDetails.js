import React from 'react';

const BookDetails = ({product}) => {
        // const {_id, name, imageURL, description, avQuantity, minOrder, price} = product;
    return (
        <div>
            <h3>{product?._id}</h3>
            <h3>{product?.name}</h3>
        </div>
    );
};

export default BookDetails;