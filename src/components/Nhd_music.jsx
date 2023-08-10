"use client"
import React, { useEffect } from 'react';

function Nhd_music() {
  const videos = [
    {
      id: 'EHksoMewtXU',
      title: 'Video 1'
    },
    {
      id: 'EPYaVhh2Oas',
      title: 'Video 2'
    },
    {
      id: 'pF9Frtxx9Aw',
      title: 'Video 3'
    },
    {
      id: 'uOjLjHLvfzU',
      title: 'Video 4'
    },
    {
      id: '9xzhiEd-J1s',
      title: 'Video 5'
    },
    {
      id: 'k-gezkpPNmQ',
      title: 'Video 6'
    },
    {
      id: 'nkl1yoE3m9k',
      title: 'Video 7'
    },
    {
      id: '40DyIH433ak',
      title: 'Video 8'
    },
    {
      id: '4kj-O4hIfXM',
      title:'video 9'
    },
    
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
    <div className="youtube-gallery m-auto rounded-lg w-11/12 overflow-auto">
    <div className="content items-center">
      <div className="overflow-y-auto min-h-0 max-h-[100rem]">
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
