import Image from "next/image";
import React from "react";

function PopGallery({ title,images }) {
  return (
    <div className="w-full h-[30rem] max-w-[50rem] xl:w-[50rem] bg-white rounded-lg p-4 md:p-8 overflow-hidden">
      <h2 className="font-bold uppercase md:text-left text-center">{title? title : 'Gallery'}</h2>
      <div className="py-5 h-full">
        <div className="flex  flex-wrap overflow-auto max-h-[25rem] gap-2 md:gap-5 justify-center sm:justify-start">
          {images?.map((image, index) => (
            <div key={index} className="md:w-[14rem] w-[9rem] h-auto aspect-[3/2] relative">
              <Image
                src={image}
                fill
                alt={`Event Image ${index + 1}`}
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopGallery;
