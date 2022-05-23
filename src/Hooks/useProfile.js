import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/components/Loading';
import useFirebase from './useFirebase';

const useProfile = () => {
    const {user} = useFirebase();
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user?.email}`)
        .then(res => res.json())
        .then(data => setProfile(data))
    }, [user]);

    // const { isLoading, error, data} = useQuery('profile', () =>
    // fetch(`http://localhost:5000/profile/${user?.email}`)
    // .then(res =>res.json())
    // .then(() => {
    //     console.log(data);
    // })
    // )
    // if(isLoading){
    //     return <Loading/>
    // }


    return [profile];
};

export default useProfile;