import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'

import { Link } from 'react-router-dom'



const Navbar = () => {

    const [nav, setnav] = useState(false)
    const [nav1, setnav1] = useState(false)
    const [open, isopen] = useState(false)
    const [open1, setopen1] = useState(false)
    const [open2, setopen2] = useState(false)
    const [open3, setopen3] = useState(false)
    const [open4, setopen4] = useState(false)
    const [open5, setopen5] = useState(false)
    const [open6, setopen6] = useState(false)

    const handleopen1 = () => {
        setopen1(!open1)
    }
    const handleopen2 = () => {
        setopen2(!open2)
    }
    const handleopen3 = () => {
        setopen3(!open3)
    }
    const handleopen4 = () => {
        setopen4(!open4)
    }
    const handleopen5 = () => {
        setopen5(!open5)
    }
    const handleopen6 = () => {
        setopen6(!open6)
    }
    const handleOpen = () => {

        isopen(!open)
    }

    return (

        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-2'>
            <div className='flex items-center'>
                <div onClick={() => setnav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
            </div>
           
            <div className='flex justify-between'>
                <Link className=' text-black bg-transparent hidden md:flex items-center p-2 m-2  rounded hover:text-white hover:bg-black cursor-pointer duration-500' to={"/login"} >
                    Login
                </Link>
                <Link className=' text-black bg-transparent hidden md:flex items-center p-2 m-2  rounded hover:text-white hover:bg-black cursor-pointer duration-500' to={'/signup'} > Sign Up </Link>


            </div>
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
            {/* {Side drawer menu} */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => setnav(!nav)} />
                <h2 className='text-2xl p-4 font-bold   '>Rotary <span className='font-bold text-blue-600'>2020-2023</span></h2>
                <nav className='h-full'>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <button onClick={handleOpen} className='text-xl py-4 flex'>
                            Messages
                        </button>
                        {open ? (
                            <ul>
                                <li className='text-gray-500'><Link to='/banner'>1. RI President Shekar Mehta's Message</Link></li>
                                <li className='text-gray-500'><Link to='/drawerbanner'>2. RI District Governor Anil Parmar's Message</Link></li>
                            </ul>
                        ) : null}
                        <button onClick={handleopen1} className='text-xl py-4 flex'>
                            Rotary information
                        </button>
                        {open1 ? (
                            <ul>
                                <li className='text-gray-500'><Link to='/club'>1. Governor's Official club visit  </Link></li>
                                <li className='text-gray-500'><Link to='/events'>2. District Events 2022-2023</Link></li>
                            </ul>
                        ) : null}
                        <button onClick={handleopen2} className='text-xl py-4 flex'>
                            Fond Memories
                        </button>
                        {open2 ? (
                            <ul>
                                <li className='text-gray-500'><Link to='/card'>College of governor and district first ladies</Link></li>
                            </ul>
                        ) : null}
                        <button onClick={handleopen3} className='text-xl py-4 flex'>
                            District Committees
                        </button>
                        {open3 ? (
                            <ul>
                                <li className='text-gray-500'><Link to='/committee'>1. District Core Committee</Link></li>
                                <li className='text-gray-500'><Link to='/committee'>2. Finance Committee</Link></li>
                            </ul>
                        ) : null}
                        <button onClick={handleopen4} className='text-xl py-4 flex'>
                            Administration Committees
                        </button>
                        {open4 ? (
                            <ul>
                                <li className='text-gray-500'><Link to='/committee'>1. Club Administration Committee</Link></li>
                                <li className='text-gray-500'><Link to='/committee'>2. Strategic Planning Committee</Link></li>
                            </ul>
                        ) : null}
                        <button onClick={handleopen5} className='text-xl py-4 flex'>
                            Membership Committees
                        </button>
                        {open5 ? (
                            <ul>
                                <li className='text-gray-500'><Link to='/committee'>1. Membership Committees</Link></li>
                                <li className='text-gray-500'><Link to='/committee'>2. Alumini Committee</Link></li>
                            </ul>
                        ) : null}
                        <button onClick={handleopen6} className='text-xl py-4 flex'>
                            Rotary Foundation
                        </button>
                        {open6 ? (
                            <ul>
                                <li className='text-gray-500'><Link to='/committee'>1. Foundation Promotion Committees </Link></li>
                                <li className='text-gray-500'><Link to='/committee'>2. Global Grants & Stewardship Committee</Link></li>
                            </ul>
                        ) : null}

                    </ul>
                </nav>
            </div>
            <BsFillPersonFill size={30} onClick={()=>setnav1(!nav1)} className='cursor-pointer lg:hidden md:hidden' />
            {nav1 ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 right-0'></div> : ''}
            {/* {Side drawer menu} */}
            <div className={nav1 ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => setnav1(!nav1)} />
                {/* <h2 className='text-2xl p-4 font-bold   '>Rotary <span className='font-bold text-blue-600'>2020-2023</span></h2> */}
                <nav className='h-full'>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <button className='text-xl py-4 flex cursor-pointer'>
                            <Link to={'/login'}>Login</Link>
                        </button>
                        <button className='text-xl py-4 flex cursor-pointer'>
                        <Link to={'/signup'}>SignUp</Link>
                        </button>



                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar