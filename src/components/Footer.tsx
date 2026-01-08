import './All.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { AiOutlineCopyright } from "react-icons/ai";
import { motion } from 'framer-motion';
const Footer = () => {
        const variants = {
        hidden:{opacity:0, x:-100},
         visible:{opacity:1, x:0}
        }
  return (
    <div>
         <div style={{backgroundColor:'rgb(70, 148, 179)', marginTop:100}}>
    <br />
    <h4 style={{
                marginTop:20,
                fontWeight:'bold', marginLeft:30, color:'white'
            }}>Start Your Real Estate Journey Today</h4>
            <h4 style={{fontSize:17, color:'white', marginLeft:30,}}>Your dream property is just a click away. Whether your're looking for
            a new home, strategic investment, or expert real estate advice, HomeScope is here to assist youe
            every step of the way.Take the first step towards your real estate goals and explore our available
            properties with our team for professional assistance.</h4>
    <div className='flex flex-wrap justify-center'>
         <div className='footer'>
          <motion.div className='left-footer'
                   variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
          <h1>HomeScope</h1>
          <p>Awesome Real Estate website template</p>
          <p><FaLocationDot className='inline' /> Address Akwa Nord</p>
          <p><IoIosMusicalNotes className='inline' /> Call +237 678421846</p>
          <p><MdAddIcCall className='inline' /> gastonetoke@gmail.com</p>
          <p><FiClock className='inline' /> Hours 24/7 Mon-Sat</p>
          </motion.div>
            <motion.div className='right-footer'
                     variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
           <p style={{marginLeft:80}}>Company</p>
           <p style={{marginLeft:80}}>About Us</p>
           <p style={{marginLeft:80}}>Private Policy</p>
           <p style={{marginLeft:80}}>Terms & Conditions</p>
           <p style={{marginLeft:80}}>Contact Us</p>
           <p style={{marginLeft:80}}>Support Center</p>
           <p style={{marginLeft:80}}>Careers</p>
           </motion.div>
          <motion.div className='right-footer'
                   variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
          <h1 className='text-white' style={{marginLeft:80}}>Account</h1>
          <p style={{marginLeft:80}}>Sign in</p>
          <p style={{marginLeft:80}}>View Cart</p>
          <p style={{marginLeft:80}}>Track My Order</p>
          <p style={{marginLeft:80}}>Help Ticket</p>
          <p style={{marginLeft:80}}>Shopping Details</p>
          <p style={{marginLeft:80}}>Compare products</p>
          </motion.div>


         </div>
         
         <div className='last'>
          <motion.div className='left-last' style={{marginBottom:20}}
                   variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
            <p className='text-white font-bold text-center' style={{marginTop:20}}><AiOutlineCopyright className='inline' /> 2025 All Rights Reserved.</p>
          </motion.div>
         </div>
    </div>
 </div>
    </div>
  )
}

export default Footer;