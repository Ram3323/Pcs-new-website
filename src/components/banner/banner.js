
// import React, { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// const Banner = () => {
//   const [experience, setExperience] = useState(0);
//   const [projects, setProjects] = useState(0);
//   const [clients, setClients] = useState(0);
//   const { ref, inView } = useInView({ triggerOnce: false }); // Detects visibility

//   useEffect(() => {
//     if (inView) {
//       // Reset counters
//       setExperience(0);
//       setProjects(0);
//       setClients(0);

//       // Experience Counter
//       const experienceInterval = setInterval(() => {
//         setExperience((prev) => {
//           if (prev < 3) {
//             return prev + 1;
//           } else {
//             clearInterval(experienceInterval);
//             return prev;
//           }
//         });
//       }, 100);

//       // Projects Counter
//       const projectsInterval = setInterval(() => {
//         setProjects((prev) => {
//           if (prev < 10) {
//             return prev + 1;
//           } else {
//             clearInterval(projectsInterval);
//             return prev;
//           }
//         });
//       }, 100);

//       // Clients Counter
//       const clientsInterval = setInterval(() => {
//         setClients((prev) => {
//           if (prev < 10) {
//             return prev + 1;
//           } else {
//             clearInterval(clientsInterval);
//             return prev;
//           }
//         });
//       }, 100);

//       // Cleanup intervals
//       return () => {
//         clearInterval(experienceInterval);
//         clearInterval(projectsInterval);
//         clearInterval(clientsInterval);
//       };
//     }
//   }, [inView]);

//   return (
//     <div ref={ref} className="w-full">
//       {/* Header Section with Image and Bottom-Right Cut */}
//       <div className="relative flex items-center justify-center h-[350px] xl:h-[650px] md:h-[500px] sm:h-[350px]">
//         {/* Image with bottom-right side cut */}
//         <div
//           className="h-full w-full bg-cover bg-center"
//           style={{
//             backgroundImage: 'url("https://alteem.com/wp-content/uploads/2022/02/about-smalll-2.jpg")',
//             clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
//           }}
//         >
//           {/* Overlay for the dark effect */}
//           <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         </div>

//         {/* Stats Section Positioned Over Image */}
//         <div className="absolute z-30 bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 md:p-6 sm:p-4 shadow-xl flex flex-row md:flex-row space-x-8 md:space-y-0 md:space-x-12 xl:space-x-24">
//           {/* Experience */}
//           <div className="text-center">
//             <div className="text-xl md:text-2xl lg:text-3xl mb-1 font-bold">{experience}+</div>
//             <div className="text-sm md:text-base lg:text-lg">Experience</div>
//           </div>
//           {/* Projects */}
//           <div className="text-center">
//             <div className="text-xl md:text-2xl lg:text-3xl mb-1 font-bold">{projects}+</div>
//             <div className="text-sm md:text-base lg:text-lg">Projects</div>
//           </div>
//           {/* Clients */}
//           <div className="text-center">
//             <div className="text-xl md:text-2xl lg:text-3xl mb-1 font-bold">{clients}+</div>
//             <div className="text-sm md:text-base lg:text-lg">Clients</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false }); // Detects visibility

  useEffect(() => {
    if (inView) {
      // Reset counters
      setExperience(0);
      setProjects(0);
      setClients(0);

      // Experience Counter
      const experienceInterval = setInterval(() => {
        setExperience((prev) => {
          if (prev < 3) {
            return prev + 1;
          } else {
            clearInterval(experienceInterval);
            return prev;
          }
        });
      }, 100);

      // Projects Counter
      const projectsInterval = setInterval(() => {
        setProjects((prev) => {
          if (prev < 10) {
            return prev + 1;
          } else {
            clearInterval(projectsInterval);
            return prev;
          }
        });
      }, 100);

      // Clients Counter
      const clientsInterval = setInterval(() => {
        setClients((prev) => {
          if (prev < 10) {
            return prev + 1;
          } else {
            clearInterval(clientsInterval);
            return prev;
          }
        });
      }, 100);

      // Cleanup intervals
      return () => {
        clearInterval(experienceInterval);
        clearInterval(projectsInterval);
        clearInterval(clientsInterval);
      };
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full">
      {/* Header Section with Image and Bottom-Right Cut */}
      <div className="relative flex items-center justify-center h-[350px] xl:h-[650px] md:h-[500px] sm:h-[350px]">
        {/* Image with bottom-right side cut and animation */}
        <div
          className="h-full w-full bg-cover bg-center banner-image"
          style={{
            backgroundImage: 'url("https://alteem.com/wp-content/uploads/2022/02/about-smalll-2.jpg")',
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
          }}
        >
          {/* Overlay for the dark effect */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Stats Section Positioned Over Image */}
        <div className="absolute z-30 bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-2 md:p-6 sm:p-4 shadow-xl flex flex-row md:flex-row space-x-8 md:space-y-0 md:space-x-12 xl:space-x-24">
          {/* Experience */}
          <div className="text-center">
            <div className="text-xl md:text-2xl lg:text-3xl mb-1 font-bold">{experience}+</div>
            <div className="text-sm md:text-base lg:text-lg">Experience</div>
          </div>
          {/* Projects */}
          <div className="text-center">
            <div className="text-xl md:text-2xl lg:text-3xl mb-1 font-bold">{projects}+</div>
            <div className="text-sm md:text-base lg:text-lg">Projects</div>
          </div>
          {/* Clients */}
          <div className="text-center">
            <div className="text-xl md:text-2xl lg:text-3xl mb-1 font-bold">{clients}+</div>
            <div className="text-sm md:text-base lg:text-lg">Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
