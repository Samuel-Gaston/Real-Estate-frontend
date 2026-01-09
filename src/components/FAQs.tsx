import './All.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
const FAQs = () => {
     const variants = {
            hidden:{opacity:0, x:-100},
            visible:{opacity:1, x:0}
             }
              
            const faqs = [
      {
        question: "What documents do I need to sell my properties?",
        answer:
          "You will need proof of ownership, valid identification, property tax records, and any relevant permits or certificates required by local authorities."
      },
      {
        question: "How can I contact a HomeScope agent?",
        answer:
          "You can reach our experienced agents through our contact form, email support, or directly via phone. We’re always happy to assist you."
      },
      {
        question: "How do I search for properties on HomeScope?",
        answer:
          "Use our user-friendly search tools to filter properties by location, price range, type, and features that match your preferences."
      }
    ];
      const [openIndex, setOpenIndex] = useState<number | null>(null);
    
      const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
      };
      
  return (
    <div id='faqs'>
        <div className="w-full max-w-5xl mx-auto px-6 mt-24">

 
  <motion.h4
    className="text-2xl font-bold text-[#4694B3]"
    style={{ marginTop: 100, textAlign: "center", marginBottom: 40 }}
    variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
    Frequently Asked Questions
  </motion.h4>

  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
    <motion.p
      className="text-gray-600 max-w-2xl"
      style={{ marginLeft: 20, marginBottom: 30 }}
     variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}} >
      Find answers to common questions about HomeScope services, property listings,
      and the real estate process. We're here to provide clarity and assist you every
      step of the way.
    </motion.p>
  </div>

 
  <motion.div className="space-y-4 flex flex-wrap justify-center"
    variants={variants}
        initial="hidden"
       whileInView= "visible"
       viewport={{once:false, amount:0.5}}
        transition={{ duration: 0.5}}>
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="border border-gray-200 overflow-hidden shadow-sm rounded-xl"
        style={{ width: "calc(70% - 20px)", padding: 10 }}
      >
        <button
          onClick={() => toggle(index)}
          className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition"
        >
          <span className="font-semibold text-gray-800 cursor-pointer">
            {faq.question}
          </span>

          <span
            className={`transform transition-transform ${
              openIndex === index ? "rotate-180" : ""
            } cursor-pointer`}
          >
            ▼
          </span>
        </button>

      
        <div
          className={`transition-all duration-300 ${
            openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div
            className="overflow-y-auto max-h-48 px-6 pb-6"
            style={{
              backgroundColor: "rgb(70, 148, 179)",
              color: "white",
              padding: 20,
            }}
          >
            <p className="leading-relaxed font-bold">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    ))}
  </motion.div>
</div>
    </div>
  )
}

export default FAQs;