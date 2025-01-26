import React, { useState, useEffect } from "react";

const Announcements = () => {
  const slides = [
    {
      image:
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090773/Nhd/sendgb-kQgRcOs18SH/1.jpeg_miihie.jpg",
      heading: "Slide 1 Heading",
      description:
        "Music is the art form that combines rhythm and sound to form a functional melodic line. Music itself transcends time, space, and cultures. Music can carry a mood without speaking any specific words. It can also be captured and recorded in a written universal language unique unto any other art form.",
    },
    {
      image:
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090770/Nhd/Nhd%20live/_90A7312_tntreg.jpg",
      heading: "Slide 2 Heading",
      description:
        "Music is the art form that combines rhythm and sound to form a functional melodic line. Music itself transcends time, space, and cultures. Music can carry a mood without speaking any specific words. It can also be captured and recorded in a written universal language unique unto any other art form.",
    },
    {
      image:
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090754/Nhd/Nhd%20live/Screen_Shot_2023-07-24_at_11.04.51_PM_dtkdys.png",
      heading: "Slide 3 Heading",
      description:
        "Music is the art form that combines rhythm and sound to form a functional melodic line. Music itself transcends time, space, and cultures. Music can carry a mood without speaking any specific words. It can also be captured and recorded in a written universal language unique unto any other art form.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
   <div>
     <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden ">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex min-w-full h-full items-center gap-10"
          >
            <div className="w-1/2">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] md:w-[500px] md:h-[300px] object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center p-6">
              <h2 className="text-2xl font-bold mb-4 text-white ">
                {slide.heading}
              </h2>
              <p className="text-white">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
        onClick={prevSlide}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/339/339134.png"
          alt="Previous"
          className="w-4 h-4"
        />
      </button>

      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
        onClick={nextSlide}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/17338/17338602.png"
          alt="Next"
          className="w-4 h-4"
        />
      </button>

      {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`} 
            onClick={() => setSlide(index)}
          >
            <img
              src="https://pngimg.com/d/dot_PNG1.png"
              alt="Dot"
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div> */}
    </div>
    <div className="relative -bottom-4 left-[98%] transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`} 
            onClick={() => setSlide(index)}
          >
            <img
              src="https://pngimg.com/d/dot_PNG1.png"
              alt="Dot"
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
   </div>
  );
};

export default Announcements;
