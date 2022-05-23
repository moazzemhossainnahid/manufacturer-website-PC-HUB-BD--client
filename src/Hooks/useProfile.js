import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useProfile = () => {
    const {user} = useFirebase();
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user?.email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    }, [user]);

    return [profile];
};

export default useProfile;