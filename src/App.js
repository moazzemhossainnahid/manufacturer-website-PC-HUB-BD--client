import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared Pages/Header/Navbar';
import PublicRoute from './Pages/components/Routes/PublicRoute';
import PrivateRoute from './Pages/components/Routes/PrivateRoute';
// import Signin from './Pages/Signin/Signin';
// import Signup from './Pages/Signup/Signup';
// import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
// import Contact from './Pages/Contact/Contact';
// import Blogs from './Pages/Blogs/Blogs';
// import Dashboard from './Pages/Dashboard/Dashboard';
// import NotFound from './Pages/NotFound/NotFound';
// import BookNow from './Pages/components/BookNow/BookNow';
// import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar>
      <Routes>
        {
          PublicRoute.map(({path, Component}, index) => (
            <Route key={index} path={path} element={<Component/>}/>
          ))
        }
        {
          PrivateRoute.map(({path, Component}, index) => (
            <Route key={index} path={path} element={<Component/>}/>
          ))
        }
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<BookNow/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}/> */}
      </Routes>
      <ToastContainer/>
      </Navbar>
    </div>
  );
}

export default App;
