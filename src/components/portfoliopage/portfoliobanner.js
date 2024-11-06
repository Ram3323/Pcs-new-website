import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bannerImage from '../portfoliopage/images/portfolio.png'; // Replace with your image path
import Portfolio from '../hompage/portfolio/portfolio';
import PortfolioCards from './portfoliocards';

const PortfolioBanner = () => {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-4 mt-24 md:px-10 h-auto md:h-[400px] bg-gradient-to-b from-[#2B95C5] to-[#15485F]">
        {/* Text Section */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -50 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="w-full md:w-[60%] p-4 md:p-8 text-white text-center md:text-left"
        >          <h1 className="text-3xl md:text-[54px] font-katibeh leading-tight">
          Empowering  <span className="text-black">  Innovation</span> with <br className="hidden md:block" />
        
          <span className="text-black">  Technology</span> Solutions.</h1>
          <p className="mt-4 md:mt-8 text-md md:text-lg font-markazi">
          Showcasing innovation, expertise, and growth   </p>
          </motion.div>
        
        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={imageInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-full md:w-[40%] flex justify-center items-center h-full mt-6 md:mt-0"
        >          <img 
            src={bannerImage} 
            alt="Banner" 
            className="object-cover h-[230px] mb-12  md:mb-0 lg:h-[340px] w-[300px] lg:w-[420px]" 
          />
        </motion.div>
        </div>

      {/* Text Content Section */}
            
     <PortfolioCards/>
       
      
        </>
  );
};

export default PortfolioBanner;
