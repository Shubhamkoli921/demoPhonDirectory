import React from 'react'
// import { Link } from 'react-router-dom'
import {SiRotaryinternational} from 'react-icons/si'
import {BsFacebook,BsTwitter} from 'react-icons/bs'
// import { SocialIcon } from 'react-social-icons'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
    return (
        <>

            <footer class="text-black bg-black/50">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <a href="/" class="flex items-center">
                            <SiRotaryinternational className="m-2 w-[40px] h-[40px] text-orange-500" />
                                <span class="self-center text-2xl font-bold whitespace-nowrap text-white ">Rotary 2022-2023</span>
                            </a>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div className='flex gap-2 text-white font-bold justify-center items-center'>
                               <RiInstagramFill size={20} />
                               <BsFacebook size={20} />
                               <BsTwitter size={20}/>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-white  sm:text-center ">© 2023 <a href="https://flowbite.com/" class="hover:underline">Rotary RID 3131™</a>. All Rights Reserved.
                        </span>
                        
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer