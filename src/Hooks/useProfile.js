import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useProfile = () => {
    const {user} = useFirebase();
    const [profile, setProfile] = useState([]);

    const email = user?.email;

    useEffect(() => {
        fetch(`https://pc-hub-bd.herokuapp.com/profile/${email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    }, [user, email]);

    return [profile];
};

export default useProfile;