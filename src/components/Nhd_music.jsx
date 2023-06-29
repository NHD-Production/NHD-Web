import React from 'react';

function Nhd_music() {
  return (
    <div className="youtube-gallery m-auto rounded-lg w-11/12 overflow-auto  bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="content items-center">
        <div className="overflow-y-scroll max-h-screen">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full p-4 md:p-8">
            <div className="iframe-container shadow-lg shadow-indigo-500/50">
              <iframe
                width="400px"
                height="230px"
                src="https://www.youtube.com/embed/8-lWvooTmg0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="iframe-container shadow-lg shadow-indigo-500/50 ">
              <iframe
                width="400px"
                height="230px"
                src="https://www.youtube.com/embed/P82KDwo3R4k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="iframe-container shadow-lg shadow-indigo-500/50 ">
              <iframe
               width="400px"
               height="230px"
                src="https://www.youtube.com/embed/FQAxuAlEoV0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="iframe-container shadow-lg shadow-indigo-500/50 ">
              <iframe
                 width="400px"
                 height="230px"
                src="https://www.youtube.com/embed/mGr3-2nmO-A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="iframe-container shadow-lg shadow-indigo-500/50 ">
              <iframe
                width="400px"
                height="230px"
                src="https://www.youtube.com/embed/F-9pvXhcecQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="iframe-container shadow-lg shadow-indigo-500/50 ">
              <iframe
                 width="400px"
                 height="230px"
                src="https://www.youtube.com/embed/uP6lfMFI1PU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="iframe-container shadow-lg shadow-indigo-500/50 ">
              <iframe
                width="400px"
                height="230px"
                src="https://www.youtube.com/embed/liRYrGCKpZ0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nhd_music;
