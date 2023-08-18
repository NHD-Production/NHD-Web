'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';

function NhdImageGallery({ images }) {
  let size = images.length
  let col3 = Math.floor(size / 3);
  let col2 = col3*2
  let col1 = size 
  return (
    <div className={`image-gallery m-auto rounded-lg w-full min-h-0 max-h-[200rem] overflow-y-auto`}>
      <div className="content items-center">
        <div className="flex flex-row justify-between w-full max-h-full ">
          <div className="flex flex-col w-[33%] gap-2">
            {images?.map((image, index) => {
              if (index >= 0 && index < col3) {
                return ( <div className="image-container skeleton-image1" key={image.id}>
                <div className="relative">
                  <Image style={{width:"100%"}} width={300} height={500}
                    className=" object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>);
               
              }
            })
            }
          </div>
          <div className="flex flex-col w-[33%]  gap-2  ">
            {images?.map((image, index) => {
              if (index >= col3 && index < col2) {
                return ( <div className="image-container skeleton-image2" key={image.id}>
                <div className="relative">
                  <Image style={{width:"100%"}} width={300} height={500}
                    className=" object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>);
              }
            })}
            </div>
           <div className="flex flex-col w-[33%]  gap-2 ">
     
            {images?.map((image, index) => {
              if (index >= col2 && index < col1) {
                return ( <div className="image-container skeleton-image3" key={image.id}>
                <div className="relative">
                  <Image style={{width:"100%"}} width={300} height={500}
                    className=" object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>);
              }
            })}
        </div>
      </div>
    </div>
    </div>
  );
}

export default NhdImageGallery;
