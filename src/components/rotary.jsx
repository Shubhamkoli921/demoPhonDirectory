import React from 'react'
import {SiRotaryinternational,SiWorldhealthorganization} from 'react-icons/si'
import {FaGripLinesVertical} from 'react-icons/fa'
const Rotary = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex items-center '>
        <div className='flex justify-center max-w-[400px] mx-auto'>
            <div>
                <h1 className='flex items-center font-bold text-blue-950  '>Rotary <SiRotaryinternational className="m-2 w-[40px] h-[40px] text-orange-600" /></h1>
            </div>
            <div><FaGripLinesVertical className='h-[55px]  text-blue-950 ' /></div>
            <div className='flex items-center'>
                <SiWorldhealthorganization className="m-2 w-[40px] h-[40px] text-orange-600 " />
                <h3 className='flex flex-col font-bold text-blue-950'> SERVE TO <span> CHANGE LIVES</span></h3>
            </div>
        </div>
    </div>
  )
}

export default Rotary