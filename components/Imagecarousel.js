'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change toutes les 3 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div 
        className="carousel-container" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="carousel-item">
            <Image src={src} alt={`Image ${index + 1}`} width={800} height={400} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
