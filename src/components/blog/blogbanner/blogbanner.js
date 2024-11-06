import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Blogimages from '../blogimages/blogimages';

const Blogbanner = () => {
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
          className="w-full   text-white text-center "
        >          <h1 className="text-3xl md:text-[54px] top-4 font-katibeh leading-tight">
          The <span className="text-black"> Faces</span>
          <span className="text-white">  and</span> <span className="text-black"> places   </span> of pcs       </h1>
          <p className="mt-4 md:mt-8 text-md md:text-lg font-markazi">
          Discover snapshots from our journey, showcasing teamwork, achievements,<br/>
and the \vibrant culture that drives our success.        </p>
          </motion.div>
        
     
        </div>

     <Blogimages/>
        </>
  );
};

export default Blogbanner;
