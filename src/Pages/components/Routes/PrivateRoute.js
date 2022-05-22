import BookNow from '../BookNow/BookNow';
import Profile from '../../../Pages/Shared Pages/Header/Profile';

const PrivateRoute = [
    {path: "/profile" , Component: Profile},
    {path: "/product/:id" , Component: BookNow},
];

export default PrivateRoute;