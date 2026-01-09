import './All.css';
import { motion } from 'framer-motion';
const Banneras = () => {
    const variants = {
            hidden:{opacity:0, x:-100},
            visible:{opacity:1, x:0}
             }
  return (
    <div>
             <div className='banneras'>
   <br />
<motion.div className='flex flex-wrap justify-end'
    variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
     <div className='x'>

 <h3 style={{fontSize:15, fontWeight:'bold', color:'white',}} >Find Home With Us</h3>
 <br />
    <h1 style={{fontSize:20, fontWeight:'bold', color:'white',}}>Find the right house from over
    <br /> 200 property opinions</h1>
    <button>Find Now</button>

 </div>
</motion.div>
<br />

      <div className='flex flex-wrap justify-center'>
  <div className='nice border-white flex flex-wrap justify-center text-center' style={{marginTop:60, padding:20}}>
        
          <div className='right-nice'>
           <motion.h4 style={{fontSize:20, color:'rgb(70, 148, 179) ', fontWeight:'bold',}}
               variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>Coming Soon</motion.h4>
           <motion.h4 style={{fontWeight:'bold', color:'white', fontSize:30}}
               variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>Explore Your Next Apartment with the aid of Contact Form</motion.h4>
           <motion.h4 style={{fontSize:17, marginTop:20, color:'white'}}
               variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>With the aid of CF, you can get more information how your next apartment would be before visiting</motion.h4>
         <motion.button style={{
            backgroundColor:'rgb(70, 148, 179)',
        width:80,
        height:40,
        border:'none',
       borderRadius:10,
     marginTop:10,
     color:'white'
         }}
             variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>Explore</motion.button>
          </div>
         </div>
      </div>

   </div>
    </div>
  )
}

export default Banneras;