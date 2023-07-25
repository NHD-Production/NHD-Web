"use client"
import React, { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import Image from 'next/image';

const Nhd_gallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowDialog = (image) => {
    setIsOpen(!isOpen);
    setSelectedImage(image);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    let index = 0;
    while (index < arr.length) {
      chunkedArr.push(arr.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  };

  const imageRows = chunkArray(images, 4);

  return (
    <div className="grid  grid-cols-12 gap-1 h-full w-full p-2 shadow-sm ">
      {imageRows.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((image, index) => (
            <div
              key={index}
              className={`relative cursor-pointer ${
                index === 0
                  ? 'row-span-2 col-span-7 hover:scale-[1.01] rounded-lg'
                  : index === 1
                  ? 'row-span-4 col-span-5 hover:scale-[1.01] rounded-lg'
                  : index === 2
                  ? 'row-span-5 col-span-7 hover:scale-[1.01] rounded-lg'
                  : 'row-span-3 col-span-5 hover:scale-[1.01] rounded-lg'
              }`}
              onClick={() => handleShowDialog(image)}
            >
              <Image  className="w-full h-full object-cover " src={image}  alt="no image" loading="lazy" fill={true}/>
            </div>
          ))}
        </React.Fragment>
      ))}
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0  flex items-center justify-center bg-black bg-opacity-0"
          onClick={handleCloseDialog}
        >
          <div className="relative w-full md:w-1/2 lg:w-1/3 ">
            <Image className="w-full h-full object-contain outline outline-white outline-8" height={300} width={500} src={selectedImage} alt="no image" />
            <AiOutlineCloseSquare
              size={30}
              color="white"
              onClick={handleCloseDialog}
              className="absolute top-2 right-2 cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nhd_gallery;



