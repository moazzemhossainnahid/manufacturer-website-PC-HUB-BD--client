import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

import image from '../../../images/PC-HUB.png';
import avater from '../../../images/avatar.jpg';
import useProfile from '../../../Hooks/useProfile';

const Navbar = ({ children }) => {
    const [clicked, setClicked] = useState(false);
    const { user, handleSignOut } = useFirebase();
    const [profile] = useProfile();
    const navigate = useNavigate();

    return (
        <div className=''>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full px-10 navbar bg-base-300">
                        <label for="my-drawer-2" class="btn btn-secondary btn-outline h-5 drawer-button lg:hidden">
                            {/* {
                                clicked ? <FontAwesomeIcon size='2x' icon={faClose} /> : <FontAwesomeIcon size='2x' icon={faBars} />

                            } */}
                            D-Board
                        </label>
                        <div onClick={() => navigate('/')} className="flex-1 px-2 mx-2 cursor-pointer"><img src={image} alt="" className="object-cover w-32" /></div>
                        <div onClick={() => { setClicked(!clicked) }} className="flex-none lg:hidden">
                            <label for="my-drawer-3" className="btn btn-square btn-ghost">
                                {
                                    clicked ? <FontAwesomeIcon size='2x' icon={faClose} /> : <FontAwesomeIcon size='2x' icon={faBars} />

                                }
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-2">
                                {/* <!-- Navbar menu content here --> */}
                                <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
                                <li><NavLink to="/dashboard" className="rounded-lg">Dashboard</NavLink></li>
                                <li><NavLink to="/products" className="rounded-lg">Products</NavLink></li>
                                <li><NavLink to="/about" className="rounded-lg">About</NavLink></li>
                                <li><NavLink to="/blogs" className="rounded-lg">Blogs</NavLink></li>
                                <li><NavLink to="/contact" className="rounded-lg">Contact</NavLink></li>
                                <li>{user ? <button onClick={handleSignOut} className="rounded-lg btn btn-outline btn-natural"><NavLink to="/signin" className="rounded-lg">SignOut</NavLink> </button> : <NavLink to="/signin" className="rounded-lg">Signin</NavLink>}</li>
                                <div className="flex justify-center items-center">
                                    <label className="swap swap-rotate">

                                        {/* <!-- this hidden checkbox controls the state --> */}
                                        <input type="checkbox" data-toggle-theme="dark,light" />

                                        {/* <!-- sun icon --> */}
                                        <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                        {/* <!-- moon icon --> */}
                                        <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                    </label>
                                </div>
                                <div className="">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                {
                                                    user?.photoURL ? <img src={user?.photoURL} alt='' /> : <img src={avater} alt='' /> || profile?.photoURL ? <img src={profile?.photoURL} alt='' /> : <img src={avater} alt='' />
                                                }
                                            </div>
                                        </label>
                                        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-36">
                                            <li className='my-1'> <NavLink to="/profile">Profile</NavLink> </li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </div>

                    </div>

                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side mt-16">
                    <label for="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">

                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
                        <li><NavLink to="/dashboard" className="rounded-lg">Dashboard</NavLink></li>
                        <li><NavLink to="/products" className="rounded-lg">Products</NavLink></li>
                        <li><NavLink to="/about" className="rounded-lg">About</NavLink></li>
                        <li><NavLink to="/blogs" className="rounded-lg">Blogs</NavLink></li>
                        <li><NavLink to="/contact" className="rounded-lg">Contact</NavLink></li>
                        <li>{user ? <button onClick={handleSignOut} className="rounded-lg btn btn-outline btn-natural"><NavLink to="/signin" className="rounded-lg">SignOut</NavLink> </button> : <NavLink to="/signin" className="rounded-lg">Signin</NavLink>}</li>
                        <div className="mt-5">
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user?.photoURL ? <img src={user?.photoURL} alt='' /> : <img src={avater} alt='' /> || profile?.photoURL ? <img src={profile?.photoURL} alt='' /> : <img src={avater} alt='' />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-36">
                                    <li className='my-1'> <NavLink to="/profile">Profile</NavLink> </li>                                </ul>
                            </div>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;