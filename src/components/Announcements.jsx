import React, { useState, useEffect } from 'react';

const Announcements = () => {
  const slides = [
    {
      image: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090773/Nhd/sendgb-kQgRcOs18SH/1.jpeg_miihie.jpg',
      heading: 'Slide 1 Heading',
      description: 'Music is the art form that combines rhythm and sound to form a functional melodic line. Music itself transcends time, space, and cultures. Music can carry a mood without speaking any specific words. It can also be captured and recorded in a written universal language unique unto any other art form.',
    },
    {
      image: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090770/Nhd/Nhd%20live/_90A7312_tntreg.jpg',
      heading: 'Slide 2 Heading',
      description: 'Music is the art form that combines rhythm and sound to form a functional melodic line. Music itself transcends time, space, and cultures. Music can carry a mood without speaking any specific words. It can also be captured and recorded in a written universal language unique unto any other art form.',
    },
    {
      image: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090754/Nhd/Nhd%20live/Screen_Shot_2023-07-24_at_11.04.51_PM_dtkdys.png',
      heading: 'Slide 3 Heading',
      description: 'Music is the art form that combines rhythm and sound to form a functional melodic line. Music itself transcends time, space, and cultures. Music can carry a mood without speaking any specific words. It can also be captured and recorded in a written universal language unique unto any other art form.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    },5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
  <div
    className="flex transition-transform duration-500"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div
        key={index}
        className="flex min-w-full h-full items-center"
      >
        <div className="w-1/2">
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">{slide.heading}</h2>
          <p className="text-white">{slide.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Announcements;
