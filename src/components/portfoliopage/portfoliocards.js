import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Lhome from '../portfoliopage/images/Lhome.png';
import WTS from '../portfoliopage/images/wts.png';
import Lecat from '../portfoliopage/images/lecat.png';
import Coollah from '../portfoliopage/images/coollah.png';
import BJMM from '../portfoliopage/images/bjmm.png';
import OfficeChat from '../portfoliopage/images/officechat.png';

const CardComponent = ({ title, technologies, description, imageUrl, bgColor, isImageLeft, url }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, triggerOnce: false });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (inView) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // Delay display by 2 seconds
    } else {
      setIsVisible(false); // Reset visibility when out of view
    }
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className={`w-full max-w-4xl mx-auto rounded-2xl p-4 sm:px-6 lg:px-8 ${bgColor} my-8 overflow-hidden`}
      initial={{ opacity: 0, x: isImageLeft ? 100 : -100 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.2 }}
    >
      <div className={`flex flex-col lg:flex-row items-center ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 w-full p-4"
          whileHover={{ scale: 1.05 }} // Add smooth scaling on hover
          transition={{ duration: 0.3 }} // Adjust timing for smoothness
        >
          <motion.img
            src={imageUrl}
            alt={title}
            className="rounded-lg w-full h-auto object-cover"
            initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* Content Section */}
        <div className="lg:w-1/2 w-full font-katibeh p-4 text-white">
          <motion.h2
            className="text-[30px] font-katibeh   mb-2"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Title: {title}
          </motion.h2>
          <motion.p
            className="mb-2 font-markazi "
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <strong >Technology used :</strong> <span className='text-[14px]'>{technologies}</span>
          </motion.p>
          <motion.p
            className="mb-4  font-markazi"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <strong>Description :</strong> <span className='text-[14px]'>{description}</span>
          </motion.p>
          <motion.button
  className="px-6 py-2 mt-4 bg-white text-gray-800 hover:bg-blue-900 hover:text-white transition-colors duration-1000 ease-in-out"
  initial={{ opacity: 0 }}
  animate={isVisible ? { opacity: 1 } : {}}
  transition={{ duration: 1.2, delay: 1 }}
  onClick={() => window.open(url, '_blank')} // Open URL in a new tab
>
  View Live Site
</motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Main Portfolio Component
const PortfolioCards = () => {
  const projects = [
    {
      title: 'Lhome',
      technologies: 'NextJS, NodeJS, MySQL.',
      description: 'The web application serves as a dynamic hub, enabling clients to explore products and efficiently manage booking sessions, fostering seamless client interaction and showcasing the firm\'s expertise.',
      imageUrl: Lhome,
      bgColor: 'bg-red-500',
      isImageLeft: true,
      url: 'https://www.lhome.co.in/',
    },
    {
      title: 'World Tamil Siragam',
      technologies: 'ReactJs, NodeJs, MongoDB.',
      description: 'A static website created using basic web technologies.',
      imageUrl: WTS,
      bgColor: 'bg-amber-800',
      isImageLeft: false,
      url: 'https://worldtamilsiragam.com/',
    },
    {
      title: 'Lecat',
      technologies: 'HTML,CSS,Bootstrap,React js,Firebase.',
      description: 'Lecat VMobile streamlines quiz creation and student result management. It calculates class averages,providing insightful performance data. Simplifies administrative tasks for efficient academic monitoring',
      imageUrl: Lecat,
      bgColor: 'bg-blue-600',
      isImageLeft: true,
      url: 'https://vmobile-v1.web.app/',
    },
    {
      title: 'Collah',
      technologies: ' HTML, CSS, JavaScript, JQuery, ASP.NET, Bootstrap, ReactJS, NodeJS.',
      description: 'This project is an e-commerce web application .In this Application, the user can book the services like AC and home cleaning services and they can sell their old product .The technology stack for this project are ReactJS and ASP.Net.',
      imageUrl: Coollah,
      bgColor: 'bg-rose-500',
      isImageLeft: false,
      url: 'https://coollah.opusinfiniti.com/',
    },
    {
      title: 'BJMM',
      technologies: ' ReactNative,PHP.',
      description: 'This project is an user maintanance mobile application .In this Application, once the user can apply the unathorized verification by get the app code and that user will authorized while using the app.The technology stack for this project are ReactNative and PHP.',
      imageUrl: BJMM,
      bgColor: 'bg-orange-500',
      isImageLeft: true,
      url: '#',
    },
    {
      title: 'Office Chat',
      technologies: 'ReactJs, NodeJs, MySQL.',
      description: 'Office chat platforms can be as simple as text-based messaging or more complex, offering features like video calls, screen sharing, and integration with project management tools.',
      imageUrl: OfficeChat,
      bgColor: 'bg-green-500',
      isImageLeft: false,
      url: '#',
    },
  ];

  return (
    <div className="bg-gray-800 px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
      {projects.map((project, index) => (
        <CardComponent
          key={index}
          title={project.title}
          technologies={project.technologies}
          description={project.description}
          imageUrl={project.imageUrl}
          bgColor={project.bgColor}
          isImageLeft={project.isImageLeft}
          url={project.url}
        />
      ))}
    </div>
  );
};

export default PortfolioCards;
