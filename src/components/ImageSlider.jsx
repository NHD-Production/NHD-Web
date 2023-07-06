import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_640.jpg',
    'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/22/21/36/audience-1850665_640.jpg',
    'https://cdn.pixabay.com/photo/2020/02/06/08/19/band-4823341_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/19/11/11/dua-lipa-1838653_640.jpg',
  ];

  const [translateX, setTranslateX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prevTranslateX => prevTranslateX - 290);
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Image Slider</h1>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(${translateX}px)`,
            width: `${(images.length + 1) * 290}px`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-290 h-190 object-cover mr-4"
            />
          ))}
          <img
            src={images[0]}
            alt="Image 1"
            className="w-290 h-190 object-cover mr-4"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
