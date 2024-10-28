import React from 'react';
import FotterImage from '../footer/images/logo.png';
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo and Company Name */}
          <div className="items-center mb-4  mt-8 md:mb-0 w-full md:w-1/4">
            <div className="w-20 h-20   flex items-center justify-center mr-3">
              {/* <span className="text-blue-900 font-bold text-xl">PCS</span> */}
              <img src={FotterImage} alt='footerlogo image'></img>
            </div>
            <span className="text-[40px] font-bold">PCS</span>
          </div>

          {/* Links Column */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-marko text-[20px]">Links</h3>
            <div className="w-[60px] h-[1px] bg-[#D9D9D9] mt-2"></div>

            <ul className='font-katibeh  text-[#D9D9D9] mt-3'>
              {['Home', 'About', 'Services', 'Portfolio', 'Blogs'].map((item) => (
                <li key={item} className="mb-1">
                  <a href="#" className="hover:text-gray-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-marko   text-[20px]">Our Services</h3>
            <div className="w-[120px] h-[1px] bg-[#D9D9D9] mt-2"></div>

            <ul className='font-katibeh text-[#D9D9D9] mt-3'>
              {['Web design', 'Web app', 'Mobile app', 'Wordpress', 'SEO', 'E-Commerce'].map((service) => (
                <li key={service} className="mb-1">
                  <a href="#" className="hover:text-gray-300">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="w-full  md:w-1/4 mb-4 md:mb-0">
  <h3 className="font-marko text-[20px]">Find us on social media</h3>
  <div className="w-[180px] h-[1px] bg-[#D9D9D9] mt-2"></div>

  <div className="font-katibeh text-[18px] text-[#D9D9D9] mt-3 space-y-2">
    <a href="#" className="flex items-center hover:text-gray-300">
      <FiInstagram  className="mr-2" />
      Instagram
    </a>
    <a href="#" className="flex items-center hover:text-gray-300">
      <FiFacebook  className="mr-2" />
      Facebook
    </a>
    <a href="#" className="flex items-center hover:text-gray-300">
      <BsTwitterX  className="mr-2" />
      Twitter
    </a>
    <a href="#" className="flex items-center hover:text-gray-300">
      <FiInstagram className="mr-2" />
      LinkedIn
    </a>
  </div>
</div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center  text-sm">
        <div className="w-full h-[1px] bg-[#D9D9D9] mb-4 mx-auto mt-2"></div>

          <p>&copy; 2024 PCS Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
