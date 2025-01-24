import React, { useState } from 'react';

const ProjectCarousel = ({ laptopImage, mobileImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [laptopImage, mobileImage];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex justify-center items-center align-middle pb-5 w-full max-h-svh overflow-visible mx-5">
      <button
        onClick={handlePrev}
        className=" p-2 bg-gray-500  text-white rounded-full hover:bg-gray-600  transition-colors"
      >
        &lt;
      </button>

      <img
        src={images[currentIndex]}
        alt="Project View"
        className="w-auto h-full object-cover transition-all duration-300 hover:scale-125"
      />

      {/* Left and Right Arrow Buttons */}
      
      <button
        onClick={handleNext}
        className=" p-2 bg-gray-500   text-white rounded-full hover:bg-gray-600 transition-colors"
      >
        &gt;
      </button>
    </div>

  );
};

export default ProjectCarousel;
