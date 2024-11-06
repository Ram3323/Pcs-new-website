import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bannerImage from '../servicedetails/images/mobileapp.png'; // Replace with your image path

const MobileApp = () => {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mt-24 px-4 md:px-10 h-auto md:h-[400px] bg-gradient-to-b from-[#2B95C5] to-[#15485F]">
        {/* Text Section */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -50 }}
          animate={textInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="w-full md:w-[60%] p-4 md:p-8 text-white text-center md:text-left"
        >          <h1 className="text-3xl md:text-[54px] font-katibeh leading-tight">
          Empowering Businesses with <br className="hidden md:block" /> Custom <span className="text-black"> Mobile Apps    </span> 
                  </h1>
          <p className="mt-4 md:mt-8 text-md md:text-lg font-markazi">
          Your Vision, Our Mobile Expertise.
          </p>
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
            className="object-cover h-[230px] mb-12  md:mb-0 lg:h-[330px] w-[300px] lg:w-[380px]" 
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
          Seamless, Intuitive, and Engaging<br className="hidden md:block"/>
            <span className="text-black"> Mobile Solutions </span>
          </h2>
        </div>

        <div className="text-gray-700 text-left font-markazi text-sm md:text-[18px] leading-relaxed text-justify max-w-6xl">
          <p>
          Creating a mobile app is more than just coding; it's about crafting a seamless user experience that resonates with your audience. Our team specializes in understanding your unique vision and transforming it into a powerful mobile application that not only meets your business needs but also delights your users. From concept to launch, we prioritize user-centric design, ensuring that every interaction is intuitive and engaging.

We leverage the latest technologies and trends to develop apps that are both functional and visually appealing. Our iterative development process allows for flexibility and adaptability, ensuring that your app evolves with the changing market demands. We focus on creating responsive designs that work flawlessly across various devices, providing users with a consistent experience, whether they are on a smartphone or tablet.

Our commitment doesn't end at deployment; we offer ongoing support and maintenance to keep your app running smoothly. With a focus on analytics and user feedback, we help you refine your app over time, enhancing features and fixing any issues that may arise. Partner with us to turn your app ideas into reality and establish a strong mobile presence that drives engagement and growth.functional knowledge base to meet customer expectations with our Offshore Development Center (ODC) services.
          </p>
        </div>
        </motion.div>
        </>
  );
};

export default MobileApp;
