import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset} = useForm();



    return (
        <div className="bg-gradient-to-l from-secondary to-accent text-left h-full w-full">

        <div className="w-full flex items-center justify-center my-12">
            <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
                <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Add a Product</p>
               <form action="">
                   
               <div className="md:flex items-center mt-12">
                    <div className="w-full flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">Product Name</label>
                        <input {...register('name')} tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                    </div>
                </div>
                
               <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">Product Image</label>
                        <input {...register('image')} tabIndex={0} arial-label="Please input name" type="file" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800">Available Quantity</label>
                        <input {...register('avQuantity')} tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                    </div>
                </div>

               <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">Minimum Orders Quantity</label>
                        <input {...register('minOrder')} tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800">Price Per Unit</label>
                        <input {...register('price')} tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                    </div>
                </div>

                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="text-base font-semibold leading-none text-gray-800">Product Description</label>
                        <textarea {...register('description')} tabIndex={0} aria-label="leave a message" type="text" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" />
                    </div>
                </div>

                <div className="flex items-center justify-center w-full">
                    <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-secondary rounded hover:bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none">Add Product</button>
                </div>

               </form>
            </div>
        </div>
    </div>
    );
};

export default AddProduct;