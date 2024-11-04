import React from 'react';
import aboutbanner from "../images/aboutbanner.png";
import AboutIcon from '../abouticon/abouticon.js';
import AboutFeatures from '../aboutfeatures/aboutfeatures';
const Aboutbanner = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-blue-400 to-blue-900 text-white py- px-8">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl text-white font-bold mb-4 font-marko">Our Vision</h2>
            <p className="text-lg text-gray-300 font-marko">
              "To be a leading global IT consultancy, driving innovation and delivering cutting-edge technology solutions that empower businesses to thrive in the digital age."
            </p>
          </div>
          <div>
            <h2 className="text-3xl text-white font-bold mb-4 font-marko ">Our Mission</h2>
            <p className="text-lg text-gray-300  font-marko">
              "At Pavitha Consultancy Services, our mission is to provide innovative, high-quality, and customer-focused IT solutions."
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={aboutbanner} // Replace with your image path
            alt="Vision and Mission"
            className="w-3/4 md:w-full "
          />
        </div>
      </div>
    </div>
    <AboutIcon/>
    <AboutFeatures/>
    </>
  );
};

export default Aboutbanner;
