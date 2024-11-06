import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bannerImage from '../servicedetails/images/webdesign.png';

const WebDesign = () => {
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
          Innovative  <span className="text-black">Web Designs</span> for a <br className="hidden md:block" />
          Lasting Impressions </h1>
          <p className="mt-4 md:mt-8 text-md md:text-lg font-markazi">
          Designing Digital Excellence.          </p>
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
            className="object-cover h-[230px] mb-12  md:mb-0 lg:h-[360px] w-[300px] lg:w-[450px]" 
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
          Elevate Your Online Presence with<br className="hidden md:block"/>
            <span className="text-black"> Impactful Design</span>
          </h2>
        </div>

        <div className="text-gray-700 text-left font-markazi text-sm md:text-[18px] leading-relaxed text-justify max-w-6xl">
          <p>
          We bring your digital vision to life with captivating, functional, and user-friendly web designs that leave a lasting impression. Our team of expert designers and developers are dedicated to creating websites that not only look stunning but also provide an intuitive, seamless user experience. From responsive layouts to optimized load speeds, we focus on every detail to ensure your website performs flawlessly across all devices.

We believe that every brand has a unique story, and our goal is to express that story through innovative design that resonates with your audience. Whether you're launching a new site or looking to refresh an existing one, our custom-tailored approach ensures your website aligns with your brand identity, business goals, and the expectations of your customers.

Partner with us to transform your online presence into a powerful asset. With a blend of creativity, technical expertise, and a user-centered approach, we build websites that drive engagement, foster trust, and convert visitors into loyal customers. </p>
        </div>
        </motion.div>
        </>
  );
};

export default WebDesign;
