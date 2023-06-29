import React from 'react';

function Nhd_gallery() {
  const images = [
    {
      url: 'https://img.freepik.com/premium-photo/musician-band-singing_102671-5234.jpg',
      width: 195,
      height: 120,
    },
    {
      url: 'https://img.freepik.com/premium-photo/musician-band-singing_102671-5234.jpg',
      width: 195,
      height: 162,
    },
    {
      url: 'https://img.freepik.com/premium-photo/musician-band-singing_102671-5234.jpg',
      width: 195,
      height: 243,
    },
    {
      url: 'https://img.freepik.com/premium-photo/musician-band-singing_102671-5234.jpg',
      width: 195,
      height: 198,
    },
    // Add more image objects here
  ];

  return (
    <div className="grid grid-cols-2 gap-1 mt-10">
      <div className="relative left-36 cursor-pointer hover:scale-125 transform transition-transform duration-100 ">
        <img
          src={images[0].url}
          alt={`Image 1`}
          className="w-full h-auto object-cover"
          style={{ width: `${images[0].width}px`, height: `${images[0].height}px` }}
        />
      </div>
      <div className="relative right-96 cursor-pointer hover:scale-125 transform transition-transform duration-300">
        <img
          src={images[1].url}
          alt={`Image 2`}
          className="w-full h-auto object-cover"
          style={{ width: `${images[1].width}px`, height: `${images[1].height}px` }}
        />
      </div>
      <div className="relative left-36 bottom-8 cursor-pointer hover:scale-125 transform transition-transform duration-300">
        <img
          src={images[2].url}
          alt={`Image 3`}
          className="w-full h-auto object-cover"
          style={{ width: `${images[2].width}px`, height: `${images[2].height}px` }}
        />
      </div>
      <div className="relative right-96 top-3 cursor-pointer hover:scale-125 transform transition-transform duration-300">
        <img
          src={images[3].url}
          alt={`Image 4`}
          className="w-full h-auto object-cover"
          style={{ width: `${images[3].width}px`, height: `${images[3].height}px` }}
        />
      </div>
    </div>
  );
}

export default Nhd_gallery;
