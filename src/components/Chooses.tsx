import './All.css';
import { FaHome } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { FaCogs, FaBrain, FaLightbulb } from "react-icons/fa";
const Chooses = () => {
  return (
    <div>
               <div id='choose' className='choose flex flex-wrap justify-center'>
            <div className='left-choose'>
            <h3>Why Choose Us</h3>
            <h4 className='font-bold text-2xl'>We provide the most complete list of Properties</h4>
            </div>
            <div className='right-choose'>
             <h4 style={{fontSize:17, marginTop:10}}>At <span style={{fontWeight:'bold'}}>HomeScope</span>, we pride ourselves on providing
             an exceptional real estate experience tailored to your unique needs and preferences</h4>
            </div>
        </div>


              
        <div className='choose2 flex flex-wrap justify-center'>
    <div className='left-choose2'>
              <MdBusinessCenter size={60}style={{color:'rgb(70, 148, 179)'}} />
                <h4 style={{fontWeight:'bold'}}>Find the Perfect Business Location</h4>
                <h4 style={{fontSize:17}}>Discover your ideal space for your business  with our expert guidance</h4>
    </div>
    <div className='right-choose2'>
<h1></h1>
<FaHome size={60}  style={{color:'rgb(70, 148, 179)'}}/>
<h4 style={{fontWeight:'bold'}}>Discover Your Ideal Apartment</h4>
<h4 style={{fontSize:17}}>Find a confortable and stylish apartment that meet your needs and preferences</h4>
    </div>
    <div className='right-choose2'>
<FaBrain size={60} style={{color:'rgb(70, 148, 179)'}} />
<h4 style={{fontWeight:'bold'}}>Experience Smart and Featured-rich Solutions</h4>
<h4 style={{fontSize:17}}>Benefit from our innovative and featured rich approach to real estate</h4>
    </div>
  </div>
    </div>
  )
}

export default Chooses;