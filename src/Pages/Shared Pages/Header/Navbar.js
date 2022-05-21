import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const Navbar = ({children}) => {
    const [clicked, setClicked] = useState(false);
    return (
        <div className=''>
            <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
        <div class="drawer-content flex flex-col">
            {/* <!-- Navbar --> */}
            <div class="w-full px-10 navbar bg-base-300">

            <div class="flex-1 px-2 mx-2">P-Hero</div>
            <div onClick={() => {setClicked(!clicked)}} class="flex-none lg:hidden">
                <label for="my-drawer-3" class="btn btn-square btn-ghost">
                    {
                        clicked ? <FontAwesomeIcon size='2x' icon={faClose}/> : <FontAwesomeIcon size='2x' icon={faBars}/>
                        
                    }
                </label>
            </div> 
            <div class="flex-none hidden lg:block"> 
                <ul class="menu menu-horizontal gap-2">
                {/* <!-- Navbar menu content here --> */}
                <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
                <li><NavLink to="/about" className="rounded-lg">About</NavLink></li>
                <li><NavLink to="/blogs" className="rounded-lg">Blogs</NavLink></li>
                <li><NavLink to="/contact" className="rounded-lg">Contact</NavLink></li>
                <li><NavLink to="/signin" className="rounded-lg">Signin</NavLink></li>
                </ul>
            </div>

            </div>

            {/* <!-- Page content here --> */}
            {children}
        </div> 
        <div class="drawer-side mt-16">
            <label for="my-drawer-3" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
                <li><NavLink to="/" className="rounded-lg">Home</NavLink></li>
                <li><NavLink to="/about" className="rounded-lg">About</NavLink></li>
                <li><NavLink to="/blogs" className="rounded-lg">Blogs</NavLink></li>
                <li><NavLink to="/contact" className="rounded-lg">Contact</NavLink></li>
                <li><NavLink to="/signin" className="rounded-lg">Signin</NavLink></li>
            </ul>
            
        </div>
        </div>
        </div>
    );
};

export default Navbar;