import React, { useState, useEffect } from 'react';
import carouselData from '../../../data/heroCarousel.json';

const images = Object.values(carouselData);

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="carousel-overlay"></div>
    </div>
  );
};

export default HeroCarousel;
