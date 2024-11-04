import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bannerImage from '../servicedetails/images/wordpresbannerimg.png'; // Replace with your image path

const WordPress = () => {
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
            Custom <span className="text-black">WordPress Solutions</span> for a <br className="hidden md:block" />
             Shopping Journey with Convenience          </h1>
          <p className="mt-4 md:mt-8 text-md md:text-lg font-markazi">
            Expert WordPress Development Services.
          </p>
          </motion.div>        
        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={imageInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-full md:w-[40%] flex justify-center items-center h-full mt-6 md:mt-0"
        >
            <img 
            src={bannerImage} 
            alt="Banner" 
            className="object-cover h-[230px] mb-12  md:mb-0 lg:h-[340px] w-[300px] lg:w-[420px]" 
          />
        </motion.div>
        </div>

      {/* Text Content Section */}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mt-10 md:mt-14 text-center p-4"
      >        <div>
          <h2 className="text-xl md:text-[30px] font-markazi leading-relaxed mb-4">
            Build, Grow, and Succeed with Professional <br className="hidden md:block"/>
            <span className="text-black">WordPress Solutions</span>
          </h2>
        </div>

        <div className="text-gray-700 text-left font-markazi text-sm md:text-[18px] leading-relaxed max-w-7xl">
          <p>
            PCS supports small and medium sized businesses to conceptualize, design, and develop websites that are user-friendly as well as search engine optimized<br/>
            and social media ready using WordPress. PCS offers custom WordPress theme design and development, custom WordPress plug-in development, or ongoing<br/>
            support for your existing website. PCS WordPress developer / Skilled WordPress experts also have wide range of experience in WordPress CMS, Custom<br/>
            WordPress development, WordPress customization and WordPress website development. Our experienced and dedicated WordPress development team is<br/>
            highly qualified in all aspects of WordPress blog customization and custom theme designing services. PCS strives to focus on the customer and deliver<br/>
            solutions designed around their needs as we possess quality WordPress Developers & Programmers. We have dedicated WordPress development team with<br/>
            extensive experience in WordPress CMS, Custom WordPress development, WordPress customization and WordPress website development, with full <br/>
            functional knowledge base to meet customer expectations with our Offshore Development Center (ODC) services.
          </p>
        </div>
        </motion.div>
        </>
  );
};

export default WordPress;
