import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineCloseSquare } from 'react-icons/ai';

function NhdImageGallery({ images }) {
  let size = images.length;
  let col3 = Math.floor(size / 3);
  let col2 = col3 * 2;
  let col1 = size;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowDialog = (image) => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={`image-gallery m-auto rounded-lg w-full min-h-0 max-h-[200rem] overflow-y-auto cursor-pointer`}>
      <div className="content items-center">
        <div className="flex flex-row justify-between w-full max-h-full">
          <div className="flex flex-col w-[33%] gap-2">
            {images?.map((image, index) => {
              if (index >= 0 && index < col3) {
                return (
                  <div className="image-container skeleton-image1" key={image.id} onClick={() => handleShowDialog(image)}>
                    <div className="relative">
                      <Image style={{ width: '100%' }} width={300} height={500} className="object-cover" src={image.src} alt={image.alt} />
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="flex flex-col w-[33%] gap-2 cursor-pointer">
            {images?.map((image, index) => {
              if (index >= col3 && index < col2) {
                return (
                  <div className="image-container skeleton-image2" key={image.id} onClick={() => handleShowDialog(image)}>
                    <div className="relative">
                      <Image style={{ width: '100%' }} width={300} height={500} className="object-cover" src={image.src} alt={image.alt} />
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="flex flex-col w-[33%] gap-2 cursor-pointer">
            {images?.map((image, index) => {
              if (index >= col2 && index < col1) {
                return (
                  <div className="image-container skeleton-image3" key={image.id} onClick={() => handleShowDialog(image)}>
                    <div className="relative">
                      <Image style={{ width: '100%' }} width={300} height={500} className="object-cover" src={image.src} alt={image.alt} />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center !bg-black/60 backdrop-blur-sm bg-opacity-0 z-[500] overflow-hidden" onClick={handleCloseDialog}>
          <div className="p-5 w-full h-full flex justify-center items-center">
            <div className="relative w-[500px] bg-white/20 ">
              <Image className="w-full h-full object-contain outline outline-white outline-2 text-white flex justify-center items-center" height={300} width={500} src={selectedImage.src} alt="Image Preview Not Loaded" />
              <AiOutlineCloseSquare size={30} color="white" onClick={handleCloseDialog} className="absolute top-2 right-2 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NhdImageGallery;
