import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../components/Loading';
import UsersRow from './UsersRow';

const AllUsers = () => {

    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users',
    {
        method: 'GET',
        headers: {
            "authorization" : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()))

    if(isLoading){
        return <Loading/>
    }

    return (
        <div>
            <h3 className="text-3xl text-indigo-700 py-10">Total Users: <span className="text-secondary">{users?.length}</span></h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Rules</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user=> <UsersRow key={user?._id} user={user} index/>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;