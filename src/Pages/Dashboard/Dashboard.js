import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [admin] = useAdmin();
    return (
        <div>
           <div class="drawer drawer-mobile drawer-end">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">

            <Outlet/>
            
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto gap-2 w-80 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                <li><NavLink to="/dashboard">My Profile</NavLink></li>
                {
                    admin ? '' : <li><NavLink to="/dashboard/myorder">My Order</NavLink></li>
                }
                {
                    admin ? '' : <li><NavLink to="/dashboard/myreview">My Review</NavLink></li>
                }
                {
                    admin && <li><NavLink to="/dashboard/allusers">All Users</NavLink></li>
                }
                {
                     admin && <li><NavLink to="/dashboard/addproduct">Add Product</NavLink></li>
                }
                {
                     admin && <li><NavLink to="/dashboard/manageproduct">Manage Product</NavLink></li>
                }
                </ul>
            
            </div>
            </div>
           {/* <Loading/> */}
        </div>
    );
};

export default Dashboard;