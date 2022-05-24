import { signOut } from 'firebase/auth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import useFirebase from '../../Hooks/useFirebase';
import Loading from './Loading';

const RequireAdmin = ({children}) => {
    const {user, loading} = useFirebase();
    const [admin, adminLoading] = useAdmin();
    const location = useLocation();

        
    if(loading || adminLoading){
        return <Loading/>
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/signin" state={{from:location}} replace  />;
    }

    

    return children;
};

export default RequireAdmin;