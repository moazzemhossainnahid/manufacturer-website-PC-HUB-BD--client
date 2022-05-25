import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageProductDetails from './ManageProductDetails';

const ManageProduct = () => {

    const [products, setProducts] = useState([]);
    useEffect( () => {
        axios.get(`http://localhost:5000/products`)
        .then(data => setProducts(data.data))
    }, []);

    return (
        <div className="mt-[1000px] md:mt-[500px] mb-32 w-5/6">
            <h3 className="text-3xl font-bold text-accent my-96">Products: {products.length}</h3>
            <div className='grid grid-cols-1 gap-5'>
            {
                products.map(product => <ManageProductDetails key={product._id} product={product} />)
            }
        </div>
        </div>
    );
};

export default ManageProduct;