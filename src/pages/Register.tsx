import '../components/All.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const Register = () => {
      const navigate = useNavigate();

  const [RegisterInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const HandleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInfo({
      ...RegisterInfo,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (  !RegisterInfo.name ||!RegisterInfo.email || !RegisterInfo.password ||  !RegisterInfo.cpassword) {
           Swal.fire({
           title: 'Error!',
            text: 'Fill in to signed up.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor:'rgb(70, 148, 179)'
              })
      return;
    }
  else if (!emailRegex.test(RegisterInfo.email)) {
    Swal.fire({
      title: 'Error!',
      text: 'Please enter a valid email address.',
      icon: 'error',
      confirmButtonColor: 'rgb(70, 148, 179)'
    });
    return;
  }
  else if (RegisterInfo.password !== RegisterInfo.cpassword) {
         Swal.fire({
     title: 'Error!',
      text: 'Passwords do not matched.',
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor:'rgb(70, 148, 179)'
        })
    
      return;
    }
  else if(RegisterInfo.password.length < 8){
             Swal.fire({
     title: 'Error!',
      text: 'Passwords must be at least 8 characters.',
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor:'rgb(70, 148, 179)'
        })
  }
   else{
   axios.post("/api/register", {name: RegisterInfo.name,email: RegisterInfo.email,password: RegisterInfo.password, }).then((res)  =>{
   Swal.fire({
      title: 'Registration successful!',
      text: 'You have successfully signed up.',
      icon: 'success',
      confirmButtonText: 'OK',
        confirmButtonColor:'rgb(70, 148, 179)'
        })
      navigate("/login");
    }).
     catch ((error) => {
     if (error.response?.status === 422) {
    const errors = error.response.data.errors;

    if (errors.email) {
      Swal.fire({
        title: "Error!",
        text: errors.email[0], // "The email has already been taken."
        icon: "error",
      });
    }
  }  
      else {
        alert("Registration failed");
        Swal.fire({
          icon:"error",
          text:"Registration Failed"
        })
      }
     }) 
    

    }
   
  };
  return (
    <div>

    <div className='Overall-Login flex flex-wrap justify-center' style={{height:900}}>
    <div className='login' style={{height:630, marginBottom:60, width:'calc(100% - 20px)'}}>
    <br />
      <h1 className='text-center font-bold'>Sign-Up</h1>
      <br />
      <p  className='text-center'>Join us and be updated with more of our new properties!</p>
      <br />
<div className='flex flex-wrap justify-center'>
    <div className='register-login grid grid-cols-2'>
      <div className='left-login'>
    <label htmlFor="Username">Username</label>
    <br />
    <input type="text" name="name" id="" placeholder='Samuel Gaston' onChange={(e) => HandleData(e)} />
    <br /><br />
      <label htmlFor="Password">Password</label>
    <br />
    <input type="password" name="password" id="" placeholder='********' onChange={(e) => HandleData(e)} />
  </div>
    
  
    <div className='right-login' style={{marginLeft:5}}>
    <label htmlFor="Email">Email</label>
    <br />
    <input type="email" name="email" id="" placeholder='samuelgaston@gmail.com' onChange={(e) => HandleData(e)}/>
    <br /><br />
    <label htmlFor="Confirmed_Password">Confirmed_Password</label>
    <br />
    <input type="password" name="cpassword" id="" placeholder='********' onChange={(e) => HandleData(e)} />
   
</div>
</div>
</div>
<br />
<br />
    <div className='flex flex-wrap justify-center'>
         <button style={{width:'calc(54% - 20px)'}} onClick={HandleSubmit}>Submit</button>
    </div>
    <p style={{marginBottom:20, textAlign:'center'}}>Already have an account ?<a style={{color:'black', fontWeight:'bold'}}><NavLink to="/login"> Login</NavLink></a></p>
        </div>
    </div>
    <br />
    </div>
  )
}

export default Register;