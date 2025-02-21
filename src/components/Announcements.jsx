import React, { useState, useEffect } from "react";

const Announcements = () => {
  const slides = [
    {
      image:
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090773/Nhd/sendgb-kQgRcOs18SH/1.jpeg_miihie.jpg",
      heading: "Slide 1 Heading",
      description:
        "Music is the art form that combines rhythm and sound to form a functional melodic line. Music itself transcends time, space, and cultures...",
    },
    {
      image:
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090770/Nhd/Nhd%20live/_90A7312_tntreg.jpg",
      heading: "Slide 2 Heading",
      description:
        "Music is the art form that combines rhythm and sound to form a functional melodic line. Music itself transcends time, space, and cultures...",
    },
    {
      image:
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090754/Nhd/Nhd%20live/Screen_Shot_2023-07-24_at_11.04.51_PM_dtkdys.png",
      heading: "Slide 3 Heading",
      description:
        "Music is the art form that combines rhythm and sound to form a functional melodic line. Music itself transcends time, space, and cultures...",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full">
      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              // Flex-col on mobile, row on sm+ screens
              className="flex flex-col sm:flex-row min-w-full items-center justify-center gap-4 p-4"
            >
              {/* Image Section */}
              <div className="flex justify-center sm:w-1/2">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg object-cover
                             w-full h-48
                             sm:w-[300px] sm:h-[200px]
                             md:w-[400px] md:h-[250px]
                             lg:w-[500px] lg:h-[300px]"
                />
              </div>

              {/* Text Section */}
              <div className="sm:w-1/2 flex flex-col justify-center px-4 text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                  {slide.heading}
                </h2>
                <p className="text-sm sm:text-base">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 
                     bg-black/50 p-2 rounded-full hidden sm:block"
          onClick={prevSlide}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/339/339134.png"
            alt="Previous"
            className="w-4 h-4"
          />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 
                     bg-black/50 p-2 rounded-full hidden sm:block"
          onClick={nextSlide}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/17338/17338602.png"
            alt="Next"
            className="w-4 h-4"
          />
        </button>
      </div>

      {/* Dots Container */}
      <div className="relative mt-2 flex justify-center items-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full border border-white 
              ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => setSlide(index)}
          >
            {/* 
              If you'd rather use an image for dots, uncomment below:
              
              <img
                src="https://pngimg.com/d/dot_PNG1.png"
                alt="Dot"
                className="w-full h-full object-contain"
              />
            */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
