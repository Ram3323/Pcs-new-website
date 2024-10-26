

//   import React from "react";
//   import aboutimage from "../about/images/company.jpg";
//   import { IoArrowForwardCircleOutline } from 'react-icons/io5';
//   import { motion } from 'framer-motion'; // Import motion from framer-motion

//   const About = () => {
//     // Define animation variants
//     const cardVariants = {
//       initial: {
//         opacity: 0,
//         rotateY: 180,
//         scale: 0.8,
//       },
//       animate: {
//         opacity: 1,
//         rotateY: 0,
//         scale: 1,
//         transition: {
//           duration: 0.8,
//           ease: "easeInOut",
//         },
//       },
//     };

//     return (
//       <section className="bg-white py-10 md:py-20 px-6 md:px-16">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
//           {/* Left Section - Text */}
//           <div className="w-full md:w-1/2 md:pr-4">
//             <div className="border-t-[6px] md:border-t-[10px] border-blue-950 w-[120px] md:w-[190px] mb-4 md:mb-8"></div>
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">WHO WE ARE!..</h2>
//             <p className="text-md md:text-lg text-gray-700 mb-4 md:mb-6">
//               We build greater futures through innovation and collective knowledge.
//             </p>
//             <p className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-loose text-justify mb-4 md:mb-6">
//               We offer Website Development and Hosting Services at affordable prices. We
//               develop the Website and take over the responsibility of maintaining your
//               Website. PCS offers the most effective and result-oriented Digital / Online
//               Marketing Strategies for clients to establish a good image of their brand in
//               the Digital and Social Media.
//             </p>
//             <div className="hidden lg:block">
//               <button className="bg-blue-950 text-white font-semibold py-2 px-8 text-[14px] md:text-[16px] rounded-full h-8 w-28 shadow-2xl flex items-center">
//                 Contact
//                 <div className="bg-blue-950 h-9 w-9 p-2 rounded-full flex items-center justify-center">
//                   <span className="text-2xl md:text-3xl transition-transform duration-300">
//                     <IoArrowForwardCircleOutline />
//                   </span>
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* Right Section - Image with Card Background */}
//           <motion.div
//             className="w-full md:w-1/2 md:pl-20 lg:pl-36 flex justify-center relative"
//             variants={cardVariants}
//             initial="initial"
//             animate="animate"
//           >
//             {/* Gray Background Card (Hidden on Mobile) */}
//             <div className="hidden md:block bg-gray-200 shadow-xl w-[320px] h-[250px] md:w-[250px] md:h-[350px] lg:w-[280px] lg:h-[400px] xl:w-[450px] xl:h-[470px]">
//               <img
//                 src={aboutimage}
//                 alt="About Us"
//                 className="shadow-lg w-[220px] h-[150px] md:w-[230px] md:h-[180px] md:right-20 xl:right-24 lg:w-[350px] lg:h-[230px] xl:w-[450px] xl:h-[300px] relative z-10 top-20"
//               />
//             </div>

//             {/* Image (Always Visible and Centered on Mobile) */}
//             <img
//               src={aboutimage}
//               alt="About Us"
//               className="md:hidden shadow-lg w-[280px] h-[180px]"  /* Visible and centered on mobile */
//             />

//             {/* Navy Blue Lines (Hidden on Mobile) */}
//             <div className="hidden md:block absolute right-10 md:right-16 md:right-20 xl:right-20 lg:top-48 xl:top-56 md:top-44 w-[150px] h-[120px] lg:w-[200px] lg:h-[150px] xl:w-[250px] xl:h-[200px] border-r-[6px] border-b-[6px] md:border-r-[10px] md:border-b-[10px] border-blue-950"></div>
//           </motion.div>
//         </div>
//       </section>
//     );
//   };

//   export default About;



// import React, { useEffect, useState } from "react";
// import aboutimage from "../about/images/company.jpg";
// import { IoArrowForwardCircleOutline } from 'react-icons/io5';
// import { motion } from 'framer-motion';

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Effect to detect scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY; // Get the vertical scroll position
//       if (offset > 100) { // Change this threshold based on when you want the animation to trigger
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Define animation variants
//   const cardVariants = {
//     initial: {
//       opacity: 0,
//       rotateY: 180,
//       scale: 0.8,
//     },
//     animate: {
//       opacity: 1,
//       rotateY: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <section className="bg-white py-10 md:py-20 px-6 md:px-16">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
//         {/* Left Section - Text */}
//         <div className="w-full md:w-1/2 md:pr-4">
//           <div className="border-t-[6px] md:border-t-[10px] border-blue-950 w-[120px] md:w-[190px] mb-4 md:mb-8"></div>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">WHO WE ARE!..</h2>
//           <p className="text-md md:text-lg text-gray-700 mb-4 md:mb-6">
//             We build greater futures through innovation and collective knowledge.
//           </p>
//           <p className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-loose text-justify mb-4 md:mb-6">
//             We offer Website Development and Hosting Services at affordable prices. We
//             develop the Website and take over the responsibility of maintaining your
//             Website. PCS offers the most effective and result-oriented Digital / Online
//             Marketing Strategies for clients to establish a good image of their brand in
//             the Digital and Social Media.
//           </p>
//           <div className="hidden lg:block">
//             <button className="bg-blue-950 text-white font-semibold py-2 px-8 text-[14px] md:text-[16px] rounded-full h-8 w-28 shadow-2xl flex items-center">
//               Contact
//               <div className="bg-blue-950 h-9 w-9 p-2 rounded-full flex items-center justify-center">
//                 <span className="text-2xl md:text-3xl transition-transform duration-300">
//                   <IoArrowForwardCircleOutline />
//                 </span>
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Right Section - Image with Card Background */}
//         <motion.div
//           className="w-full md:w-1/2 md:pl-20 lg:pl-36 flex justify-center relative"
//           variants={cardVariants}
//           initial="initial"
//           animate={isVisible ? "animate" : "initial"} // Change animation based on scroll
//         >
//           {/* Gray Background Card (Hidden on Mobile) */}
//           <div className="hidden md:block bg-gray-200 shadow-xl w-[320px] h-[250px] md:w-[250px] md:h-[350px] lg:w-[280px] lg:h-[400px] xl:w-[450px] xl:h-[470px]">
//             <img
//               src={aboutimage}
//               alt="About Us"
//               className="shadow-lg w-[220px] h-[150px] md:w-[230px] md:h-[180px] md:right-20 xl:right-24 lg:w-[350px] lg:h-[230px] xl:w-[450px] xl:h-[300px] relative z-10 top-20"
//             />
//           </div>

//           {/* Image (Always Visible and Centered on Mobile) */}
//           <img
//             src={aboutimage}
//             alt="About Us"
//             className="md:hidden shadow-lg w-[280px] h-[180px]"  /* Visible and centered on mobile */
//           />

//           {/* Navy Blue Lines (Hidden on Mobile) */}
//           <div className="hidden md:block absolute right-10 md:right-16 md:right-20 xl:right-20 lg:top-48 xl:top-56 md:top-44 w-[150px] h-[120px] lg:w-[200px] lg:h-[150px] xl:w-[250px] xl:h-[200px] border-r-[6px] border-b-[6px] md:border-r-[10px] md:border-b-[10px] border-blue-950"></div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React, { useEffect, useState } from "react";
import aboutimage from "../about/images/company.jpg";
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Effect to detect scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY; // Get the vertical scroll position
      if (offset > 100) { // Change this threshold based on when you want the animation to trigger
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define animation variants for the card
  const cardVariants = {
    initial: {
      opacity: 0,
      rotateY: 180,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  // Define animation variants for text with stagger effect
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20, // Move down
    },
    animate: (i) => ({
      opacity: 1,
      y: 0, // Move to original position
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: i * 0.2, // Stagger effect
      },
    }),
  };

  return (
    <section className="bg-white py-10 md:py-20 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 md:pr-4">
          <div className="border-t-[6px] md:border-t-[10px] border-blue-950 w-[120px] md:w-[190px] mb-4 md:mb-8"></div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6"
            variants={textVariants}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            custom={0} // Index for stagger
          >
            WHO WE ARE!..
          </motion.h2>
          <motion.p
            className="text-md md:text-lg text-gray-700 mb-4 md:mb-6"
            variants={textVariants}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            custom={1} // Index for stagger
          >
            We build greater futures through innovation and collective knowledge.
          </motion.p>
          <motion.p
            className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-loose text-justify mb-4 md:mb-6"
            variants={textVariants}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            custom={2} // Index for stagger
          >
            We offer Website Development and Hosting Services at affordable prices. We
            develop the Website and take over the responsibility of maintaining your
            Website. PCS offers the most effective and result-oriented Digital / Online
            Marketing Strategies for clients to establish a good image of their brand in
            the Digital and Social Media.
          </motion.p>
          <div className="hidden lg:block">
            <button className="bg-blue-950 text-white font-semibold py-2 px-8 text-[14px] md:text-[16px] rounded-full h-8 w-28 shadow-2xl flex items-center">
              Contact
              <div className="bg-blue-950 h-9 w-9 p-2 rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl transition-transform duration-300">
                  <IoArrowForwardCircleOutline />
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Section - Image with Card Background */}
        <motion.div
          className="w-full md:w-1/2 md:pl-20 lg:pl-36 flex justify-center relative"
          variants={cardVariants}
          initial="initial"
          animate={isVisible ? "animate" : "initial"} // Change animation based on scroll
        >
          {/* Gray Background Card (Hidden on Mobile) */}
          <div className="hidden md:block bg-gray-200 shadow-xl w-[320px] h-[250px] md:w-[250px] md:h-[350px] lg:w-[280px] lg:h-[400px] xl:w-[450px] xl:h-[470px]">
            <img
              src={aboutimage}
              alt="About Us"
              className="shadow-lg w-[220px] h-[150px] md:w-[230px] md:h-[180px] md:right-20 xl:right-24 lg:w-[350px] lg:h-[230px] xl:w-[450px] xl:h-[300px] relative z-10 top-20"
            />
          </div>

          {/* Image (Always Visible and Centered on Mobile) */}
          <img
            src={aboutimage}
            alt="About Us "
            className="md:hidden shadow-lg w-[280px] h-[180px]"  /* Visible and centered on mobile */
          />

          {/* Navy Blue Lines (Hidden on Mobile) */}
          <div className="hidden md:block absolute right-10 md:right-16 md:right-20 xl:right-20 lg:top-48 xl:top-56 md:top-44 w-[150px] h-[120px] lg:w-[200px] lg:h-[150px] xl:w-[250px] xl:h-[200px] border-r-[6px] border-b-[6px] md:border-r-[10px] md:border-b-[10px] border-blue-950"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
