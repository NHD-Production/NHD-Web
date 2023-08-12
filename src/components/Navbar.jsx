'use client'
import { GlobalContext } from '@/context/Globalcontext'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import logo from '@/assets/nhd_logo.png';
import ham from '@/assets/hamburger.png';
import close from '@/assets/close.png';
import { usePathname } from 'next/navigation'
import {GiHamburgerMenu} from 'react-icons/gi'
function Navbar() {
  const { theme } = useContext(GlobalContext)
  const [navbar, setNavbar] = useState(false) // Add navbar state variable
  const [navpos,setNavpos] = useState('sticky')
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  }, [])
  const handlescroll = () => {
    if (window.scrollY > 100) setNavpos('fixed')
     else setNavpos('sticky')
  }
  useEffect(() => {
    window.addEventListener('scroll', handlescroll)

    return () => {
      window.removeEventListener('scroll',handlescroll )
    }
  },[])


  return (
    <div className={`${navpos} top-0 left-0 z-50 w-full`}>
      <nav className="w-full relative z-10 h-[4.5rem] ">
        <div className={`justify-between ${navpos==='sticky'? 'bg-white':'bg-white/80'}  md:items-center md:flex md:px-8  w-full transition-all delay-100`}>
          <div>
            <div className="flex items-center justify-between py-3 md:py-3 md:block">
              {/* LOGO */}
              <Link href="/" shallow>
              <Image src={logo} width={40} height={40} alt="logo" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={close} width={30} height={30} alt="logo" />
                  ) : (
                    <GiHamburgerMenu size={30} color='purple'  alt="logo"
                    className="focus:border-none active:border-none"/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
             {
               pathname === '/' &&
               <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="/About" target="_blank" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer">
                     About
                  </a>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="#music" onClick={() => setNavbar(!navbar)}>
                    Music
                  </Link>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
              }
              {
               pathname === '/About' &&
               <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#gallery" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer">
                     Gallery
                  </a>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
              }
               {
               pathname === '/nhdlive' &&
               <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#gallery" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer">
                     Gallery
                  </a>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
              }
              {
               pathname === '/nhdstudio' &&
               <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#charges" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer">
                     Charges
                  </a>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#about" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer">
                     About
                  </a>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="#image" onClick={() => setNavbar(!navbar)}>
                    Images
                  </Link>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
              }
              {
               pathname === '/nhdproduction' &&
               <ul className="h-screen md:h-auto items-center justify-center md:flex ">
               <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                 <Link shallow href="/" onClick={() => setNavbar(!navbar)}>
                   Home
                 </Link>
               </li>
               <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                 <a href="#gallery"  onClick={() => setNavbar(!navbar)} rel="noopener noreferrer">
                    Gallery
                 </a>
               </li>
               <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                 <Link shallow href="#contact" onClick={() => setNavbar(!navbar)}>
                   Contact
                 </Link>
               </li>
             </ul>
              }
              {
               pathname === '/nhdclasses' &&
               <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="#about"  onClick={() => setNavbar(!navbar)} rel="noopener noreferrer">
                     About
                  </a>
                </li>
                <li className="pb-6 sm:p-0 text-xl text-purple-900 py-2 sm:px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link shallow href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
              }
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
