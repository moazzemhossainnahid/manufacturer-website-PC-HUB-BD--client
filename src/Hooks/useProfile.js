import { useEffect, useState } from 'react';
// import useFirebase from './useFirebase';

const useProfile = (email) => {
    // const {user} = useFirebase();
    const [profile, setProfile] = useState([]);

    // const email = user?.email;

    useEffect(() => {
        fetch(`https://pc-hub-bd-server.vercel.app/profile/${email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    }, [email]);

    console.log(profile);

    return {profile};
};

export default useProfile;