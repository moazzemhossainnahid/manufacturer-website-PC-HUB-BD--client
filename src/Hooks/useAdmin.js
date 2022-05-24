import React, { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useAdmin = () => {
    const [admin , setAdmin] = useState(false);
    const {user} = useFirebase()
    useEffect( () => {
        const email = user?.email;
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setAdmin(data.admin))

    },[user]);


    return [admin];
};

export default useAdmin;