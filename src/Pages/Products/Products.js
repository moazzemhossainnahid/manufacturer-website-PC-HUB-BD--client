import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        axios.get(`http://localhost:5000/products`)
        .then(data => setProducts(data.data))
    }, []);
    return (
        <div className=''>
            <h2 className="font-bold text-3xl py-5">Our <span className="border-b-2 border-primary">Products</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {
                    products.map(product => <Product key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default Products;