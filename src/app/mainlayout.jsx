import React from 'react'
import Navbar from '@/components/Navbar'
import Loading from '@/components/Loading'
function mainlayout({children}) {
  return (
    <>
     <Navbar/>
     <Loading/>
      <div className="w-full overflow-hidden">
      {children}
      </div>
    </>
  )
}

export default mainlayout