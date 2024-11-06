import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bannerImage from '../servicedetails/images/web-app.png'; // Replace with your image path

const WebApp = () => {
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
        >
          <h1 className="text-3xl md:text-[54px] font-katibeh leading-tight">
            Future-Ready <span className="text-black">Web Apps</span> Built<br className="hidden md:block" />
            for Growth
          </h1>
          <p className="mt-4 md:mt-8 text-md md:text-lg font-markazi">
            Your Vision, Our Web App Expertise.
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
            className="object-cover h-[230px] mb-12 md:mb-0 lg:h-[340px] w-[300px] lg:w-[450px]"
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
      >
        <div>
          <h2 className="text-xl md:text-[30px] font-markazi leading-relaxed mb-4">
            Streamlining Success with Powerful<br className="hidden md:block" />
            <span className="text-black">Web Applications</span>
          </h2>
        </div>

        <div className="text-gray-700 text-left font-markazi text-sm md:text-[18px] text-justify leading-relaxed max-w-6xl">
          <p>
            Our web applications are designed to help businesses streamline operations, engage users, and drive growth through powerful, tailored solutions. Built with scalability and flexibility in mind, each web app we create is crafted to meet the unique needs of your business while adapting seamlessly to the digital landscape. From intuitive interfaces to secure, high-performing backends, we prioritize both functionality and user experience to ensure your web app delivers real value.

            Our process begins with understanding your objectives, allowing us to design a solution that aligns with your goals and enhances productivity. Using the latest technologies and development practices, we create applications that are not only visually engaging but also optimized for performance and speed. With a commitment to quality, we rigorously test each feature to ensure reliability and security, providing a product that users can trust.

            Beyond launch, we offer ongoing support and maintenance to keep your web app running smoothly as your business grows. We’re dedicated to continuous improvement, analyzing user feedback and implementing enhancements to keep your app at the forefront of your industry. Partner with us to build a web app that fuels efficiency, fosters connection, and scales with your success.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default WebApp;
