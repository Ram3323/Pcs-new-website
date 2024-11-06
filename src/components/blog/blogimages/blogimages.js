


import React, { useState, useEffect, useRef } from 'react';

// Import images from the assets folder
import image1 from '../images/2.jpeg';
import image2 from '../images/18.jpeg';
import image3 from '../images/5.jpeg';
import image4 from '../images/24.jpeg';
import image5 from '../images/15.png';
import image6 from '../images/26.jpeg';
import image7 from '../images/19.jpeg';
import image8 from '../images/7.jpeg';
import image9 from '../images/13.jpeg';
import image10 from '../images/21.jpeg';
import image11 from '../images/23.jpeg';
import image12 from '../images/9.jpeg';
import image13 from '../images/17.jpeg';
import image14 from '../images/16.jpg';
import image15 from '../images/25.jpeg';
import image16 from '../images/14.jpg';
import image17 from '../images/7.jpeg';
import image18 from '../images/1.jpeg';

const images = [
  { src: image1, width: 'col-span-2', height: 'row-span-2', description: 'Solaiyar Dam in Valparai' }, 
  { src: image2, width: 'col-span-1', height: 'row-span-1', description: 'Office Opening' },
  { src: image3, width: 'col-span-1', height: 'row-span-1', description: 'Valparai Trip' },
  { src: image4, width: 'col-span-1', height: 'row-span-1', description: 'Internship Class' },
  { src: image5, width: 'col-span-1', height: 'row-span-1', description: 'Training Class' },
  { src: image6, width: 'col-span-1', height: 'row-span-1', description: 'PSN College Internship' },
  { src: image7, width: 'col-span-1', height: 'row-span-1', description: 'Team Out' },
  { src: image8, width: 'col-span-2', height: 'row-span-2', description: 'Pongal Celebration 2024' },
  { src: image9, width: 'col-span-1', height: 'row-span-1', description: 'Office Day' },
  { src: image10, width: 'col-span-1', height: 'row-span-1', description: 'Team Out' }, 
  { src: image11, width: 'col-span-1', height: 'row-span-1', description: 'JP College Internship' },
  { src: image12, width: 'col-span-1', height: 'row-span-1', description: 'Team Lunch' },
  { src: image13, width: 'col-span-2', height: 'row-span-2', description: 'Pongal Celebration 2023' },
  { src: image14, width: 'col-span-1', height: 'row-span-1', description: 'Skill Development Class' },
  { src: image15, width: 'col-span-1', height: 'row-span-1', description: 'Einstein College Internship' },
  { src: image16, width: 'col-span-1', height: 'row-span-1', description: 'Training Class' },
  { src: image17, width: 'col-span-1', height: 'row-span-1', description: 'Pongal Celebration 2024' },
  { src: image18, width: 'col-span-1', height: 'row-span-1', description: 'Client Visit' },
];

const Blogimages = () => {
  const [showMore, setShowMore] = useState(false); // State to toggle between showing more images
  const [hoveredImage, setHoveredImage] = useState(null); // State to store hovered image info
  const [visibleImages, setVisibleImages] = useState([]); // Store indices of images that are visible

  const imageRefs = useRef([]); // Store image elements to track visibility

  // Observer for detecting scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleImages((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the image is in view
      }
    );

    // Observe each image element
    imageRefs.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      // Unobserve on cleanup
      imageRefs.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, [showMore]);

  const toggleImages = () => {
    setShowMore(!showMore); // Toggle the state for showing more/less images
  };

  const handleMouseEnter = (index) => {
    setHoveredImage(index); // Set the hovered image
  };

  const handleMouseLeave = () => {
    setHoveredImage(null); // Clear the hovered image
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black p-8">
      {/* Image Grid */}
      <div className={`grid gap-6 px-4 py-10 sm:grid-cols-1 sm:px-4 md:grid-cols-2 lg:grid-cols-3 md:px-32 xl:px-64`}>
        {images.slice(0, showMore ? 18 : 9).map((image, index) => (
          <div
            key={index}
            className={`relative border-4 border-white md:border-8 md:border-white bg-white ${image.width} ${image.height} flex items-center justify-center transition-transform transition-opacity duration-700 ease-out transform ${
              visibleImages.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={(el) => (imageRefs.current[index] = el)} // Reference to each image element
            data-index={index} // Store index as data attribute for tracking
            onMouseEnter={() => handleMouseEnter(index)} // Handle hover events
            onMouseLeave={handleMouseLeave} // Handle hover leave
          >
            <img 
              src={image.src} 
              alt={`gallery-${index}`} 
              className="w-full h-full object-cover" 
            />
            {hoveredImage === index && ( // Show overlay only when hovered
              <div className="absolute inset-0 font-marko bg-black bg-opacity-70 flex items-center justify-center text-white text-xs  md:text-lg font-medium">
                {image.description}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      <div className="mt-6">
        <button 
          onClick={toggleImages} 
          className="px-6 py-2 bg-white text-black font-marko font-medium hover:text-white hover:bg-blue-950"
        >                                           
          {showMore ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default Blogimages;
