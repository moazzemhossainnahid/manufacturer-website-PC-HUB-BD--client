import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useAdmin = () => {
    const [admin , setAdmin] = useState(false);
    const [adminLoading , setAdminLoading] = useState(true);
    const {user} = useFirebase()
    useEffect( () => {
        const email = user?.email;
        fetch(`https://pc-hub-bd-server.vercel.app/user/admin/${email}`, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin)
            setAdminLoading(false)
        })

    },[user]);


    return [admin, adminLoading];
};

export default useAdmin;