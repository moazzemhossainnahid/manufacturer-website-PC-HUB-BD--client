import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowBlogs = ({bloG}) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className=''>
                <img className="w-full rounded-t-3xl object-cover h-52" src={bloG?.image} alt="computer" />
                <div className="py-4 px-3 w-full flex justify-between bg-indigo-700">
                    <p className="text-sm text-white font-semibold tracking-wide">{bloG?.author}</p>
                    <p className="text-sm text-white font-semibold tracking-wide">24TH May, 2022</p>
                </div>
                <div className="bg-white px-4 text-justify py-6 shadow-lg rounded-bl-3xl rounded-br-3xl">
                    <h1 className="text-3xl text-gray-900 font-semibold tracking-wider">{`${bloG?.name.slice(0,20)}...`}</h1>
                    <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">{`${bloG?.blog.slice(0,120)}...`}</p>
                    <div onClick={() => navigate(`/blog/${bloG?._id}`)} className="w-full mt-4 justify-end flex items-center cursor-pointer p-5">
                        <p className="text-base tracking-wide text-indigo-500">Read more</p>
                        <svg className="ml-3 lg:ml-4" xmlns="http://www.w3.org/2000/svg" width={20} height={18} viewBox="0 0 20 18" fill="none">
                            <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 8.53662H19" stroke="#4338ca" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowBlogs;