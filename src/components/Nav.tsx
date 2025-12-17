import './All.css';
import { useNavigate, } from 'react-router-dom';
import { useState } from 'react';
const Nav = () => {
 const navigate = useNavigate();
 const GoToLogin = () =>{
  navigate("/login");
 }
 
const faqs = [
  {
    question: "What is this HR Management System?",
    answer:
      "A centralized platform for managing employees, departments, salaries, contracts, leaves, and other HR operations."
  },
  {
    question: "How secure is the system?",
    answer:
      "The system uses OTP-based authentication, secure login, and controlled access to protect data."
  },
  {
    question: "What if I forget my password?",
    answer:
      "You can request a password reset link that is sent securely to your email."
  },
  {
    question: "Does the system support multiple departments?",
    answer:
      "Yes. You can manage multiple departments, sites, and positions."
  },
  {
    question: "Can I export HR data?",
    answer:
      "Yes. Reports can be exported in formats such as PDF."
  }
];
  const [openIndex, setOpenIndex] = useState<number | null>(null);



  return (
    <div> 
    
        <div className='overall-Nav bg-gray-900'>
              <div  className='Nav'>
            <div className='logo font-bold' style={{textShadow:'0 0 2px'}}><span style={{fontSize:50, color:'orange'}}>H</span><span style={{fontSize:30}}>R</span><span style={{fontSize:20}}>M</span></div>

            <div className='flex flex-wrap justify-center-safe'>
                <ul>
                <li className='flex flex-wrap justify-center'><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#faq'>FAQs</a></li>
            </ul>
            </div>
         
        </div>
         <div className='button flex flex-wrap justify-end'>
             <button onClick={GoToLogin}>Sign-In</button>
           </div>
       
        <div className='content'>
         <h1 className='text-center text-2xl'><span style={{color:'orange', fontSize:60, fontWeight:'bold'}}>M</span>anage the staffs in your organisation with ease.</h1>
         <p className='text-center'>Build, record and establish an effective human resources management
          system for your staffs.
         </p>
        <div className='flex flex-wrap justify-center'>
           <button onClick={GoToLogin}>Let's go</button>
        </div>
        </div>



        <div id='about' style={{marginBottom:30}}>
        
         
          <div className='card'>
            <div className='one bg-gray-950' >
<p style={{marginTop:30}} className='text-center'>Give out and effective <br /> staffs management with varieties of modules and specifications.</p>
            </div>
            <div className='two bg-gray-950' >
<p style={{marginTop:30}} className='text-center'>Showcases analytics of modules <br />that makes it up through chart leading to well-known records.</p>
            </div>
            <div className='three bg-gray-950'>
<p style={{marginTop:30}} className='text-center'>Provide insights that enable <br /> business decisions to be made on the <br /> human resources department.</p>
            </div>
          </div>
        </div>


  <div id='faq' className="  flex items-center justify-center px-4" style={{height:500}}>
      <section className="w-full max-w-3xl bg-gray-950 rounded-2xl shadow-2xl p-8">
        
        <h2 className="text-3xl font-bold text-center text-white mb-8"style={{marginTop:30}} >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl overflow-hidden"
            style={{height:50}}>
              <button
                className="w-full flex justify-between items-center p-4 text-left
                           bg-gray-950  transition-colors
                           text-white font-medium"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className='text-center bg-gray-950'>{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="p-4 bg-gray-950 text-gray-300 text-sm leading-relaxed text-center">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </section>
    </div>

    

        <div className='footer bg-gray-950'>
          <p>copyright 2025, All rights reserved.</p>
        </div>

    </div>
    </div>
  )
}

export default Nav;