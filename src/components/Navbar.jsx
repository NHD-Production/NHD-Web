'use client'
import { GlobalContext } from '@/context/Globalcontext'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import Image from 'next/image';
import logo from '@/assets/nhd_logo.png';
import ham from '@/assets/hamburger.png';
import close from '@/assets/close.png';
function Navbar() {
  const { theme } = useContext(GlobalContext)
  const [navbar, setNavbar] = useState(false) // Add navbar state variable

  const { Themecolor, setThemecolor } = theme // Assuming you have defined Themecolor and setThemecolor in the GlobalContext

  return (
    <div>
      <nav className="w-full bg-white relative z-10 h-[4.5rem]">
        <div className="justify-between bg-white md:items-center md:flex md:px-8  w-full">
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
                    <Image
                      src={ham}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
