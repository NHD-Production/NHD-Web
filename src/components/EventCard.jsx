"use client";
import PopGallery from "@/components/PopGallery";
import Popover from "@/components/Popover";
import React from "react";

const EventCard = ({ images, eventName, date, description , setToggleGallery }) => {

  const handlePreview = ()=>{
    setToggleGallery({show:true,images:images});

  }
  
  return (
    <div className="max-w-sm bg-white/20 rounded-2xl shadow-lg p-6 text-white max-h-[25rem] overflow-hidden">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {images.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event Image ${index + 1}`}
            className="w-full h-24 object-cover rounded-md"
          />
        ))}
        {images.length > 3 && (
          <div className="relative w-full h-24 rounded-md overflow-hidden">
            <img
              src={images[3]}
              alt="View All"
              className="w-full h-full object-cover"
              
            />
            <div onClick={handlePreview} className="absolute inset-0 bg-black hover:bg-opacity-70 hover:text-purple-500 bg-opacity-50 flex items-center justify-center text-lg font-semibold cursor-pointer">
              View All
            </div>
          </div>
        )}
      </div>

      {/* Event Details */}
      <h2 className="text-2xl font-bold">{eventName}</h2>
      <p className="text-sm text-gray-300">{date}</p>
      <p className="mt-2 text-sm">{description.slice(0,150)}</p>

  </div>
  );
};

export default EventCard;
