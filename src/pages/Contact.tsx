import '../components/All.css'
// import { ToastContainer, toast } from 'react-toastify';
import emailjs from  "@emailjs/browser";
// import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import { useState } from 'react';
import Nav from '../components/Nav';
import Swal from 'sweetalert2';
const Contact = () => {
           const variants = {
            hidden:{opacity:0, x:-100},
            visible:{opacity:1, x:0}
             }
           


   const [name, setname] = useState("");
   const [email, setemail] = useState("");
   const [phone, setphone] = useState("");
   const [message, setmessage] = useState("");
   const [propertyName, setpropertyName] = useState("")
  const [propertType, setpropertType] = useState("")



   const HandleSubmit = (e: any) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!name || !email || !message || !phone || !propertType || !propertType){
     Swal.fire({
              title: 'Error!',
               text: 'Fill in to signed up.',
               icon: 'error',
               confirmButtonText: 'OK',
               confirmButtonColor:'rgb(70, 148, 179)'
                 })
   }
   else if (!emailRegex.test(email)) {
       Swal.fire({
         title: 'Error!',
         text: 'Please enter a valid email address.',
         icon: 'error',
         confirmButtonColor: 'rgb(70, 148, 179)'
       });
       return;
     }
   else{
       e.preventDefault();

    emailjs
      .send(
        "service_lksfa4q",      
        "template_r8rhcg4",     
        {
          name: name,
          email: email,
          telephone: phone,
          message: message,
          propertyName: propertyName,
          propertType: propertType
        },
        "NQOMU-8eNMYJoVqni"  
      )
      .then(() => {
          Swal.fire({
             title: 'Email sent successfully!',
             text: 'You have successfully sent your message to us.',
             icon: 'success',
             confirmButtonText: 'OK',
               confirmButtonColor:'rgb(70, 148, 179)'
               })
        setname("")
        setemail("")
        setphone("")
        setmessage("")
        setpropertyName("")
        setpropertType("")
      })
      .catch((error:any) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message.");
      });
        setTimeout(() =>{
    }, 5000);
   }
   }
  return (
  <div>
    <Nav />
    <br />
    <br />
    <br />
         <motion.div className=''>
       
   {/* <ToastContainer /> */}
   <div className='contact text-center'>
       <h1 className='font-bold' style={{fontSize:20,}}>Smart Contact Form</h1>
       <p>Email verification and validation, confirmity of identity, immediate response to your inputted email</p>
       <br />
    <form>
        <motion.input type='text' placeholder='Full Name' value={name} onChange={(e) => setname(e.target.value)} required 
           variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}/>

        <motion.input type='email' placeholder='Email Address' value={email} onChange={(e) => setemail(e.target.value)} required 
           variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}/>
<br />
<br />
         <motion.input type='number' placeholder='Telephone Number' value={phone} onChange={(e) => setphone(e.target.value)} required 
           variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}/>

           {/* <motion.input type='text' placeholder='Property Type' value={phone} onChange={(e) => setphone(e.target.value)} required 
           variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}/> */}

        <motion.select name="propertType" id="" value={propertyName} onChange={(e) => setpropertyName(e.target.value)} 
         variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
         <option value="" disabled>Select the Type</option>
         <option value="House">House</option>
         <option value="Apartment">Apartment</option>
         <option value="Land">Land</option>
        </motion.select>

           <motion.input type='text' placeholder='Name of Property' value={propertType} onChange={(e) => setpropertType(e.target.value)} required 
           variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}/>

        <br />
        <motion.textarea placeholder='Message' value={message} onChange={(e) => setmessage(e.target.value)} required 
           variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}/>
        <br />
        <motion.button 
         variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}} onClick={HandleSubmit}>Send</motion.button>
    </form>
   </div>
   

  </motion.div>
  </div>
  )
}

export default Contact;