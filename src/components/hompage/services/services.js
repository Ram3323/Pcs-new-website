// import React, { useState, useEffect, useRef } from 'react';
// import Design from '../services/images/3159310.png';
// import Web from '../services/images/webapp.png';
// import Ecom from '../services/images/e-com.png';
// import Mobile from '../services/images/mobileapp.png';
// import Seo from '../services/images/seo.png';
// import Wordpress from '../services/images/wordpress.png';
// import { IoArrowForwardCircleOutline } from "react-icons/io5";

// const serviceData = [
//   {
//     title: 'Web Design',
//     description: 'Web design encompasses the planning and creation of visually engaging, user-friendly websites. It involves a blend of aesthetic elements, such as layout, colors, and functional aspects like navigation and responsiveness.',
//     bgColor: 'bg-teal-100',
//     borderb: 'border-b-8 border-teal-700',
//     bgColor2: 'bg-teal-200',
//     iconSrc: Design,
//   },
//   {
//     title: 'Web App',
//     description: 'A web app (web application) is a software application that runs on a web browser rather than being installed on a device. It allows users to interact with features and data over the internet.',
//     bgColor: 'bg-orange-100',
//     borderb: 'border-b-8 border-orange-700',
//     bgColor2: 'bg-orange-200',
//     iconSrc: Web,
//   },
//   {
//     title: 'Mobile App',
//     description: 'Mobile applications have transformed how we access services, offering users seamless interaction and functionality on-the-go, tailored for convenience and efficiency.',
//     bgColor: 'bg-blue-100',
//     borderb: 'border-b-8 border-blue-700',
//     bgColor2: 'bg-blue-200',
//     iconSrc: Mobile,
//   },
//   {
//     title: 'SEO',
//     description: 'Search Engine Optimization (SEO) is the process of enhancing a website visibility on search engines like Google. By optimizing content, improving site structure, and building quality backlinks.',
//     bgColor: 'bg-purple-100',
//     borderb: 'border-b-8 border-purple-700',
//     bgColor2: 'bg-purple-200',
//     iconSrc: Seo,
//   },
//   {
//     title: 'WordPress',
//     description: 'WordPress is a versatile content management system (CMS) that enables users to effortlessly create, manage, and customize websites without needing extensive coding skills.',
//     bgColor: 'bg-green-100',
//     borderb: 'border-b-8 border-green-700',
//     bgColor2: 'bg-green-200',
//     iconSrc: Wordpress,
//   },
//   {
//     title: 'E-Commerce',
//     description: 'E-Commerce refers to the buying and selling of goods and services over the internet, providing consumers with the convenience of shopping from anywhere at any time.',
//     bgColor: 'bg-red-100',
//     borderb: 'border-b-8 border-red-700',
//     bgColor2: 'bg-red-200',
//     iconSrc: Ecom,
//   },
// ];


// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const itemsPerPage = 2;
  
//   // Refs for sections to observe
//   const leftSectionRef = useRef(null);
//   const rightSectionRef = useRef(null);

//   // Animation state
//   const [animateLeft, setAnimateLeft] = useState(false);
//   const [animateRight, setAnimateRight] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             if (entry.target === leftSectionRef.current) {
//               setAnimateLeft(true);
//             }
//             if (entry.target === rightSectionRef.current) {
//               setAnimateRight(true);
//             }
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (leftSectionRef.current) {
//       observer.observe(leftSectionRef.current);
//     }
//     if (rightSectionRef.current) {
//       observer.observe(rightSectionRef.current);
//     }

//     return () => {
//       if (leftSectionRef.current) {
//         observer.unobserve(leftSectionRef.current);
//       }
//       if (rightSectionRef.current) {
//         observer.unobserve(rightSectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const maxIndex = serviceData.length - (isMobile ? 1 : itemsPerPage);
//         return prevIndex >= maxIndex ? 0 : prevIndex + (isMobile ? 1 : itemsPerPage);
//       });
//     }, 4000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isMobile, itemsPerPage]);

//   const totalDots = Math.ceil(serviceData.length / (isMobile ? 1 : itemsPerPage));

//   return (
//     <div>
//       <div className="text-center ">
//         <h3 className="font-marko text-[24px] inline-block">Our Services</h3>
//         <div className="w-[120px] h-[2px] bg-[#D9D9D9] mx-auto mt-2"></div>
//       </div>
//       <div className="min-h-screen bg-white overflow-hidden">
//         <div className="flex flex-wrap p-8 md:p-24 lg:flex-nowrap lg:space-x-8 flex-col lg:flex-row">
          
//           {/* Left Section */}
//           <div
//             ref={leftSectionRef}
//             className={`flex flex-col items-start space-y-6 text-left w-full lg:w-1/2 transition-all duration-1000 ease-in-out transform ${
//               animateLeft ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
//             }`}
//           >
//             <h1 className="text-[24px] 2xl:text-[28px] mt-12 font-marko mb-4">
//               We are giving you perfect solutions <br />with our services
//             </h1>
//             <button className="bg-blue-950 text-white py-2 px-4 text-[16px] rounded-full h-8 w-28 font-marko shadow-2xl flex items-center">
//               Explore
//               <div className="ml-2 bg-blue-950 h-9 w-9 p-2 rounded-full flex items-center justify-center">
//                 <span className="text-3xl transform -rotate-45 transition-transform duration-300 hover:rotate-12">
//                   <IoArrowForwardCircleOutline />
//                 </span>
//               </div>
//             </button>
//           </div>

//           {/* Right Section - Services Carousel */}
//           <div
//             ref={rightSectionRef}
//             className={`lg:w-1/2 mt-24 lg:mt-0 flex flex-col items-center transition-all duration-1000 ease-in-out transform ${
//               animateRight ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
//             }`}
//           >
//             <div className={`flex p-4 space-x-4 ${isMobile ? 'flex-wrap justify-center' : ''}`}>
//               {serviceData.slice(currentIndex, currentIndex + (isMobile ? 1 : itemsPerPage)).map((service, index) => (
//                 <div
//                   key={index}
//                   className={`${service.bgColor} rounded-2xl h-[250px] 2xl:h-[300px] shadow-lg p-6 w-[230px] 2xl:w-[300px] relative transition-opacity duration-500 ${service.borderb}`}
//                 >
//                   <div className="service-card bg-white rounded-2xl shadow-2xl items-center justify-center p-4 w-44 2xl:w-[250px] 2xl:h-[250px] h-[200px] -mt-[60px]">
//                     <div className={`${service.bgColor2} rounded-full p-4 shadow-2xl w-16 h-16 -mt-12 mx-auto`}>
//                       <img src={service.iconSrc} alt={`${service.title} Icon`} className="w-8 h-8 mx-auto" />
//                     </div>
//                     <p className="text-center font-katibeh text-[13px] 2xl:text-[20px] mt-2 text-[#9A9696]">
//                       {service.description}
//                     </p>
//                   </div>
//                   <h3 className="text-center font-marko text-[16px] font-semibold mt-10">{service.title}</h3>
//                 </div>
//               ))}
//             </div>

//             {/* Dots Navigation */}
//             <div className="flex justify-center space-x-2">
//               {Array.from({ length: totalDots }).map((_, index) => (
//                 <div
//                   key={index}
//                   className={`w-5 h-5 rounded-full mb-4 border-2 border-dashed ${
//                     currentIndex === index * (isMobile ? 1 : itemsPerPage) ? 'border-black rotate-dash' : 'border-gray-400'
//                   } flex items-center justify-center`}
//                   onClick={() => setCurrentIndex(index * (isMobile ? 1 : itemsPerPage))}
//                 >
//                   {currentIndex === index * (isMobile ? 1 : itemsPerPage) && (
//                     <div className="w-2 h-2 bg-black rounded-full"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;



// import React, { useState, useEffect, useRef } from 'react';
// import Design from '../services/images/3159310.png';
// import Web from '../services/images/webapp.png';
// import Ecom from '../services/images/e-com.png';
// import Mobile from '../services/images/mobileapp.png';
// import Seo from '../services/images/seo.png';
// import Wordpress from '../services/images/wordpress.png';
// import { IoArrowForwardCircleOutline } from "react-icons/io5";


  
// const serviceData = [
//   {
//     title: 'Web Design',
//     description: 'Web design encompasses the planning and creation of visually engaging, user-friendly websites. It involves a blend of aesthetic elements, such as layout, colors, and functional aspects like navigation and responsiveness.',
//     bgColor: 'bg-teal-100',
//     borderb: 'border-b-8 border-teal-700',
//     bgColor2: 'bg-teal-200',
//     iconSrc: Design,
//   },
//   {
//     title: 'Web App',
//     description: 'A web app (web application) is a software application that runs on a web browser rather than being installed on a device. It allows users to interact with features and data over the internet.',
//     bgColor: 'bg-orange-100',
//     borderb: 'border-b-8 border-orange-700',
//     bgColor2: 'bg-orange-200',
//     iconSrc: Web,
//   },
//   {
//     title: 'Mobile App',
//     description: 'Mobile applications have transformed how we access services, offering users seamless interaction and functionality on-the-go, tailored for convenience and efficiency.',
//     bgColor: 'bg-blue-100',
//     borderb: 'border-b-8 border-blue-700',
//     bgColor2: 'bg-blue-200',
//     iconSrc: Mobile,
//   },
//   {
//     title: 'SEO',
//     description: 'Search Engine Optimization (SEO) is the process of enhancing a website visibility on search engines like Google. By optimizing content, improving site structure, and building quality backlinks.',
//     bgColor: 'bg-purple-100',
//     borderb: 'border-b-8 border-purple-700',
//     bgColor2: 'bg-purple-200',
//     iconSrc: Seo,
//   },
//   {
//     title: 'WordPress',
//     description: 'WordPress is a versatile content management system (CMS) that enables users to effortlessly create, manage, and customize websites without needing extensive coding skills.',
//     bgColor: 'bg-green-100',
//     borderb: 'border-b-8 border-green-700',
//     bgColor2: 'bg-green-200',
//     iconSrc: Wordpress,
//   },
//   {
//     title: 'E-Commerce',
//     description: 'E-Commerce refers to the buying and selling of goods and services over the internet, providing consumers with the convenience of shopping from anywhere at any time.',
//     bgColor: 'bg-red-100',
//     borderb: 'border-b-8 border-red-700',
//     bgColor2: 'bg-red-200',
//     iconSrc: Ecom,
//   },
// ];



// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isFlipping, setIsFlipping] = useState(false); // Animation state
 
//   const itemsPerPage = 2;
//   const [animateLeft, setAnimateLeft] = useState(false);
//   const [animateRight, setAnimateRight] = useState(false);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//   useEffect(() => {
//     // Trigger animations after the component mounts
//     setTimeout(() => {
//       setAnimateLeft(true);
//       setAnimateRight(true);
//     }, 300); // Add a small delay for the effect
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsFlipping(true); // Start flip animation
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => {
//           const maxIndex = serviceData.length - (isMobile ? 1 : itemsPerPage);
//           return prevIndex >= maxIndex ? 0 : prevIndex + (isMobile ? 1 : itemsPerPage);
//         });
//         setIsFlipping(false); // End flip animation after transition
//       }, 800); // Time should match the flip animation duration
//     }, 4000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isMobile, itemsPerPage]);
//    const totalDots = Math.ceil(serviceData.length / (isMobile ? 1 : itemsPerPage));

//   return (
//     <div>
//       <div className="text-center">
//         <h3 className="font-marko text-[24px] inline-block">Our Services</h3>
//         <div className="w-[120px] h-[2px] bg-[#D9D9D9] mx-auto mt-2"></div>
//       </div>
//       <div className=" bg-white overflow-hidden">
//         <div className="flex flex-wrap p-8 md:p-24 lg:flex-nowrap lg:space-x-8 flex-col lg:flex-row">
          
//           {/* Left Section */}
//           <div
//             className={`flex flex-col items-start space-y-6 text-left w-full lg:w-1/2 transition-all duration-1000 ease-in-out transform ${
//               animateLeft ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
//             }`}
//           >            <h1 className="text-[24px] 2xl:text-[28px] mt-12 font-marko mb-4">
//               We are giving you perfect solutions with our services
//             </h1>
//             <button className="bg-blue-950 text-white py-2 px-4 text-[16px] rounded-full h-8 w-28 font-marko shadow-2xl flex items-center">
//               Explore
//               <div className="ml-2 bg-blue-950 h-9 w-9 p-2 rounded-full flex items-center justify-center">
//                 <span className="text-3xl transform -rotate-45 transition-transform duration-300 hover:rotate-12">
//                   <IoArrowForwardCircleOutline />
//                 </span>
//               </div>
//             </button>
//           </div>

//           {/* Right Section - Services Carousel */}
//           <div
//             className={`lg:w-1/2 mt-24 lg:mt-0 flex flex-col items-center transition-all duration-1000 ease-in-out transform ${
//               animateRight ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
//             }`}
      
//     >
//             <div className={`flex p-4 space-x-4 ${isMobile ? 'flex-wrap justify-center' : ''}`}>
//               {serviceData.slice(currentIndex, currentIndex + (isMobile ? 1 : itemsPerPage)).map((service, index) => (
//                 <div
//                   key={index}
//                   className={`${service.bgColor} rounded-2xl h-[250px] 2xl:h-[300px] shadow-lg p-6 w-[230px] 2xl:w-[300px] relative transition-opacity duration-500 ${service.borderb} ${isFlipping ? 'flip-animation' : ''}`}
//                 >
//                   <div className="service-card bg-white rounded-2xl shadow-2xl items-center justify-center p-4 w-44 2xl:w-[250px] 2xl:h-[250px] h-[200px] -mt-[60px]">
//                     <div className={`${service.bgColor2} rounded-full p-4 shadow-2xl w-16 h-16 -mt-12 mx-auto`}>
//                       <img src={service.iconSrc} alt={`${service.title} Icon`} className="w-8 h-8 mx-auto" />
//                     </div>
//                     <p className="text-center font-katibeh text-[13px] 2xl:text-[20px] mt-2 text-[#9A9696]">
//                       {service.description}
//                     </p>
//                   </div>
//                   <h3 className="text-center font-marko text-[16px] font-semibold mt-10">{service.title}</h3>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center space-x-2">
//               {Array.from({ length: totalDots }).map((_, index) => (
//                 <div
//                   key={index}
//                   className={`w-5 h-5 rounded-full mb-4 border-2 border-dashed ${
//                     currentIndex === index * (isMobile ? 1 : itemsPerPage) ? 'border-black rotate-dash' : 'border-gray-400'
//                   } flex items-center justify-center`}
//                   onClick={() => setCurrentIndex(index * (isMobile ? 1 : itemsPerPage))}
//                 >
//                   {currentIndex === index * (isMobile ? 1 : itemsPerPage) && (
//                     <div className="w-2 h-2 bg-black rounded-full"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;



import React, { useState, useEffect, useRef } from 'react';
import Design from '../services/images/3159310.png';
import Web from '../services/images/webapp.png';
import Ecom from '../services/images/e-com.png';
import Mobile from '../services/images/mobileapp.png';
import Seo from '../services/images/seo.png';
import Wordpress from '../services/images/wordpress.png';
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const serviceData = [
  {
    title: 'Web Design',
    description: 'Web design encompasses the planning and creation of visually engaging, user-friendly websites. It involves a blend of aesthetic elements, such as layout, colors, and functional aspects like navigation and responsiveness.',
    bgColor: 'bg-teal-100',
    borderb: 'border-b-8 border-teal-700',
    bgColor2: 'bg-teal-200',
    iconSrc: Design,
  },
  {
    title: 'Web App',
    description: 'A web app (web application) is a software application that runs on a web browser rather than being installed on a device. It allows users to interact with features and data over the internet.',
    bgColor: 'bg-orange-100',
    borderb: 'border-b-8 border-orange-700',
    bgColor2: 'bg-orange-200',
    iconSrc: Web,
  },
  {
    title: 'Mobile App',
    description: 'Mobile applications have transformed how we access services, offering users seamless interaction and functionality on-the-go, tailored for convenience and efficiency.',
    bgColor: 'bg-blue-100',
    borderb: 'border-b-8 border-blue-700',
    bgColor2: 'bg-blue-200',
    iconSrc: Mobile,
  },
  {
    title: 'SEO',
    description: 'Search Engine Optimization (SEO) is the process of enhancing a website visibility on search engines like Google. By optimizing content, improving site structure, and building quality backlinks.',
    bgColor: 'bg-purple-100',
    borderb: 'border-b-8 border-purple-700',
    bgColor2: 'bg-purple-200',
    iconSrc: Seo,
  },
  {
    title: 'WordPress',
    description: 'WordPress is a versatile content management system (CMS) that enables users to effortlessly create, manage, and customize websites without needing extensive coding skills.',
    bgColor: 'bg-green-100',
    borderb: 'border-b-8 border-green-700',
    bgColor2: 'bg-green-200',
    iconSrc: Wordpress,
  },
  {
    title: 'E-Commerce',
    description: 'E-Commerce refers to the buying and selling of goods and services over the internet, providing consumers with the convenience of shopping from anywhere at any time.',
    bgColor: 'bg-red-100',
    borderb: 'border-b-8 border-red-700',
    bgColor2: 'bg-red-200',
    iconSrc: Ecom,
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false); // Animation state
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);
  
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const itemsPerPage = 2;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === leftSectionRef.current) {
            setAnimateLeft(true);
          } else if (entry.target === rightSectionRef.current) {
            setAnimateRight(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (leftSectionRef.current) {
      observer.observe(leftSectionRef.current);
    }
    if (rightSectionRef.current) {
      observer.observe(rightSectionRef.current);
    }

    return () => {
      if (leftSectionRef.current) {
        observer.unobserve(leftSectionRef.current);
      }
      if (rightSectionRef.current) {
        observer.unobserve(rightSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true); // Start flip animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = serviceData.length - (isMobile ? 1 : itemsPerPage);
          return prevIndex >= maxIndex ? 0 : prevIndex + (isMobile ? 1 : itemsPerPage);
        });
        setIsFlipping(false); // End flip animation after transition
      }, 800); // Time should match the flip animation duration
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [isMobile, itemsPerPage]);

  const totalDots = Math.ceil(serviceData.length / (isMobile ? 1 : itemsPerPage));

  return (
    <div>
      <div className="text-center">
        <h3 className="font-marko text-[24px] inline-block">Our Services</h3>
        <div className="w-[120px] h-[2px] bg-[#D9D9D9] mx-auto mt-2"></div>
      </div>
      <div className=" bg-white overflow-hidden">
        <div className="flex flex-wrap p-8 md:p-24 lg:flex-nowrap lg:space-x-8 flex-col lg:flex-row">
          
          {/* Left Section */}
          <div
            ref={leftSectionRef}
            className={`flex flex-col items-start space-y-6 text-left w-full lg:w-1/2 transition-all duration-1000 ease-in-out transform ${
              animateLeft ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <h1 className="text-[24px] 2xl:text-[28px] mt-12 font-marko mb-4">
              We are giving you perfect solutions with our services
            </h1>
            <button className="bg-blue-950 text-white py-2 px-4 text-[16px] rounded-full h-8 w-28 font-marko shadow-2xl flex items-center">
              Explore
              <div className="ml-2 bg-blue-950 h-9 w-9 p-2 rounded-full flex items-center justify-center">
                <span className="text-3xl transform -rotate-45 transition-transform duration-300 hover:rotate-12">
                  <IoArrowForwardCircleOutline />
                </span>
              </div>
            </button>
          </div>

          {/* Right Section - Services Carousel */}
          <div
            ref={rightSectionRef}
            className={`lg:w-1/2 mt-24 lg:mt-0 flex flex-col items-center transition-all duration-1000 ease-in-out transform ${
              animateRight ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className={`flex p-4 space-x-4 ${isMobile ? 'flex-wrap justify-center' : ''}`}>
              {serviceData.slice(currentIndex, currentIndex + (isMobile ? 1 : itemsPerPage)).map((service, index) => (
                <div
                  key={index}
                  className={`${service.bgColor} rounded-2xl h-[250px] 2xl:h-[300px] shadow-lg p-6 w-[230px] 2xl:w-[300px] relative transition-opacity duration-500 ${service.borderb} ${isFlipping ? 'flip-animation' : ''}`}
                >
                  <div className="service-card bg-white rounded-2xl shadow-2xl items-center justify-center p-4 w-44 2xl:w-[250px] 2xl:h-[250px] h-[200px] -mt-[60px]">
                    <div className={`${service.bgColor2} rounded-full p-4 shadow-2xl w-16 h-16 -mt-12 mx-auto`}>
                      <img src={service.iconSrc} alt={`${service.title} Icon`} className="w-8 h-8 mx-auto" />
                    </div>
                    <p className="text-center font-katibeh text-[13px] 2xl:text-[20px] mt-2 text-[#9A9696]">
                      {service.description}
                    </p>
                  </div>
                  <h3 className="text-center font-marko text-[16px] font-semibold mt-10">{service.title}</h3>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-2">
              {Array.from({ length: totalDots }).map((_, index) => (
                <div
                  key={index}
                  className={`w-5 h-5 rounded-full mb-4 border-2 border-dashed ${
                    currentIndex === index * (isMobile ? 1 : itemsPerPage) ? 'border-black rotate-dash' : 'border-gray-400'
                  } flex items-center justify-center`}
                  onClick={() => setCurrentIndex(index * (isMobile ? 1 : itemsPerPage))}
                >
                  {currentIndex === index * (isMobile ? 1 : itemsPerPage) && (
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
