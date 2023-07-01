'use client'
import React ,{useEffect, useRef, useState} from 'react';
import {HiPlay,HiPause} from 'react-icons/hi2';

function AudioPlayer() {
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

  useEffect(()=>{
    handlePlay(true)
  return()=> handlePlay(false)
  },[])

   return (
    <div className='audioplayer h-full w-full  rounded-2xl  relative overflow-hidden border-purple-500 border-[.05rem]'>
   <div className="absolute top-0 left-0 h-full w-full z-10 flex flex-col justify-between px-8 py-7">
     <div className="playbtn cursor-pointer ">
       <audio
       ref={audioRef}
        controls
        src="/sample-15s.mp3" className='hidden'>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
       {!audioPlay ?<HiPlay size={60} color='white' onClick={()=>handlePlay(true)} />:
       <HiPause size={60} color='white' onClick={()=>handlePlay(false)} />}
     </div>
     <div className="text-[#fff]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque, odio iusto provident exercitationem quas, maxime earum voluptatem ut nostrum doloremque esse obcaecati quos quod aspernatur. Rerum cumque maxime aspernatur minima tempore debitis nobis repudiandae, commodi, ex perferendis ab itaque.
     </div>
   </div>
    </div>
  )
}

export default AudioPlayer