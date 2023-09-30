import React from 'react'
import { Link } from 'react-router-dom'
import {SiRotaryinternational} from 'react-icons/si'

const Footer = () => {
    return (
        <>

            <footer class="text-black bg-black/30">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <a href="/" class="flex items-center">
                            <SiRotaryinternational className="m-2 w-[40px] h-[40px] text-orange-500" />
                                <span class="self-center text-2xl font-bold whitespace-nowrap text-white ">Rotary 2022-2023</span>
                            </a>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul class="text-white  font-medium">
                                    <li class="mb-4">
                                        <a href="/" class="hover:underline">Messages</a>
                                    </li>
                                    <li>
                                        <a href="/" class="hover:underline">Rotary Info</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul class="text-white  font-medium">
                                    <li class="mb-4">
                                        <a href="/" class="hover:underline ">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="/" class="hover:underline">Twitter</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul class="text-white  font-medium">
                                    <li class="mb-4">
                                        <Link href="#" class="hover:underline">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#" class="hover:underline">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-white  sm:text-center ">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
                        </span>
                        <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer