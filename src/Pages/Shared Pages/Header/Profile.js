import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import useProfile from '../../../Hooks/useProfile';

import avater from '../../../images/avatar.jpg';
const Profile = () => {
    const {user, register, handleSubmit, handleUpdateProfile} = useFirebase();
    const [profile] = useProfile();
    console.log(profile);

    
    return (
        <div>
            <div className="h-full text-left">

                <div className="border-b-2 block md:flex">

                    <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                        <div className="flex justify-between">
                            <span className="text-xl font-semibold block">{user ? `${user?.displayName}'s Profile` : 'User Profile'} </span>
                            {/* <label for="my-modal-3" class="btn modal-button">open modal</label> */}
                            <label for="my-modal-3" className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</label>
                        </div>

                        <span className="text-gray-600">This information is secret so be careful</span>
                        <div className="w-full h-fit p-8 mx-2 flex justify-center">
                            <img id="showImage" className="max-w-xs w-32 items-center border-2 rounded shadow " src={user?.photoURL ? `${user?.photoURL}` : `${avater}` || profile?.photoURL ? `${profile?.photoURL}` : `${avater}`} alt="" />
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                        <div className="rounded  shadow p-6">
                            <div className="pb-6">
                                <label for="name" className="font-semibold text-gray-700 block pb-1">Name</label>
                                <div className="flex">
                                    <input disabled id="username" className="border-1  rounded-r px-4 py-2 w-full" type="text" value={user?.displayName ? user?.displayName : profile.displayName} />
                                </div>
                            </div>
                            <div className="pb-4">
                                <label for="about" className="font-semibold text-gray-700 block pb-1">Email</label>
                                <input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full" type="email" value={ user ? `${user?.email}` : `${user?.email}`} />
                            </div>
                            <div className="pb-4">
                                <label for="about" className="font-semibold text-gray-700 block pb-1">Phone</label>
                                <input disabled id="phone" className="border-1  rounded-r px-4 py-2 w-full" type="tel" value={ profile?.phone ? `${profile?.phone}` : '`+880-123-456-789`'} />
                                <span className="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div>
            {/* <!-- The button to open modal --> */}
            

            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
            <div class="modal-box relative  bg-success">
                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold">Please Update Your Profile Indormation</h3>
                <form onSubmit={handleSubmit(handleUpdateProfile)} action="" className='py-3'>
                <input {...register('displayName')} type="text" placeholder="Enter Your Name" className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs" />
                <input {...register('email')} type="email" placeholder="Enter Your Email" value={ user ? `${user?.email}` : `${user?.email}`} className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs" />
                <input {...register('phone')} type="tel" placeholder="Enter Your Phone" className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs" />
                <input {...register('photoURL')} type="file" placeholder="Enter Your Password" className="input bg-slate-100 my-2 input-ghost items-center w-full block mx-auto max-w-xs cursor-pointer border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg" />
                <input className='btn px-7 btn-secondary my-5 block mx-auto' type="submit" value="Save" />
                </form> 
            </div>
            </div>
        </div>

        </div>
    );
};

export default Profile;