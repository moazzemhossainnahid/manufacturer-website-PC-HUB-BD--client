import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageProductDetails from './ManageProductDetails';

const ManageProduct = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/products`)
            .then(data => setProducts(data.data))
    }, []);

    return (
        <div className="bg-gradient-to-l from-secondary to-accent text-left h-full w-full">

            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 lg:px-28 px-4 w-full lg:w-5/6">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Products: {products.length}</p>
                    <div className="my-20 w-full">
                        <div className='grid grid-cols-1 gap-5'>
                            {
                                products.map(product => <ManageProductDetails key={product._id} product={product} setProducts={setProducts} products={products} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ManageProduct;