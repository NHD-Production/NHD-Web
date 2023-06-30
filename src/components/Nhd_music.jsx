"use client"
import React, { useEffect } from 'react';

function Nhd_music() {
  const videos = [
    {
      id: '8-lWvooTmg0',
      title: 'Video 1'
    },
    {
      id: 'P82KDwo3R4k',
      title: 'Video 2'
    },
    {
      id: 'FQAxuAlEoV0',
      title: 'Video 3'
    },
    {
      id: 'mGr3-2nmO-A',
      title: 'Video 4'
    },
    {
      id: 'F-9pvXhcecQ',
      title: 'Video 5'
    },
    {
      id: 'uP6lfMFI1PU',
      title: 'Video 6'
    },
    {
      id: 'liRYrGCKpZ0',
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
                <iframe
                  className="w-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nhd_music;
