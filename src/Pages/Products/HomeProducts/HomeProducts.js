import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HomeProduct from './HomeProduct';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const homeProducts = products.slice(0,6);
    const navigate = useNavigate();
    useEffect( () => {
        axios.get(`https://pc-hub-bd-server.vercel.app/products`)
        .then(data => setProducts(data.data))
    }, []);
    return (
        <div className=''>
            <h2 className="font-bold text-3xl py-5">Our <span className="border-b-2 border-primary">Products</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {
                    homeProducts.map(product => <HomeProduct key={product._id} product={product}/>)
                }
            </div>

            <button onClick={() => navigate('/products')} className="btn btn-outline my-10">See More Products <FontAwesomeIcon className='pl-3' icon={faArrowRight} size="" /></button>
        </div>
    );
};


export default HomeProducts;