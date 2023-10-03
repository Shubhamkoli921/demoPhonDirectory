import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { CgOrganisation } from 'react-icons/cg'
import { BiSolidNetworkChart } from 'react-icons/bi'
import { LiaBirthdayCakeSolid } from 'react-icons/lia'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import Navbar from './navbar'
import Rotary from './rotary'
import Footer from './footer'
const Committee = () => {
  return (
    <>
        <Navbar />
        <Rotary />
        <div className='max-w-[1400px] mx-auto items-center w-full h-full p-2'>
        {/* {card} */}
        <div className='rounded-xl relative p-2' id='imgc'>
          {/* {overlay} */}

          <div className='absolute lg:w-[400px] lg:h-[200px] md:w-[390px]   bg-black/50 rounded-xl text-white flex flex-row' id='card'>
            <div className='w-full h-full justify-center flex items-center'>
              <img className="max-h-[200px] lg:max-h-[200px] md:max-h-[100px] w-[160px] object-cover rounded-xl p-1" src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' />
            </div>
            <div className='flex flex-col items-center justify-center w-full h-full '>
              {/* <div className='absolute w-[200px] h-[200px] bg-gradient-to-tl from-black '></div> */}
              <h1 className='m-2 font-bold'>Member</h1>
              <div className='flex-col p-2'>
                <p className='flex flex-row items-center'><BsFillPersonFill className="mx-2" />shubham Koli</p>
                <p className='flex flex-row items-center'><CgOrganisation className="mx-2" /> company Name</p>
                <p className='flex flex-row items-center'><BiSolidNetworkChart className="mx-2" />  Occupation</p>
                <p className='flex flex-row items-center'><LiaBirthdayCakeSolid className="mx-2" /> 14/05/2000</p>
                <p className='flex flex-row items-center'><AiFillPhone className="mx-2" /> 9890845263</p>
                <p className='flex flex-row items-center'><AiOutlineMail className="mx-2" /> shubhamkk922@gmail.com</p>
              </div>
            </div>
          </div>

          {/* <img className='max-h-[200px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /> */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Committee