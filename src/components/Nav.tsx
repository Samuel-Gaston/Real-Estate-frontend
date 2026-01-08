import './All.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Nav = () => {
 const [open, setOpen] = useState(false);



  return (
    <div>

  
    <nav className="w-full bg-white shadow-md px-6 py-4" style={{padding:10, fontFamily:"'Times New Roman', Times, serif", position:'fixed'}}>
    <div className="max-w-7xl mx-auto flex items-center justify-between">

      
        <div className="text-2xl font-bold text-[#4694B3]">
         <p style={{fontSize:30}}> HomeScope</p>
        </div>

    
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        style={{cursor:'pointer'}}>
          ☰
        </button>

      
        <ul
          className={`
            md:flex md:items-center md:gap-8
            absolute md:static
            bg-white md:bg-transparent
            w-full md:w-auto
            left-0 top-20
            p-6 md:p-0
            transition-all duration-300
            ${open ? "block" : "hidden"}
            md:block
          `}
        >
          <li><a className="block py-2 hover:text-[#4694B3]" href="/">Home</a></li>
          <li><a className="block py-2 hover:text-[#4694B3]" href="#Apartment">Types</a></li>
          <li><a className="block py-2 hover:text-[#4694B3]" href="#choose">About Us</a></li>
          <li><a className="block py-2 hover:text-[#4694B3]" href="#faqs">FAQs</a></li>

         
          <li className="mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-[#4694B3]"
           style={{padding:2, textAlign:'center', backgroundColor:'rgb(70, 148, 179)', borderRadius:60, color:'white'}} />
          </li>

         
          <li className="mt-4 md:hidden">
            <button className="w-full bg-[#4694B3] text-white py-2 rounded-full" style={{padding:7, marginTop:20, marginBottom:20}}>
            <NavLink to="/login">Sign-In</NavLink>
            </button>
          </li>
        </ul>

       
        <div className="hidden md:block">
          <button className="bg-[#4694B3] text-white px-6 py-2 hover:opacity-90" style={{padding:7, marginRight:20, borderRadius:5}}>
          <NavLink to="/login">Sign-In</NavLink>
          </button>
        </div>

      </div>
    </nav>
     

    </div>
  )
}

export default Nav;