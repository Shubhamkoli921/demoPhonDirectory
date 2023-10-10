import React from 'react'

import Navbar from './navbar'
import Rotary from './rotary'
import Footer from './footer'
// import CardComponent from './cardcomponent'
import { BsFillPersonFill } from 'react-icons/bs'
import { CgOrganisation } from 'react-icons/cg'
import { BiSolidNetworkChart } from 'react-icons/bi'
import { LiaBirthdayCakeSolid } from 'react-icons/lia'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import mukund from '../Rotary_Images/Rotary_Images/dr.mukund abhyankar.jpg'
import pramod from '../Rotary_Images/Rotary_Images/Pramod Ambekar.jpg'
import ujwala from '../Rotary_Images/Rotary_Images/Ujjwala Barve.jpg'
const Committee = () => {
  return (
    <>
      <Navbar />
      <Rotary />
      <div className='max-w-[1400px] mx-auto items-center w-full h-full p-2'>
        <div className='grid grid-cols-1 md:grid-cols-3 '>
          <div className='max-w-[1400px] mx-auto items-center w-full h-full p-2'>
            {/* {card} */}
            <div className='rounded-xl p-2'>
              {/* {overlay} */}

              <div className='bg-black/50 rounded-xl text-white flex flex-row'>
                <div className='max-h-[200px] lg:max-h-[200px] md:max-h-[100px] w-[160px] justify-center flex items-center'>
                  <img className="w-full h-full object-cover rounded-xl p-1" src={mukund} alt='img' />
                </div>
                <div className='flex flex-col items-center justify-center w-full h-full '>
                  {/* <div className='absolute w-[200px] h-[200px] bg-gradient-to-tl from-black '></div> */}
                  <h1 className='m-2 font-bold'>Member</h1>
                  <div className='flex-col p-2 text-[13px] w-[260px] lg:text-[15px] lg:w-[300px]'>
                    <p className='flex flex-row items-center'><BsFillPersonFill className="mx-2" />Dr.Mukund Abhyankar</p>
                    <p className='flex flex-row items-center'><CgOrganisation className="mx-2" />RC Pune Shivaji Nagar</p>
                    <p className='flex flex-row items-center'><BiSolidNetworkChart className="mx-2" />  Journalism</p>
                    <p className='flex flex-row items-center'><LiaBirthdayCakeSolid className="mx-2" /> 19/05/2000</p>
                    <p className='flex flex-row items-center'><AiFillPhone className="mx-2" /> 9011070020</p>
                    <p className='flex flex-row items-center'><AiOutlineMail className="mx-2" /> mukund_abhyankar@yahoo.com</p>
                  </div>
                </div>
              </div>

              {/* <img className='max-h-[200px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /> */}
            </div>
          </div>
          <div className='max-w-[1400px] mx-auto items-center w-full h-full p-2'>
                        {/* {card} */}
                        <div className='rounded-xl p-2'>
                            {/* {overlay} */}

                            <div className='bg-black/50 rounded-xl text-white flex flex-row'>
                                <div className='max-h-[200px] lg:max-h-[200px] md:max-h-[100px] w-[160px] justify-center flex items-center'>
                                    <img className="w-full h-full object-cover rounded-xl p-1" src={pramod} alt='img' />
                                </div>
                                <div className='flex flex-col items-center justify-center w-full h-full '>
                                    {/* <div className='absolute w-[200px] h-[200px] bg-gradient-to-tl from-black '></div> */}
                                    <h1 className='m-2 font-bold'>Chairperson - By Laws & MOP</h1>
                                    <div className='flex-col p-2 text-[13px] w-[260px] lg:text-[15px] lg:w-[300px]'>
                                        <p className='flex flex-row items-center'><BsFillPersonFill className="mx-2" />Pramod Ambekar</p>
                                        <p className='flex flex-row items-center'><CgOrganisation className="mx-2" /> Elite Software Development</p>
                                        <p className='flex flex-row items-center'><BiSolidNetworkChart className="mx-2" />  Occupation</p>
                                        <p className='flex flex-row items-center'><LiaBirthdayCakeSolid className="mx-2" /> 14/11/1986</p>
                                        <p className='flex flex-row items-center'><AiFillPhone className="mx-2" /> 9320557334</p>
                                        <p className='flex flex-row items-center'><AiOutlineMail className="mx-2" /> Pramod_ambekar@yahoo.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* <img className='max-h-[200px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /> */}
                        </div>
                    </div>
                    <div className='max-w-[1400px] mx-auto items-center w-full h-full p-2'>
                        {/* {card} */}
                        <div className='rounded-xl p-2'>
                            {/* {overlay} */}

                            <div className='bg-black/50 rounded-xl text-white flex flex-row'>
                                <div className='max-h-[200px] lg:max-h-[200px] md:max-h-[100px] w-[160px] justify-center flex items-center'>
                                    <img className="w-full h-full object-cover rounded-xl p-1" src={ujwala} alt='img' />
                                </div>
                                <div className='flex flex-col items-center justify-center w-full h-full '>
                                    {/* <div className='absolute w-[200px] h-[200px] bg-gradient-to-tl from-black '></div> */}
                                    <h1 className='m-2 font-bold'>Director</h1>
                                    <div className='flex-col p-2 text-[13px] w-[260px] lg:text-[15px] lg:w-[300px]'>
                                        <p className='flex flex-row items-center'><BsFillPersonFill className="mx-2" />Ujjwala Barve</p>
                                        <p className='flex flex-row items-center'><CgOrganisation className="mx-2" /> RC Pune Gandhi Bhavan</p>
                                        <p className='flex flex-row items-center'><BiSolidNetworkChart className="mx-2" /> JOURNALIST Journalism</p>
                                        <p className='flex flex-row items-center'><LiaBirthdayCakeSolid className="mx-2" /> 27/06/1985</p>
                                        <p className='flex flex-row items-center'><AiFillPhone className="mx-2" /> 9881464677</p>
                                        <p className='flex flex-row items-center'><AiOutlineMail className="mx-2" /> ujjwalabarve@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* <img className='max-h-[200px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /> */}
                        </div>
                    </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Committee