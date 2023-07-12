"use client"
import React, { useEffect } from 'react';

function Nhd_music() {
  const videos = [
    {
      id: '3PfEVKiSSUw',
      title: 'Video 1'
    },
    {
      id: 'c092EDCuLTM',
      title: 'Video 2'
    },
    {
      id: 'focAkPYSTXc',
      title: 'Video 3'
    },
    {
      id: 'kEpOa1MF7eE',
      title: 'Video 4'
    },
    {
      id: 'fVn5Awm6ITM',
      title: 'Video 5'
    },
    {
      id: 'ELKNL9oNv5g',
      title: 'Video 6'
    },
    {
      id: 'u1AX1NdXN7I',
      title: 'Video 7'
    },
    {
      id: 'MAqzu1cwY9s',
      title: 'Video 8'
    }
  ];

  useEffect(() => {
    const resizeIframes = () => {
      const iframes = document.querySelectorAll('.iframe-container iframe');
      iframes.forEach(iframe => {
        const containerWidth = iframe.parentNode.offsetWidth;
        const height = containerWidth / (16 / 9); // Maintain a 16:9 aspect ratio
        iframe.style.height = `${height}px`;
      });
    };

    // Call resizeIframes on component mount and window resize
    resizeIframes();
    window.addEventListener('resize', resizeIframes);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeIframes);
    };
  }, []);

  return (
    <div className="youtube-gallery m-auto rounded-lg w-11/12 overflow-auto bg-gradient-to-r backdrop-blur-lg bg-white/30">
    <div className="content items-center">
      <div className="overflow-y-scroll max-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 md:p-8">
          {videos.map(video => (
            <div className="iframe-container aspect-w-16 aspect-h-9 shadow-lg shadow-indigo-500/50" key={video.id}>
              <div className="relative">
                <iframe
                  className="w-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-0 bottom-0 z-10 px-3 py-2 flex items-center justify-center text-purple-400  bg-black/80 hover:bg-black/100 transition duration-300"
                >
                  Open in YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Nhd_music;
