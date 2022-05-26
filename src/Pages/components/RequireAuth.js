import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import Loading from "./Loading";

const RequireAuth = ({children}) => {
    const {user, loading} = useFirebase();
    const location = useLocation();

    if(loading){
        return <Loading/>
    }

    if(!user){
        return <Navigate to='/signin' state={{from: location}} replace/>
    }

    return children;
};

export default RequireAuth;