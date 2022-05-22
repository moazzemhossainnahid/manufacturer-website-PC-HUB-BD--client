
import Signin from '../../../Pages/Signin/Signin';
import Signup from '../../../Pages/Signup/Signup';
import Home from '../../../Pages/Home/Home';
import About from '../../../Pages/About/About';
import Contact from '../../../Pages/Contact/Contact';
import Blogs from '../../../Pages/Blogs/Blogs';
import Dashboard from '../../../Pages/Dashboard/Dashboard';
import NotFound from '../../../Pages/NotFound/NotFound';
import Products from '../../../Pages/Products/Products';


const PublicRoute = [
    {path: "/" , Component: Home},
    {path: "/about" , Component: About},
    {path: "/contact" , Component: Contact},
    {path: "/blogs" , Component: Blogs},
    {path: "/dashboard" , Component: Dashboard},
    {path: "/products" , Component: Products},
    {path: "/signin" , Component: Signin},
    {path: "/signup" , Component: Signup},
    {path: "*" , Component: NotFound},
]

export default PublicRoute;