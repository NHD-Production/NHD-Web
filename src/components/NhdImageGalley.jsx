'use client'
import React, { useEffect } from 'react';

function NhdImageGallery({images}) {


  return (
    <div className="image-gallery m-auto rounded-lg w-11/12 bg-gradient-to-r backdrop-blur-lg bg-white/30">
      <div className="content items-center">
        <div className=" overflow-y-auto max-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 md:p-8">
            {images?.map(image => (
              <div className="image-container shadow-lg shadow-indigo-500/50" key={image.id}>
                <div className="relative">
                  <img
                    className="w-full h-full object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NhdImageGallery;
