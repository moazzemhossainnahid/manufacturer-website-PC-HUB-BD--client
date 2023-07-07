import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState();

    useEffect( () => {
        axios.get(`http://localhost:5000/blog/${id}`)
        .then(data => setBlog(data.data))
    },[id]);

    console.log(blog);

    return (
        <div className='mx-2'>
        <div className='w-full md:w-4/6 mx-auto my-20'>
            <img className="w-full rounded-t-3xl object-cover shadow-lg h-96" src={blog?.image} alt="computer" />
            <div className="py-4 px-3 w-full flex justify-between bg-indigo-700">
                <p className="text-sm text-white font-semibold tracking-wide">{blog?.author}</p>
                <p className="text-sm text-white font-semibold tracking-wide">24TH May, 2022</p>
            </div>
            <div className="bg-white px-4 text-justify py-6 shadow-lg rounded-bl-3xl rounded-br-3xl">
                <h1 className="text-3xl text-gray-900 font-semibold tracking-wider">{`${blog?.name}`}</h1>
                <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">{`${blog?.blog}`}</p>
            </div>
        </div>
    </div>
    );
};

export default Blog;