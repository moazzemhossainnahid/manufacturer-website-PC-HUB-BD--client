import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useFirebase from '../../Hooks/useFirebase';

const AddReview = () => {

    const { register, handleSubmit, reset} = useForm();
    const {user} = useFirebase();
    const imageUrlKey = 'e738f1d16de6b265746b7f82cc157644';

    const handleAddReview = (data) => {
        const name = user?.displayName;
        const email = user?.email;
        const profession = data.profession;
        const review = data.review;

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

                const reviewData = {
                    name: name,
                    image: img,
                    email: email,
                    profession: profession,
                    review: review,
                }
                

                    // Post to database
                    fetch(`https://pc-hub-bd.herokuapp.com/review`, {
                        method: 'POST',
                        headers: {
                            "content-type" : "application/json",
                            authorization : `Bearer ${localStorage.getItem('accessToken')}`
                            
                        },
                        body: JSON.stringify(reviewData)
                    })
                    .then(res => res.json())
                    .then(inserted => {
                        if(inserted.insertedId ){
                            toast.success("Review Add Successfully")
                            reset();
                        }else{
                            toast.error("Faild to Add Review")
                        }
                    })
            
        }})
    }


    return (
<div className="bg-gradient-to-l from-secondary to-accent text-left h-full w-full">

<div className="w-full flex items-center justify-center my-12">
    <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Add a Riview</p>
       <form onSubmit={handleSubmit(handleAddReview)} className="mb-32" action="">
           
       <div className="md:flex items-center mt-12">
            <div className="w-full flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">Users Name</label>
                <input {...register('name')} disabled value={user?.displayName} tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
            </div>
        </div>
        
       <div className="md:flex items-center mt-12">
            <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">User Image</label>
                <input {...register('image')} required tabIndex={0} arial-label="Please input name" type="file" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">User Profession</label>
                <input {...register('profession')} required tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
            </div>
        </div>

        <div>
            <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-800">Review Details</label>
                <textarea {...register('review')} required tabIndex={0} aria-label="leave a message" type="text" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" />
            </div>
        </div>

        <div className="flex items-center justify-center w-full">
            <button type='submit' className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-secondary rounded hover:bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none">Add Review</button>
        </div>

       </form>
    </div>
</div>
</div>
    );
};

export default AddReview;