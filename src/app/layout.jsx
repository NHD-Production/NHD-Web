import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import  GlobalProvider from '@/context/Globalcontext'
import './globals.css'
import { Inter } from 'next/font/google'
import Welcome from '@/components/Welcome'
import Nhd_gallery from '@/components/Nhd_gallery'
import Nhd_section from '@/components/Nhd_section'
import Nhd_music from '@/components/Nhd_music'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      
      <body className={`{inter.className} relative h-[100vh]`}>
      <GlobalProvider>
      <Navbar/>
      <div className="fixed top-[8%] w-full h-[92%]">
      {children}
      </div>
      {/* <Welcome/> */}
      {/* <Footer/> */}
      </GlobalProvider>
      </body>
    </html>
  )
}
