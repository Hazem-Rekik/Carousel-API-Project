'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageCarousel = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour aller à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Défilement automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Nettoyer l'intervalle quand le composant est démonté
  }, []);

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>❮</button>
      
      <div className="carousel-item">
        <Image 
          src={images[currentIndex]} 
          alt={`Image ${currentIndex + 1}`} 
          width={500} 
          height={300} 
        />
      </div>

      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ImageCarousel;
