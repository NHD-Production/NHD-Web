"use client"
import Image from 'next/image'
import logo from '@/assets/nhd_logo.png';
import { useEffect,useState } from 'react';
function Loading() {
    const [loading, setLoading] = useState(true);
    const [iconSize, setIconSize] = useState({
        height:150,
        width: 150
    });

//   useEffect(()=>{
//     if(window.innerWidth<=500){
//       setIconSize({
//         height:150,
//         width: 150
//     })
//     }
//     else if(window.innerWidth <= 1000) {
//         setIconSize({
//             height:200,
//             width: 200
//         })
//       }
//     else{
//       setIconSize({
//         height:200,
//         width: 200
//     })
//     }
//   },[iconSize])

 

    useEffect(() => {
    const timer = setTimeout(() => { setLoading(false) }, 1000);
        return ()=>{
   clearTimeout(timer)
        }
    },[])


  return (
    <div className={`bg-white h-full w-full fixed ${loading ? "-top-[0%]" : "-top-[100%]" }  left-0 z-[1000] flex justify-center items-center transition-all  delay-1000`}>
        <Image src={logo} alt="loading" width={iconSize.width} height={iconSize.height} quality={100} className="drop-shadow-xl loadinganim "/>
    </div>
  )
}

export default Loading