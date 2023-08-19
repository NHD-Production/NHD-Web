'use client'
import React ,{useEffect, useRef, useState} from 'react';
import {HiPlay,HiPause} from 'react-icons/hi2';

function AudioPlayerLarge({type,bgimage}) { 
  const audioRef = useRef(null);
  const playAudio = () => {
    audioRef?.current?.play();
  };

  const pauseAudio = () => {
    audioRef?.current?.pause();
  };
  const [audioPlay,setAudioPlay] = useState(false)


  const handlePlay =(state)=>{
    if(state){
      playAudio();
      setAudioPlay(true)
    }
    else
    {
      pauseAudio();
        setAudioPlay(false)
    }
  }


   return (
    <div className='audioplayerlg h-full w-full  rounded-2xl  relative overflow-hidden border-purple-500 border-[.05rem]'>
   <div className="absolute top-0 left-0 h-full w-full z-10 flex flex-col  md:flex-row md:justify-between md:items-center px-8 md:py-7">
     <div className="playbtn cursor-pointer ">
       <audio
       ref={audioRef}
        controls
        src="https://res.cloudinary.com/dmv3vi7ks/video/upload/v1691162994/POTHER_PACHALI_AND_cs3xh9.mp3" className='hidden'>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
       {!audioPlay ?<HiPlay size={100} color='white' onClick={()=>handlePlay(true)} />:
       <HiPause size={100} color='white' onClick={()=>handlePlay(false)} />}
     </div>
     <div className="text-[#fff] w-80 text-p 2xl:text-h3">
     Renowned throughout the world, the flute - in the famous theme of &apos;Pather Panchali&apos;, by Satyajit Ray had been played by N-H-D&apos;s grandfather Late Alok Nath Dey.
     </div>
   </div>
    </div>
  )
}

export default AudioPlayerLarge