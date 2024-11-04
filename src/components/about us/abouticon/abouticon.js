import React from 'react';
import { FaBox, FaChartLine, FaThumbsUp, FaDollarSign, FaDesktop, FaPencilRuler } from 'react-icons/fa';

const AboutIcon = () => {
  const features = [
    { icon: <FaBox size={50} />, title: 'We are Transparent' },
    { icon: <FaChartLine size={50} />, title: 'Your success is our success' },
    { icon: <FaThumbsUp size={50} />, title: 'We provide Finest Quality' },
    { icon: <FaDollarSign size={50} />, title: 'Always on budget' },
    { icon: <FaDesktop size={50} />, title: 'We never stop learning' },
    { icon: <FaPencilRuler size={50} />, title: 'We create the best Design' },
  ];

  // Repeat the icons 10 times using Array.fill()
  const repeatedFeatures = Array(50).fill(features).flat();

  return (
    <div className="py-16 overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl font-medium text-center mb-12 font-marko">All Of We Are</h2>

      {/* Continuous Scrolling Carousel */}
      <div className="relative flex items-center">
        <div className="flex animate-marquee">
          {/* Display the repeated icons */}
          {repeatedFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center mx-8 text-center w-[180px] shrink-0">
              <div className="mb-4 text-gray-400">{feature.icon}</div>
              <p className="text-lg text-gray-600 font-medium font-markazi">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutIcon;
