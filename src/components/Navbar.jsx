'use client'
import { GlobalContext } from '@/context/Globalcontext'
import Link from 'next/link'
import React, { useContext } from 'react'

function Navbar() {
    const {theme} = useContext(GlobalContext)
    const [Themecolor,setThemecolor] = theme
  return (
    <div>Navbar
         <Link href='/'>Home</Link>
         <Link href='/About'>About</Link>
        <button onClick={()=>setThemecolor('green')}>Theme</button>
    </div>
  )
}

export default Navbar