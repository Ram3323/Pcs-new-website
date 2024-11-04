import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../header/images/logo-removebg-preview.png';
import mobileLogo from '../header/images/logohead.png';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

import ServiceLinks from '../header/servicelinks'; // Import ServiceLinks component

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 flex items-center justify-between py-4 p-6 bg-white lg:px-12 shadow-lg z-50 transition-all duration-300 ${
          isScrolled ? 'rounded-full p-3 py-4 mx-8 top-4' : 'top-0'
        }`}
      >
        <div className="flex items-center">
          <img
            src={isScrolled && isMobile ? mobileLogo : logo}
            alt="Logo"
            className="h-12 w-auto mx-0 inline"
          />
          {!isScrolled && !isMobile && (
            <>
              <div className="border-l-2 border-gray-500 h-12 mx-4"></div>
              <div className="text-gray-500 font-bold text-lg">
                <div>Software</div>
                <div>Solutions</div>
              </div>
            </>
          )}
        </div>

        <button
          className="block lg:hidden relative w-8 h-8 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block w-full h-1 bg-black transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-black mt-1 transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-black mt-1 transition-transform duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>

        <div className="hidden lg:flex space-x-16">
          <Link to="/" className="text-black font-semibold hover:text-blue-800">Home</Link>
          <Link to="/aboutbanner" className="text-black font-semibold hover:text-blue-800">About</Link>
          
          {/* Services link with hover effect to display ServiceLinks */}
          <div className="relative group flex justify-center">
  <Link to="#" className="text-black font-semibold hover:text-blue-800">
    Services
  </Link>
  
  {/* ServiceLinks component that appears on hover */}
  <div className="absolute w-[1000px] mt-[20px] left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg p-4 rounded-lg transition-all duration-300">
    <ServiceLinks />
  </div>
</div>


          <Link to="/portfolio" className="text-black font-semibold hover:text-blue-800">Portfolio</Link>
          <Link to="/blog" className="text-black font-semibold hover:text-blue-800">Blog</Link>
        </div>

        <div className="hidden lg:block">
          <button className="bg-blue-950 text-white font-semibold py-2 px-4 text-[16px] rounded-full h-8 w-28 font-marko shadow-2xl flex items-center">
            Contact
            <div className="ml-2 bg-blue-950 h-9 w-9 p-2 rounded-full flex items-center justify-center">
              <span className='text-3xl transition-transform duration-300 '>
                <IoArrowForwardCircleOutline />
              </span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white flex flex-col items-start pl-6 pr-6 shadow-lg z-50 py-4 space-y-4 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ maxHeight: '100vh', overflowY: 'auto' }}
      >
        <div className="flex justify-between items-center w-full">
          <img
            src={mobileLogo}
            alt="Logo"
            className="h-12 w-auto"
          />
          <button
            onClick={() => setIsMenuOpen(false)} 
            className="text-black text-6xl px-2"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col w-full">
          <Link to="/" className="text-black text-xl font-bold py-4 hover:text-blue-800 border-b border-gray-300">Home</Link>
          <Link to="/aboutbanner" className="text-black text-xl font-bold py-4 hover:text-blue-800 border-b border-gray-300">About Us</Link>
          <Link to="/services" className="text-black text-xl font-bold py-4 hover:text-blue-800 border-b border-gray-300">Services</Link>
          <Link to="/portfolio" className="text-black text-xl font-bold py-4 hover:text-blue-800 border-b border-gray-300">Portfolio</Link>
          <Link to="/blog" className="text-black text-xl font-bold py-4 mb-8 hover:text-blue-800 border-b border-gray-300">Blogs</Link>
          <Link
            to="#contact"
            className="bg-blue-950 text-white text-xl font-bold text-center px-4 py-2 rounded-3xl hover:bg-blue-100 hover:text-black transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

    </>
  );
};

export default Header;
