/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface SwiperProps {
  images: string[];
}

const Swiper: React.FC<SwiperProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;

  // Automatic pagination logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Get current images and repeat if necessary
  const getCurrentImages = () => {
    const currentImages = [];
    for (let i = 0; i < imagesPerPage; i++) {
      const imageIndex = (currentIndex + i) % images.length;
      currentImages.push(images[imageIndex]);
    }
    return currentImages;
  };

  const currentImages = getCurrentImages();

  return (
    <div className=" relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((image, index) => (
          <div key={index} className="p-2">
            <img src={image} alt={`Image ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white">
        <ChevronLeft />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white">
        <ChevronRight />
      </button>
    </div>
  );
};

export default Swiper;
