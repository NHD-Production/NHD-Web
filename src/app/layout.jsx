import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import  GlobalProvider from '@/context/Globalcontext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NHD Music and art Pvt Ltd',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`{inter.className} relative h-[100vh]`}>
      <GlobalProvider>
      <Navbar/>
      <div className="w-full overflow-hidden">
      {children}
      </div>
      </GlobalProvider>
      </body>
    </html>
  )
}
