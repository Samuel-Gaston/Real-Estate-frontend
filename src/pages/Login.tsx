import { NavLink, useNavigate } from 'react-router-dom';
import '../components/All.css';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {

  const navigate = useNavigate();

  const GoToForgotPassword = () =>{
    navigate("/forgot-password");
  }
   const [getAdmin, setgetAdmin] = useState([]);
  const [LoginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const HandleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

const HandleSubmit = async () => {
  if (!LoginInfo.email || !LoginInfo.password) {
    Swal.fire({
      title: 'Error!',
      text: 'Please fill all fields',
      icon: 'error',
      confirmButtonColor: 'rgb(70, 148, 179)'
    });
    return;
  }

  try {
    const res = await axios.post(
      'http://127.0.0.1:8000/api/login',
      LoginInfo
    );

    // Save token
    localStorage.setItem('token', res.data.token);

    Swal.fire({
      title: 'Success!',
      text: 'Login successful',
      icon: 'success',
      confirmButtonColor: 'rgb(70, 148, 179)'
    });

    // 🔥 ADMIN CHECK
    if (
      LoginInfo.email === "admin@gmail.com" &&
      LoginInfo.password === "admin123"
    ) {
      navigate("/dashboard");
    } else {
      navigate("/contact");
    }

  } catch (error: any) {
    Swal.fire({
      title: 'Login Failed!',
      text: error.response?.data?.message || 'Invalid credentials',
      icon: 'error',
      confirmButtonColor: 'rgb(70, 148, 179)'
    });
  }
};


  return (
    <div>
      <div className='Overall-Login flex flex-wrap justify-center'>
        <div className='login'>
          <br />
          <h1 className='text-center font-bold'>Sign-In</h1>
          <p className='text-center'>Please confirm your identity!</p>
          <br />

          <label>Email</label>
          <div className='flex flex-wrap justify-center'>
            <input
              type="email"
              name="email"
              placeholder='samuelgaston@gmail.com'
              onChange={HandleData}
            />
          </div>

          <br />
          <label>Password</label>
          <div className='flex flex-wrap justify-center'>
            <input
              type="password"
              name="password"
              placeholder='*******'
              onChange={HandleData}
            />
          </div>
          <p style={{marginLeft:30, marginTop:9}}>Forgot Password <a onClick={GoToForgotPassword} style={{color:'rgb(70, 148, 179)', cursor:'pointer'}}>Click here</a></p>

          <br />
          <div className='flex flex-wrap justify-center'>
            <button onClick={HandleSubmit}>Submit</button>
          </div>

          <p style={{ marginBottom: 20, textAlign: 'center' }}>
            Don't have an account ?
            <NavLink to="/register" style={{ fontWeight: 'bold', color: 'black' }}>
              {' '}Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
