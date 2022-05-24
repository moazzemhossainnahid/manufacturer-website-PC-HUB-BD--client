import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared Pages/Header/Navbar';
import PublicRoute from './Pages/components/Routes/PublicRoute';
import PrivateRoute from './Pages/components/Routes/PrivateRoute';
import RequireAuth from './Pages/components/RequireAuth';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import BookNow from './Pages/components/BookNow/BookNow';
import Products from './Pages/Products/Products';
import Profile from './Pages/Shared Pages/Header/Profile';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';
import AllUsers from './Pages/Dashboard/AllUsers';

function App() {
  return (
    <div className="App">
      <Navbar>
      <Routes>
        {/* {
          PublicRoute.map(({path, Component}, index) => (
            <Route key={index} path={path} element={<Component/>}/>
          ))
        }
        {
          PrivateRoute.map(({path, Component}, index) => (
            <Route key={index} path={path} element={<RequireAuth><Component/></RequireAuth>}/>
          ))
        } */}
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>
          <Route index element={<MyOrder/>}/>
          <Route path="myreview" element={<MyReview/>}/>
          <Route path="allusers" element={<AllUsers/>}/>
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<RequireAuth><BookNow/></RequireAuth>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <ToastContainer/>
      </Navbar>
    </div>
  );
}

export default App;
