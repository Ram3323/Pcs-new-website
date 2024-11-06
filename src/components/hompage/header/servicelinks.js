import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const services = [
    { 
      title: 'Web Design', 
      to: '/webdesign', 
      description: 'Crafting visually appealing and user-friendly websites to enhance online presence and engagement.' 
    },
    { 
      title: 'Web App',
      to: '/webapp',  
      description: 'A web app is a software application accessed via a web browser, providing interactive functionalities over the internet.' 
    },
    { 
      title: 'Mobile App', 
      to: '/mobileapp', 
      description: 'Create user-friendly mobile apps that enhance user engagement and accessibility.'  
    },
    { 
      title: 'SEO', 
      to: '/seo', 
      description: 'SEO (Search Engine Optimization) enhances a website visibility in search engines to drive organic traffic.'  
    },
    { 
      title: 'WordPress', 
      to: '/wordpress', 
      description: 'WordPress powers websites, blogs, and online stores with flexibility.'  
    },
    { 
      title: 'E-Commerce', 
      to: '/ecommerce', 
      description: 'Online shopping platform connecting buyers and sellers for seamless transactions.'  
    },
];
  
const ServiceLink = ({ closeMenu }) => {  // Accept closeMenu as a prop
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-6 p-8">
      {services.map((service, index) => (
        <Link 
          to={service.to} 
          key={index} 
          className="relative" 
          onMouseEnter={() => setHovered(index)} 
          onMouseLeave={() => setHovered(null)}
          onClick={closeMenu} // Call closeMenu when the link is clicked
        >
          <div
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
              hovered === index ? 'bg-blue-100' : 'bg-white'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl px-2 border">↗</span>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>

            {/* Render the arrow only when hovered */}
            {hovered === index && (
              <div className="absolute bottom-4 right-4 flex items-center py-2 px-4 rounded-full space-x-1 bg-blue-300">
                <span className="text-sm"><FaArrowRight /></span>
              </div>
            )}

            {hovered === index && service.description && (
              <div className="my-3 text-sm text-gray-600">
                {service.description}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServiceLink;
