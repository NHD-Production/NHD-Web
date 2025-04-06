import React, { useEffect, useState } from "react";

const Announcements = () => {
  const slides = [
    {
      image:
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090773/Nhd/sendgb-kQgRcOs18SH/1.jpeg_miihie.jpg",
      heading: "NHD With Arijit Singh",
      description:
        "Sharing the stage with the legendary Arijit Singh was an unforgettable milestone for NHD Band. Our instrumentals blended seamlessly with his soulful voice, creating magic that resonated with every heart in the audience.",
    },
    {
      image:
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090770/Nhd/Nhd%20live/_90A7312_tntreg.jpg",
      heading: "NHD at JU",
      description:
        "NHD Band electrifies Jadavpur University with pure instrumental magic! Our melodies echo through the campus, uniting hearts with the rhythm of music. JU, get ready for an unforgettable musical journey!",
    },
    {
      image:
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090754/Nhd/Nhd%20live/Screen_Shot_2023-07-24_at_11.04.51_PM_dtkdys.png",
      heading: "Ballyganj Culture Club",
      description:
        "NHD Band brings its instrumental magic to Ballygunge Culture Club! The soulful flute, vibrant mandolin, and dynamic rhythms set the stage ablaze. Music transcended barriers as the crowd swayed to our tunes. A night of pure melody and unforgettable energy!",
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
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden  text-white p-8 bg-black/50 md:bg-transparent">
      <div
        className="flex gap-4 transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex min-w-full flex-col md:flex-row items-center gap-6"
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full md:w-1/2 h-56 md:h-72 object-cover rounded-lg shadow-lg"
            />
            <div className="w-full md:w-1/2 text-center md:text-left p-4">
              <h2 className="text-xl md:text-2xl font-bold mb-2">{slide.heading}</h2>
              <p className="text-sm md:text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/60 p-3 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/60 p-3 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>

      <div className="absolute bottom-4 md:bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
