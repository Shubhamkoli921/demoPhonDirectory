import React from 'react'

import Navbar from './navbar'
import Rotary from './rotary'
import Footer from './footer'
import CardComponent from './cardcomponent'
const Committee = () => {
  return (
    <>
        <Navbar />
        <Rotary />
        <div className='max-w-[1400px] mx-auto items-center w-full h-full p-2'>
                <div className='grid grid-cols-1 md:grid-cols-3 '>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    
                </div>
            </div>
      <Footer/>
    </>
  )
}

export default Committee