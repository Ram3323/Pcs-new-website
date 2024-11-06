// import React from 'react';
// import { useInView } from 'react-intersection-observer';

// const AboutFeatures = () => {
//   const steps = [
//     { step: '01', title: 'REQUIREMENTS', description: 'Requirements define the specific needs or conditions necessary to achieve a project or solution.' },
//     { step: '02', title: 'ANALYSIS', description: 'Investigate problem to define requirements necessary for solving it. Define "what".' },
//     { step: '03', title: 'DESIGN', description: 'Design a solution based upon the requirements. Define "how".' },
//     { step: '04', title: 'CODE', description: 'Implement (program) the design.' },
//     { step: '05', title: 'TEST', description: 'Test the program to ensure the requirements have been satisfied.' },
//     { step: '06', title: 'MAINTENANCE', description: 'Fix or improve applications based upon use or changes in the environment.' },
//   ];

//   return (
//     <div className="flex justify-center mb-6 items-start">
//       {/* Left Section: Colored labels */}
//       <div className="flex flex-col mr-20 gap-2 mt-20 font-merienda">
//         <div className="bg-blue-300 p-6 text-2xl text-center font-bold ml-8 w-80 rotate-[-5deg] transition-transform duration-300 hover:rotate-[-2deg] hover:bg-blue-400 hover:scale-105">
//           Our Process
//         </div>
//         <div className="bg-blue-100 p-6 text-2xl text-center font-bold w-96 rotate-[3deg] transition-transform duration-300 hover:rotate-[0deg] hover:bg-blue-200 hover:scale-105 ">
//           Simple, Seamless
//         </div>
//         <div className="bg-blue-500 p-6 text-2xl text-center font-bold ml-8 w-80 rotate-[-5deg] transition-transform duration-300 hover:rotate-[-3deg] hover:bg-blue-500 hover:scale-105 ">
//           Streamlined
//         </div>
//       </div>

//       {/* Right Section: Process steps */}
//       <div className="ml-10 flex flex-col">
//         {steps.map((stepItem, index) => (
//           <StepCard key={index} stepItem={stepItem} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const StepCard = ({ stepItem, index }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.5, // Trigger animation when 50% of the component is in view
//   });

//   return (
//     <div
//       ref={ref}
//       className={`flex  transform transition-opacity duration-700 ${
//         inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
//       }`}
//     >
//       <div className="flex flex-col items-center mr-6">
//         <div className="rounded-full w-20 h-20 bg-blue-300 text-black flex justify-center items-center text-lg font-bold">
//           {stepItem.step} <br /> step
//         </div>
//         {index < 5 && <div className="border-l-2 border-dashed h-16 border-black"></div>}
//       </div>
//       <div>
//       <h3
//           className={`font-semibold font-marko mb-4 text-xl transition-transform duration-700 ${
//             inView ? 'transform translate-y-0' : 'transform translate-y-10 opacity-0'
//           }`}
//         >
//           {stepItem.title}
//         </h3>        <p
//           className={`text-base font-markazi transition-transform duration-700 ${
//             inView ? 'transform translate-y-0' : 'transform translate-y-10 opacity-0'
//           }`}
//         >
//           {stepItem.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutFeatures;



import React from 'react';
import { useInView } from 'react-intersection-observer';

const AboutFeatures = () => {
  const steps = [
    { step: '01', title: 'REQUIREMENTS', description: 'Requirements define the specific needs or conditions necessary to achieve a project or solution.' },
    { step: '02', title: 'ANALYSIS', description: 'Investigate problem to define requirements necessary for solving it. Define "what".' },
    { step: '03', title: 'DESIGN', description: 'Design a solution based upon the requirements. Define "how".' },
    { step: '04', title: 'CODE', description: 'Implement (program) the design.' },
    { step: '05', title: 'TEST', description: 'Test the program to ensure the requirements have been satisfied.' },
    { step: '06', title: 'MAINTENANCE', description: 'Fix or improve applications based upon use or changes in the environment.' },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center mb-6 items-start px-16 md:px-4 lg:px-12 ">
      {/* Left Section: Colored labels */}
      <div className="flex flex-col mb-8 md:mb-0 md:mr-20 gap-2 mt-8 md:mt-20 font-merienda">
        <div className="bg-blue-300 p-4 md:p-6 text-lg md:text-xl lg:text-2xl text-center font-bold ml-0 md:ml-8 w-full md:w-60 lg:w-80 rotate-[-5deg] transition-transform duration-300 hover:rotate-[-2deg] hover:bg-blue-400 hover:scale-105">
          Our Process
        </div>
        <div className="bg-blue-100 p-4 md:p-6 text-lg md:text-xl lg:text-2xl text-center font-bold w-full md:w-72 lg:w-96  rotate-[3deg] transition-transform duration-300 hover:rotate-[0deg] hover:bg-blue-200 hover:scale-105">
          Simple, Seamless
        </div>
        <div className="bg-blue-500 p-4 md:p-6 text-lg md:text-xl lg:text-2xl text-center font-bold ml-0 md:ml-8 w-full md:w-60 lg:w-80 rotate-[-5deg] transition-transform duration-300 hover:rotate-[-3deg] hover:bg-blue-500 hover:scale-105">
          Streamlined
        </div>
      </div>

      {/* Right Section: Process steps */}
      <div className="ml-0 md:ml-10 flex flex-col">
        {steps.map((stepItem, index) => (
          <StepCard key={index} stepItem={stepItem} index={index} />
        ))}
      </div>
    </div>
  );
};

const StepCard = ({ stepItem, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row transform transition-opacity md:mr-6  duration-700 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      } `}
    >
      <div className="flex flex-col items-center md:mr-6 mb-4 md:mb-0">
        <div className="rounded-full w-16 h-16 md:w-20 md:h-20 bg-blue-300 text-black flex justify-center items-center text-base md:text-lg font-bold">
          {stepItem.step} <br /> step
        </div>
        {index < 5 && <div className="border-l-2 border-dashed h-10 md:h-16 border-black"></div>}
      </div>
      <div>
        <h3
          className={`font-semibold font-marko mb-2 md:mb-4 text-lg md:text-xl transition-transform duration-700 ${
            inView ? 'transform translate-y-0' : 'transform translate-y-10 opacity-0'
          }`}
        >
          {stepItem.title}
        </h3>
        <p
          className={`text-sm md:text-base font-markazi transition-transform duration-700 ${
            inView ? 'transform translate-y-0' : 'transform translate-y-10 opacity-0'
          }`}
        >
          {stepItem.description}
        </p>
      </div>
    </div>
  );
};

export default AboutFeatures;
