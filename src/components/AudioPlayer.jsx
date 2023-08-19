'use client'
import React ,{useEffect, useRef, useState} from 'react';
import {HiPlay,HiPause} from 'react-icons/hi2';

function AudioPlayer({type,bgimage}) {
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

  const [iconSize, setIconSize] = useState(50);

  useEffect(()=>{
    if(window.innerWidth<=500){
      setIconSize(60)
    }
    else{
      setIconSize(100)
    }
  },[])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setIconSize(60)
      } else if(window.innerWidth <= 1000) {
        setIconSize(80)
      }
      else{
        setIconSize(100)
      }
    };

    const resize = window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize' ,resize);

    };
  }, [iconSize]);


   return (
    <div className='audioplayer h-full w-full  rounded-2xl  relative overflow-hidden border-purple-500 border-[.05rem]'>
   <div className="absolute top-0 left-0 h-full w-full z-10 flex flex-col justify-around xl:justify-between px-8 py-7">
     <div className="playbtn cursor-pointer">
       <audio
       ref={audioRef}
        controls
        src="https://res.cloudinary.com/dmv3vi7ks/video/upload/v1691162995/APUR_PACHALI_NHD_ugena1.mp3" className='hidden'>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
       {!audioPlay ?<HiPlay size={iconSize} color='white' onClick={()=>handlePlay(true)} />:
       <HiPause size={iconSize} color='white' onClick={()=>handlePlay(false)} />}
     </div>
     <div className="text-[#fff] text-p sm:text-md 2xl:text-h3">
     59 Years later N-H-D plays the same leif motif in flute for the theme of Kaushik Ganguly&apos;s celebrated feature film &quot;Apur Panchali&quot; as a tribute.
     </div>
   </div>
    </div>
  )
}

export default AudioPlayer