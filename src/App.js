import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Navbar from './Pages/Shared Pages/Header/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import BookNow from './Pages/components/BookNow/BookNow';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<BookNow/>}/>
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
