import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bannerImage from '../servicedetails/images/ecommerce_website_development-removebg-preview.png'; // Replace with your image path

const Ecommerce = () => {
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
          Empowering Your <span className="text-black"> Shopping Journey</span><br className="hidden md:block" />
          with Convenience                </h1>
          <p className="mt-4 md:mt-8 text-md md:text-lg font-markazi">
          Shop the Latest Styles and Innovations          </p>
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
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mt-10 md:mt-14 text-center p-4"
      >        <div>
          <h2 className="text-xl md:text-[30px] font-markazi leading-relaxed mb-4">
          Your One-Stop Destination for<br className="hidden md:block"/>
            <span className="text-black"> Quality Products </span>
          </h2>
        </div>

        <div className="text-gray-700 text-left font-markazi text-sm text-justify md:text-[18px] leading-relaxed max-w-6xl">
          <p>
          In the fast-paced world of eCommerce, providing a seamless shopping experience is essential for attracting and retaining customers. Our platform is designed to offer a user-friendly interface that makes browsing and purchasing products effortless. With a diverse range of high-quality items, we cater to every taste and need, ensuring that our customers can find exactly what they are looking for.

We prioritize convenience and accessibility, allowing shoppers to explore our extensive inventory from the comfort of their homes or on the go. Our streamlined checkout process is quick and secure, offering multiple payment options to suit every preference. Additionally, we provide detailed product descriptions, customer reviews, and high-resolution images to help shoppers make informed decisions.

Customer satisfaction is at the heart of our business. Our dedicated support team is available to assist with any inquiries or concerns, ensuring a positive shopping experience from start to finish. We also offer fast shipping and easy returns, reinforcing our commitment to quality service. By combining exceptional products with an engaging shopping experience, we empower our customers to discover new favorites and enhance their lives through the convenience of online shopping.
</p>
        </div>
        </motion.div>
        </>
  );
};

export default Ecommerce;
