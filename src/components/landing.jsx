// import React, { useEffect, useState } from 'react'
import AnilParmar from '../assets/anilparmar.jpeg'
import shekarMehta from '../assets/shekarmehta.jpeg'
import '../assets/style.css'
// import axios from 'axios'

const Landing = () => {

   

    return (
        <>
            <div className='max-w-[1640px] mx-auto p-4'>
                <div className='max-h-[500px] relative' id='landingdiv'>
                    {/* {overlay} */}
                    <div id='landingdiv' className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex-col justify-center'>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Rotary <span className='text-blue-600'>RID 3131 </span></h1>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-blue-600'>DIRECTORY  </span>2022-2023</h1>
                        <div className='flex flex-row justify-end relative top-40 sm:max-h-[100px]'>
                            <div className='flex flex-col m-2 '>
                                <img className='w-[100px] h-[100px] object-cover ' src={AnilParmar} alt='shekarmehta' />
                                <h1 className='font-bold'>Shekar Mehta</h1>
                                <p className='font-bold'>RI President</p>
                            </div>
                            <div className='flex flex-col m-2'>
                                <img className='w-[100px] h-[100px] object-cover' src={shekarMehta} alt='anil parmar' />
                                <h1 className='font-bold'>Anil Parmar</h1>
                                <p className='font-bold'>District Governor</p>
                            </div>
                        </div>
                    </div>
                    
                    <img id='landingdiv' className='w-full max-h-[500px] object-cover' src='https://img.freepik.com/free-vector/flat-design-polygonal-background_23-2148900723.jpg' alt='food' />
                    
                </div>
                
            </div>
        </>
    )
}

export default Landing