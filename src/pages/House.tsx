import '../components/All.css';
import Banner from '../components/Banner';
import Banneras from '../components/Banneras';
import Chooses from '../components/Chooses';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import FAQs from '../components/FAQs';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaSpinner } from "react-icons/fa";
import { motion } from 'framer-motion';
import axios from 'axios';
type House = {
  id:number;
  name:string;
  description:string;
  location:string;
  image?:string;
  price:string;
}
const House = () => {
   const variants = {
            hidden:{opacity:0, x:-100},
            visible:{opacity:1, x:0}
             }
  
  const navigate = useNavigate();
  
  const GoTo = () =>{
  navigate("/login");
  }
   const [Houses, setHouses] = useState<House[]>([])
   const [loading, setLoading] = useState<boolean>(false);


   const getAllHouses = () =>{
     setLoading(true);
    axios.get("http://localhost:8000/api/houses").then((res) =>{
      setHouses(res.data);
    }).catch((error) => console.error(error))
       .finally(() => {
      setLoading(false);
    });
   }

   useEffect(() =>{
    getAllHouses();
   },[])

  return (
    <div>
    <Banner />

    <div id='Apartment' className='Overall-Card'>
    <br />
    <motion.h1 className='text-center font-bold' style={{marginTop:100, fontSize:20}}
      variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>Property-Type</motion.h1>
    <motion.p className='' style={{marginLeft:50}}
      variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>Explore the available property types</motion.p>
    <motion.ul
      variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
    <li><a><NavLink to="/apartment">Apartment</NavLink></a></li>
    <li><a><NavLink to="/house">House</NavLink></a></li>
    <li><a><NavLink to="/land">Land</NavLink></a></li>
    </motion.ul>
    <p className='text-center' style={{color:'rgb(70, 148, 179)', marginTop:20}}>Available Houses</p>
    <div className='flex flex-wrap justify-center' style={{backgroundColor:'aliceblue'}}>
    <br />
  
 <div className="card">
  {loading ? (
    <div>
      <FaSpinner size={40} className="animate-spin text-blue-500" />
      <p style={{ marginTop: 10 }}>Loading houses...</p>
    </div>
  ) : Houses.length === 0 ? (
    <p className="text-center">No houses available</p>
  ) : (
    Houses.map((d) => (
      <div
        key={d.id}
        className="card-item border-white"
        style={{
          border: "5px solid white",
          backgroundColor: "white",
          marginBottom: 60,
          width: "calc(100%)",
        }}
      >
        {d.image && (
          <img
            src={`data:image/jpeg;base64,${d.image}`}
            width={300}
            height={150}
          />
        )}

        <p className="font-bold text-center" style={{ marginTop: 10 }}>
          {d.name}
        </p>
        <p className="text-center" style={{ fontSize: 13, marginTop: 5, marginBottom: 5 }}>
          {d.description}
        </p>
        <p style={{ marginLeft: 10, textAlign:'center' }}>Location: {d.location}</p>
        <p className="text-center" style={{ marginBottom: 10 }}>
          Price: {d.price} FCFA
        </p>
        <button onClick={GoTo}>Select</button>
      </div>
    ))
  )}
</div>


    </div>
    </div>


    <Chooses />

    <Banneras />

    <FAQs />

    <Footer />
    </div>
  )
}

export default House;