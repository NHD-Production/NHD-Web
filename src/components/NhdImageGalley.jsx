import React, { useEffect } from 'react';

function NhdImageGallery() {
  const images = [
    {
      id: 1,
      src: 'https://i.ibb.co/VYmT4Q1/Logo-Final.png',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'https://i.ibb.co/VYmT4Q1/Logo-Final.png',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: 'https://i.ibb.co/VYmT4Q1/Logo-Final.png',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: 'https://i.ibb.co/VYmT4Q1/Logo-Final.png',
      alt: 'Image 4',
    },
    {
      id: 5,
      src: 'https://i.ibb.co/VYmT4Q1/Logo-Final.png',
      alt: 'Image 5',
    }
  ];

//   useEffect(() => {
//     const resizeImages = () => {
//       const containers = document.querySelectorAll('.image-container');
//       containers.forEach(container => {
//         const containerWidth = container.offsetWidth;
//         const height = containerWidth / (16 / 9); 
//         container.style.height = `${height}px`;
//       });
//     };
//     resizeImages();
//     window.addEventListener('resize', resizeImages);
//     return () => {
//       window.removeEventListener('resize', resizeImages);
//     };
//   }, []);

  return (
    <div className="image-gallery m-auto rounded-lg w-11/12 bg-gradient-to-r backdrop-blur-lg bg-white/30">
      <div className="content items-center">
        <div className=" overflow-y-auto max-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 md:p-8">
            {images.map(image => (
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
