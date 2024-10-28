


// import React, { useState, useEffect, useCallback } from 'react';
// import lhome from "../portfolio/images/lhome.png";
// import lecat from "../portfolio/images/lecat.png";
// import backgroundImage from '../portfolio/images/bg.png';
// import coollah from "../portfolio/images/coollah.jpg";
// import bjmm from "../portfolio/images/bjp.jpeg";
// import { MdSkipPrevious, MdSkipNext } from "react-icons/md";

// const Portfolio = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFlipping, setIsFlipping] = useState(false);
//   const [isMobile, setIsMobile] = useState(false); // Track mobile view
//   const [isTablet, setIsTablet] = useState(false); // Track tablet view

//   const projects = [
//     {
//       title: 'Title : Lhome',
//       image: lhome,
//       technologies: 'NextJS, NodeJS and Mysql',
//       link: 'https://www.lhome.co.in/',
//     },
//     {
//       title: 'Title : Lecat',
//       image: lecat,
//       technologies: 'HTML,CSS,Bootstrap,React js,Firebase',
//       link: 'https://vmobile-v1.web.app/',
//     },
//     {
//       title: 'Title : Coollah',
//       image: coollah,
//       technologies: 'HTML, CSS, JavaScript, JQuery, ASP.NET, Bootstrap, ReactJS, NodeJS.',
//       link: 'https://coollah.opusinfiniti.com/',
//     },
//     {
//       title: 'Title : BJMM',
//       image: bjmm,
//       technologies: 'ReactNative,PHP.',
//       link: '#',
//     },
//   ];

//   const nextSlide = useCallback(() => {
//     setIsFlipping(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//       );
//       setIsFlipping(false);
//     }, 500);
//   }, [projects.length]);

//   const prevSlide = useCallback(() => {
//     setIsFlipping(true);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? projects.length - 1 : prevIndex - 1
//       );
//       setIsFlipping(false);
//     }, 500);
//   }, [projects.length]);

//   // Auto-carousel functionality based on screen size
//   useEffect(() => {
//     const checkResponsive = () => {
//       const width = window.innerWidth;
//       setIsMobile(width <= 700);
//       setIsTablet(width > 700 && width <= 1024); // Define tablet width range
//     };

//     checkResponsive(); // Initial check
//     window.addEventListener('resize', checkResponsive); // Check on resize

//     const interval = (isMobile || isTablet) ? setInterval(nextSlide, 5000) : null; // Auto-slide on mobile and tablet only

//     return () => {
//       window.removeEventListener('resize', checkResponsive);
//       if (interval) clearInterval(interval); // Cleanup interval on unmount
//     };
//   }, [isMobile, isTablet, nextSlide]); // Added isTablet to the dependencies

//   return (
//     <div>
//       <h2 className="text-3xl font-bold text-center mb-4 text-black">Our Portfolio</h2>
//       <div className='border-b-2 border-grey-500 w-24 mx-auto mb-16'></div>

//       <div
//         className="relative w-full max-w-6xl mx-auto h-[380px] text-center bg-cover bg-center py-2 px-4"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         {/* Previous Button (conditionally rendered) */}
//         {!isTablet && (
//           <button
//             onClick={prevSlide}
//             className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 text-lg font-semibold text-gray-500 hover:text-black p-2 z-20 hidden md:block"
//           >
//             <MdSkipPrevious className='text-4xl' />
//             Previous
//           </button>
//         )}

//         {/* Project Card with 3D Flip Effect */}
//         <div className={`relative max-w-[480px] mx-auto h-[450px] p-4 bg-white shadow-xl rounded-md z-30 top-[-50px] transition-transform ${isFlipping ? 'flip' : ''}`}>
//           <img
//             src={projects[currentIndex].image}
//             alt={projects[currentIndex].title}
//             className="w-full h-52 object-cover rounded shadow-lg"
//           />
//           <div className="mt-4">
//             <h3 className="text-2xl font-bold">{projects[currentIndex].title}</h3>
//             <p className="text-gray-600 mt-4">
//               Technologies used: {projects[currentIndex].technologies}
//             </p>
//             <div>
//               <p className='text-gray-600 mt-4'>Click to see the project:</p>
//               <a
//                 href={projects[currentIndex].link}
//                 className="text-blue-500 hover:text-blue-700 underline mt-4 block"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {projects[currentIndex].link}
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Next Button (conditionally rendered) */}
//         {!isTablet && (
//           <button
//             onClick={nextSlide}
//             className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 text-lg font-semibold text-gray-500 hover:text-black p-2 z-20 hidden md:block"
//           >
//             <MdSkipNext className='text-4xl' />
//             Next
//           </button>
//         )}

//         {/* Dots Indicator */}
//         <div className="flex justify-center space-x-2 ">
//           {projects.map((_, index) => (
//             <div
//               key={index}
//               className={`w-5 h-5 rounded-full border-2 border-dashed mb-4 rotate-dash ${
//                 currentIndex === index ? 'border-black rotate-dash' : 'border-gray-400'
//               } flex items-center justify-center`}
//             >
//               {currentIndex === index && (
//                 <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;



import React, { useState, useEffect, useCallback } from 'react';
import lhome from "../portfolio/images/lhome.png";
import lecat from "../portfolio/images/lecat.png";
import backgroundImage from '../portfolio/images/bg.jpg';
import coollah from "../portfolio/images/coollah.jpg";
import bjmm from "../portfolio/images/bjp.jpeg";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track mobile view
  const [isTablet, setIsTablet] = useState(false); // Track tablet view
  const [isVisible, setIsVisible] = useState(false); // Track visibility

  const projects = [
    {
      title: 'Title : Lhome',
      image: lhome,
      technologies: 'NextJS, NodeJS and Mysql',
      link: 'https://www.lhome.co.in/',
    },
    {
      title: 'Title : Lecat',
      image: lecat,
      technologies: 'HTML,CSS,Bootstrap,React js,Firebase',
      link: 'https://vmobile-v1.web.app/',
    },
    {
      title: 'Title : Coollah',
      image: coollah,
      technologies: 'HTML, CSS, JavaScript, JQuery, ASP.NET, Bootstrap, ReactJS, NodeJS.',
      link: 'https://coollah.opusinfiniti.com/',
    },
    {
      title: 'Title : BJMM',
      image: bjmm,
      technologies: 'ReactNative,PHP.',
      link: '#',
    },
  ];

  const nextSlide = useCallback(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
      setIsFlipping(false);
    }, 500);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
      setIsFlipping(false);
    }, 500);
  }, [projects.length]);

  // Auto-carousel functionality based on screen size
  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 700);
      setIsTablet(width > 700 && width <= 1024); // Define tablet width range
    };

    checkResponsive(); // Initial check
    window.addEventListener('resize', checkResponsive); // Check on resize

    const interval = (isMobile || isTablet) ? setInterval(nextSlide, 5000) : null; // Auto-slide on mobile and tablet only

    return () => {
      window.removeEventListener('resize', checkResponsive);
      if (interval) clearInterval(interval); // Cleanup interval on unmount
    };
  }, [isMobile, isTablet, nextSlide]); // Added isTablet to the dependencies

  // Trigger slide-up animation when the component is in view
  useEffect(() => {
    const onScroll = () => {
      const portfolioSection = document.getElementById('portfolio-section');
      const sectionTop = portfolioSection.getBoundingClientRect().top;
      const isInView = sectionTop < window.innerHeight - 100; // Check if the section is near the viewport
      if (isInView) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
<<<<<<< HEAD:src/components/portfolio/portfolio.js
    <div id="portfolio-section" className={`transition-opacity mb-28 2xl:mb-0 duration-500 ${isVisible ? 'opacity-100 animate-slide-up' : 'opacity-0'}`}>
=======
    <div id="portfolio-section" className={`transition-opacity duration-500 mb-32 ${isVisible ? 'opacity-100 animate-slide-up' : 'opacity-0'}`}>
>>>>>>> 7cfc6ecff3e172c7fd611a236c3acde67d7b88ce:src/components/hompage/portfolio/portfolio.js
      <h2 className="text-3xl font-bold text-center mb-4 text-black">Our Portfolio</h2>
      <div className='border-b-2 border-grey-500 w-24 mx-auto mb-16'></div>

      <div
<<<<<<< HEAD:src/components/portfolio/portfolio.js
        className="relative w-full max-w-6xl mx-auto h-[380px] lg:max-w-4xl 2xl:max-w-6xl  text-center bg-cover bg-center py-2 px-4"
=======
        className="relative w-full max-w-6xl mx-auto h-[380px] lg:max-w-4xl 2xl:max-w-6xl text-center bg-cover bg-center py-2 px-4"
>>>>>>> 7cfc6ecff3e172c7fd611a236c3acde67d7b88ce:src/components/hompage/portfolio/portfolio.js
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Previous Button (conditionally rendered) */}
        {!isTablet && (
          <button
            onClick={prevSlide}
            className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 text-lg font-semibold text-gray-500 hover:text-black p-2 z-20 hidden md:block"
          >
            <MdSkipPrevious className='text-4xl' />
            Previous
          </button>
        )}

        {/* Project Card with 3D Flip Effect */}
        <div className={`relative max-w-[480px] mx-auto h-[450px] p-4 bg-white shadow-xl rounded-md z-30 top-[-50px] transition-transform ${isFlipping ? 'flip' : ''}`}>
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="w-full h-52 object-cover rounded shadow-lg"
          />
          <div className="mt-4">
            <h3 className="text-2xl font-bold">{projects[currentIndex].title}</h3>
            <p className="text-gray-600 mt-4">
              Technologies used: {projects[currentIndex].technologies}
            </p>
            <div>
              <p className='text-gray-600 mt-4'>Click to see the project:</p>
              <a
                href={projects[currentIndex].link}
                className="text-blue-500 hover:text-blue-700 underline mt-4 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projects[currentIndex].link}
              </a>
            </div>
          </div>
        </div>

        {/* Next Button (conditionally rendered) */}
        {!isTablet && (
          <button
            onClick={nextSlide}
            className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 text-lg font-semibold text-gray-500 hover:text-black p-2 z-20 hidden md:block"
          >
            <MdSkipNext className='text-4xl' />
            Next
          </button>
        )}

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-5 h-5 rounded-full border-2 border-dashed mb-4 rotate-dash ${
                currentIndex === index ? 'border-black rotate-dash' : 'border-gray-400'
              } flex items-center justify-center`}
            >
              {currentIndex === index && (
                <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
