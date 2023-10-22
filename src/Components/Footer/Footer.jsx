import React from 'react'
import '../Footer/Footer.css'
import { FaFacebookF,FaYoutube,FaEnvelope, FaMapMarkerAlt,FaPhone , FaInstagram,FaTiktok  } from "react-icons/fa";



function Footer() {
  return (
    <footer>
   <div className='google-map mb-5'>
      <iframe src="https://maps.google.com/maps?q=santasi&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
      </div>
         <div class="row">
    <div class="col col-6">
      <h3>Contacts <div class="underline"><span></span></div></h3>
      <p><FaEnvelope />gyamfiagyemang999@gmail.com</p>
      <p><FaPhone />0542353326</p>
      <p><FaMapMarkerAlt />Santasi, Kumasi, Ghana</p>
      <div class="help-line">
       
      </div>
    </div>

    <div class="col col-6 ">
      <h3>Follow Us<div class="underline"><span></span></div></h3>

      <div class="social-icons flex gap-4">
         <a className="w-12-h-12 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-red-500 cursor-pointer duration-300" href="https://web.facebook.com/profile.php?id=61551890427260"><FaFacebookF /></a>
         <a className="w-12-h-12 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-red-500 cursor-pointer duration-300" href="https://www.instagram.com/agyemang_gyamf.i/"><FaInstagram/></a>
         <a className="w-12-h-12 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-red-500 cursor-pointer duration-300" href="https://www.tiktok.com/@agyemangdev"><FaTiktok/></a>
      </div>
    </div>
   
  </div>
  <hr></hr>
  <p class="copyright">© 2023 Agyemang's Portfolio Website - All Rights Reserved.</p>
  <p class="pb-5 creation ">Site was created by    
  <a href="https://linktr.ee/agyemang166" className='font-pFonts text-[10px] text-decoration-none text-warning'>AgyemangDEV</a> 
  
  </p>
 
  
    </footer>
  )
}

export default Footer
