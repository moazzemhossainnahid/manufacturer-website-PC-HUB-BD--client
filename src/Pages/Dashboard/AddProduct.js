import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset} = useForm();
    const imageUrlKey = 'e738f1d16de6b265746b7f82cc157644';

    const handleAddProduct = (data) => {
        const name = data.name;
        const avQuantity = data.avQuantity;
        const minOrder = data.minOrder;
        const price = data.price;
        const description = data.description;

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageUrlKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;

                const product = {
                    name: name,
                    imageURL: img,
                    avQuantity: avQuantity,
                    minOrder: minOrder,
                    price: price,
                    description: description
                }
                console.log(product);

                    // Post to database
                    fetch(`http://localhost:5000/product`, {
                        method: 'POST',
                        headers: {
                            "content-type" : "application/json",
                            "authorization" : `Bearer ${localStorage.getItem('accessToken')}`
                            
                        },
                        body: JSON.stringify(product)
                    })
                    .then(res => res.json())
                    .then(inserted => {
                        if(inserted.insertedId ){
                            toast.success("Product Add Successfully")
                            reset();
                        }else{
                            toast.error("Faild to Add Product")
                        }
                    })
            
        }})
    }


    return (
        <div className="bg-gradient-to-l from-secondary to-accent text-left h-full w-full">

        <div className="w-full flex items-center justify-center my-12">
            <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
                <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Add a Product</p>
               <form onSubmit={handleSubmit(handleAddProduct)} className="mb-32" action="">
                   
               <div className="md:flex items-center mt-12">
                    <div className="w-full flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">Product Name</label>
                        <input {...register('name')} required tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                    </div>
                </div>
                
               <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">Product Image</label>
                        <input {...register('image')} required tabIndex={0} arial-label="Please input name" type="file" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800">Available Quantity</label>
                        <input {...register('avQuantity')} required tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                    </div>
                </div>

               <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">Minimum Orders Quantity</label>
                        <input {...register('minOrder')} required tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800">Price Per Unit</label>
                        <input {...register('price')} required tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                    </div>
                </div>

                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="text-base font-semibold leading-none text-gray-800">Product Description</label>
                        <textarea {...register('description')} required tabIndex={0} aria-label="leave a message" type="text" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" />
                    </div>
                </div>

                <div className="flex items-center justify-center w-full">
                    <button type='submit' className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-secondary rounded hover:bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none">Add Product</button>
                </div>

               </form>
            </div>
        </div>
    </div>
    );
};

export default AddProduct;