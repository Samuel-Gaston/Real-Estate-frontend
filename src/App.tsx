import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout.tsx';
import axios from 'axios';
import Nav from './components/Nav.tsx';
import House from './pages/House.tsx';
import Land from './pages/Land.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';
import Customer from './pages/dashboard/Customer.tsx';
import Sales from './pages/dashboard/Sales.tsx';
import Houses from './pages/dashboard/Houses.tsx';
import Apartments from './pages/dashboard/Apartments.tsx';
import Lands from './pages/dashboard/Lands.tsx';
import Contact from './pages/Contact.tsx';
import Apartment from './pages/Apartment.tsx';
import ForgotPassword from './pages/ForgotPassword.tsx';
import ResetPassword from './pages/ResetPassword.tsx';
// axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://127.0.0.1:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";
function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/nav' element={<Nav />} />
      <Route path='/apartment' element={<Apartment />} />
     <Route path='/house' element={<House />} />
     <Route path='/land' element={<Land />} />
     <Route path='/login' element={<Login />} />
     <Route path='/register' element={<Register />} />
     <Route path='/dashboard' element={<Dashboard />} />
     <Route path='/customer' element={<Customer />} />
     <Route path='/sales' element={<Sales />} />
     <Route path='/houses' element={<Houses />} />
     <Route path='/Apartments' element={<Apartments />} />
     <Route path='/Lands' element={<Lands />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/forgot-password' element={<ForgotPassword />} />
     <Route path='/reset-password' element={<ResetPassword />} />
    </Routes>
    </BrowserRouter>
</>
  )
}

export default App
