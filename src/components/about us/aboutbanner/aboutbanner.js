// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// import aboutbanner from "../images/aboutbanner.png";
// import AboutIcon from '../abouticon/abouticon.js';
// import AboutFeatures from '../aboutfeatures/aboutfeatures';
// const Aboutbanner = () => {
//   const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   return (
//     <>
//     <div className="bg-gradient-to-b from-[#2B95C5] to-[#15485F]  text-white py- px-8">
//       <div className="container mx-auto px-8 py-8 mt-12 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-10">
        
//         {/* Text Section */}
//         <div className="w-full md:w-1/2 space-y-8">
//         <motion.div
//           ref={textRef}
//           initial={{ opacity: 0, x: -50 }}
//           animate={textInView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 1, staggerChildren: 0.2 }}
//           className=""
//         >     
//           <div>
//             <h2 className="text-3xl text-white font-bold mb-4 font-marko">Our Vision</h2>
//             <p className="text-lg text-gray-300 font-marko">
//               "To be a leading global IT consultancy, driving innovation and delivering cutting-edge technology solutions that empower businesses to thrive in the digital age."
//             </p>
//           </div>
//           <div>
//             <h2 className="text-3xl text-white font-bold mb-4 font-marko mt-6">Our Mission</h2>
//             <p className="text-lg text-gray-300  font-marko">
//               "At Pavitha Consultancy Services, our mission is to provide innovative, high-quality, and customer-focused IT solutions."
//             </p>
            
//           </div>
//           </motion.div> 
//         </div>

//         {/* Image Section */}
//         <div className="w-full md:w-1/3 flex justify-center">
//         <motion.div
//           ref={imageRef}
//           initial={{ opacity: 0, x: 50, scale: 0.9 }}
//           animate={imageInView ? { opacity: 1, x: 0, scale: 1 } : {}}
//           transition={{ duration: 1 }}
//           className=""
//         >
//           <img
//             src={aboutbanner} // Replace with your image path
//             alt="Vision and Mission"
//             className="w-3/4 md:w-full "
//           />
//            </motion.div>
//         </div>
//       </div>
//     </div>
//     <AboutIcon/>
//     <AboutFeatures/>
//     </>
//   );
// };

// export default Aboutbanner;




import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import aboutbanner from '../images/aboutbanner.png';
import AboutIcon from '../abouticon/abouticon.js';
import AboutFeatures from '../aboutfeatures/aboutfeatures';

const Aboutbanner = () => {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <div className="bg-gradient-to-b from-[#2B95C5] to-[#15485F] text-white py-8 px-8 md:px-8">
        <div className="container mx-auto px-4 md:px-8  mt-20 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-10">
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
            <motion.div
              ref={textRef}
              initial={{ opacity: 0, x: -50 }}
              animate={textInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, staggerChildren: 0.2 }}
              className=""
            >     
              <div>
                <h2 className="text-2xl md:text-2xl xl:text-3xl text-white font-bold mb-4 font-marko">Our Vision</h2>
                <p className="text-base md:text-medium xl:text-lg text-gray-300  font-marko">
                  "To be a leading global IT consultancy, driving innovation and delivering cutting-edge technology solutions that empower businesses to thrive in the digital age."
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-2xl xl:text-3xl text-white font-bold mb-4 font-marko mt-12">Our Mission</h2>
                <p className="text-base md:text-medium xl:text-lg text-gray-300 font-marko">
                  "At Pavitha Consultancy Services, our mission is to provide innovative, high-quality, and customer-focused IT solutions."
                </p>
              </div>
            </motion.div> 
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3 flex  md:px-0 justify-center">
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={imageInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1 }}
              className=""
            >
              <img
                src={aboutbanner}
                alt="Vision and Mission"
                className="w-72 h-50 md:w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <AboutIcon />
      <AboutFeatures />
    </>
  );
};

export default Aboutbanner;
