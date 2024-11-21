import React from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
function ContactUs() {
  return (
    <div className="flex justify-between">
      <img src="/contact_us.jpg" alt="contact-image" style={{ height: "88vh" }} className="rounded-full px-12 py-4"></img>
      <div className="flex flex-col px-44 mt-16 space-y-11 w-full">

//         <h1 className='text-5xl text-yellow-400 py-6'>Contact Us</h1>
//         <h2 className="text-2xl ">

        <h1 className='text-5xl text-yellow-400 py-6 font-serif '
        style={{
          background: "linear-gradient(45deg, rgb(255, 204, 0), rgb(139, 69, 19))",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}>Contact Us</h1>
        <h2 className="text-2xl">
    <span className="text-yellow-400 flex "><PiPhoneCallFill /></span> 
          
//     <span className="text-yellow-100">Phone no:  </span> 

    <span className="text-xl">+91 98998 99999</span>
  </h2>

  <h2 className="text-2xl">
    <span className="text-yellow-400"> <CgWebsite /> </span> 
    <span className="text-xl">www.spicesymphony.com</span>
  </h2>

  <h2 className="text-2xl">
    <span className="text-yellow-400"><MdEmail />  </span> 
    <span className="text-xl">spicesymphony@gmail.com</span>
  </h2>

  <h2 className="text-2xl">
    <span className="text-yellow-400"><IoLocationSharp />  </span> 
    <span className="text-xl">123 Anywhere ST., Any City, ST 12345</span>
  </h2>
      </div>
    </div>

  );
}

export default ContactUs;
