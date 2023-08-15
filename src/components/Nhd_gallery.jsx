"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Image from "next/image";

const Nhd_gallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dialogImageLoading, setDialogImageLoading] = useState(true) // Set default to false

  const handleShowDialog = (image) => {
   // console.log("handleShowDialog called");
    setIsOpen(!isOpen);
    setSelectedImage(image);
    setDialogImageLoading(true);
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getAnim = (idx) => {
    if (idx === 0) return "imga";
    else if (idx === 1) return "imga2";
    else if (idx === 2) return "imga3";
    else return "imga4";
  };

  return (
    <div className="grid grid-cols-12 gap-1 h-full w-full p-2 shadow-sm ">
      {!loading &&
        imageRows?.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((image, index) => (
              <div
                key={index}
                className={` relative cursor-pointer ${
                  index === 0
                    ? "row-span-2 col-span-7 hover:scale-[1.01] rounded-lg overflow-hidden"
                    : index === 1
                    ? "row-span-4 col-span-5 hover:scale-[1.01] rounded-lg overflow-hidden"
                    : index === 2
                    ? "row-span-5 col-span-7 hover:scale-[1.01] rounded-lg  overflow-hidden"
                    : "row-span-3 col-span-5 hover:scale-[1.01] rounded-lg overflow-hidden"
                }`}
                onClick={() => handleShowDialog(image)}
              >
                <Image
                  className={`w-full h-full object-cover  hover:scale-[1.15] transition-all delay-100 ${getAnim(
                    index
                  )}`}
                  src={image}
                  quality={50}
                  alt="no image"
                  loading="lazy"
                  fill={true}
                  onLoad={() =>setDialogImageLoading(false)}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      {imageRows && isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0  flex items-center justify-center bg-black bg-opacity-0 z-[500]"
          onClick={handleCloseDialog}
        >
          <div className="relative w-full md:w-1/2 lg:w-1/3 ">
            {dialogImageLoading ? (
              <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
            ) : (
              <>
                <Image
                  className="w-full h-full object-contain outline outline-white outline-8"
                  height={300}
                  width={500}
                  src={selectedImage}
                  alt="no image"
                />
                <AiOutlineCloseSquare
                  size={30}
                  color="white"
                  onClick={handleCloseDialog}
                  className="absolute top-2 right-2 cursor-pointer"
                />
              </>
            )}
          </div>
        </div>
      )}

      {loading && (
        <>
          <div
            className={` skeleton-image1 relative cursor-pointer row-span-2 col-span-7 hover:scale-[1.01] rounded-lg`}
          ></div>
          <div
            className={` skeleton-image2 relative cursor-pointer row-span-4 col-span-5 hover:scale-[1.01] rounded-lg`}
          ></div>
          <div
            className={` skeleton-image3 relative cursor-pointer row-span-5 col-span-7 hover:scale-[1.01] rounded-lg`}
          ></div>
          <div
            className={` skeleton-image4 relative cursor-pointer row-span-3 col-span-5 hover:scale-[1.01] rounded-lg`}
          ></div>
        </>
      )}
    </div>
  );
};

export default Nhd_gallery;
