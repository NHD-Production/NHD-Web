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
   <div className="absolute top-0 left-0 h-full w-full z-10 flex flex-row justify-between items-center px-8 py-7">
     <div className="playbtn cursor-pointer ">
       <audio
       ref={audioRef}
        controls
        src="/sample-15s.mp3" className='hidden'>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
       {!audioPlay ?<HiPlay size={100} color='white' onClick={()=>handlePlay(true)} />:
       <HiPause size={100} color='white' onClick={()=>handlePlay(false)} />}
     </div>
     <div className="text-[#fff] w-80">
     Renowned throughout the world, the flute - in the famous theme of &apos;Pather Panchali&apos;, by Satyajit Ray had been played by N-H-D&apos;s grandfather Late Alok Nath Dey.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, vitae accusantium minus aspernatur debitis voluptates, voluptatibus vero ullam unde vel dignissimos quos neque reprehenderit nesciunt veritatis iusto nihil distinctio alias eveniet iste labore mollitia, facilis id atque. Nesciunt cumque perferendis modi tempore sapiente sit rerum odio voluptates, ipsam quisquam, debitis maiores mollitia animi a recusandae ducimus quo. Neque, libero magni a, beatae commodi suscipit pariatur unde facilis nesciunt consequatur, doloribus omnis dolore odio totam molestiae voluptate possimus exercitationem nobis. Enim repellendus reprehenderit et reiciendis ipsum natus porro cumque! Illum sint adipisci accusamus nam quas molestiae, illo porro aliquid aspernatur fuga!
     </div>
   </div>
    </div>
  )
}

export default AudioPlayerLarge