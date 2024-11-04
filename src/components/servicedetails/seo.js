import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bannerImage from '../servicedetails/images/seo.png'; // Replace with your image path

const SEO = () => {
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
          Drive Quality Traffic with<br className="hidden md:block" /><span className="text-black">Cutting-Edge SEO </span>  Techniques 
     </h1>
          <p className="mt-4 md:mt-8 text-md md:text-lg font-markazi">
          Your Path to Dominating Search Engines.          </p>
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
          Elevate Your Brand with Tailored <br className="hidden md:block"/>
            <span className="text-black">SEO Solutions </span>
          </h2>
        </div>

        <div className="text-gray-700 text-left font-markazi text-sm md:text-[18px] leading-relaxed max-w-6xl">
          <p>
          In today's digital landscape, effective SEO is essential for businesses looking to enhance their online presence and attract targeted traffic. Our comprehensive SEO strategies are designed to improve your website's visibility on search engines, ensuring that your brand stands out in a crowded market. We begin with an in-depth analysis of your current online footprint, identifying key opportunities and areas for improvement.

By conducting thorough keyword research, we target the phrases and terms that potential customers are searching for, allowing us to optimize your content accordingly. Our approach goes beyond just keywords; we focus on creating high-quality, engaging content that resonates with your audience and encourages them to take action. Additionally, we implement on-page and off-page SEO techniques, enhancing your site's structure, loading speed, and backlink profile to improve search engine rankings.

Our commitment to continuous monitoring and optimization ensures that your SEO efforts remain effective over time. We provide detailed analytics and reports, allowing you to track your progress and understand the impact of our strategies. With our expertise in SEO, we help you build a strong online foundation that drives organic traffic, increases conversions, and ultimately boosts your bottom line. Partner with us to navigate the complexities of SEO and position your business for long-term success.</p>
        </div>
        </motion.div>
        </>
  );
};

export default SEO;
