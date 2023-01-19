import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const index = ({children}: {children: ReactNode}) => {
  return (
    <main className='flex flex-col items-center'>
      <Navbar />
      
      <div className='mt-20'>
        {children}
      </div>

      <Footer />
    </main>
  )
}

export default index