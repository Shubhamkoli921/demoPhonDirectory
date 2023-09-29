import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

import { Link } from 'react-router-dom'



const Navbar = () => {

    const [nav, setnav] = useState(false)
    const [open, isopen] = useState(false)
    const [open1,setopen1]= useState(false)

    const handleopen1 = ()=>{
        setopen1(!open1)
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
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20} />
                <input type='text' placeholder='Search' className='bg-transparent p-2 focus:outline-none' />
            </div>
            <div className='flex justify-between'>
                <Link className=' text-black bg-transparent hidden md:flex items-center p-2 m-2  rounded hover:text-white hover:bg-black cursor-pointer duration-500' to={"/login"} >
                    Login
                </Link>
                <Link className=' text-black bg-transparent hidden md:flex items-center p-2 m-2  rounded hover:text-white hover:bg-black cursor-pointer duration-500' to={'/signin'} > Sign In </Link>


            </div>
            {nav ? <div className='bg-black/80 fixed -full h-screen z-10 top-0 left-0'></div> : ''}
            {/* {Side drawer menu} */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => setnav(!nav)} />
                <h2 className='text-2xl p-4 font-bold   '>Rotary <span className='font-bold text-blue-600'>2020-2023</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <button onClick={handleOpen} className='text-xl py-4 flex'>
                            Messages
                        </button>
                        {open ? (
                            <ul>
                                <li><Link to='/drawerbanner'>1. RI President Shekar Mehta's Message</Link></li>
                                <li><Link to='/drawerbanner'>2. RI District Governor Anil Parmar's Message</Link></li>
                            </ul>
                        ) : null}
                       <button onClick={handleopen1} className='text-xl py-4 flex'>
                            Rotary information
                        </button>
                        {open1 ? (
                            <ul>
                                <li><Link to='/drawerbanner'>1. RI President Shekar Mehta's Message</Link></li>
                                <li><Link to='/drawerbanner'>2. RI District Governor Anil Parmar's Message</Link></li>
                            </ul>
                        ) : null}
                        <button  className='text-xl py-4 flex'>
                            <Link to={'/card'}>Fond Memories</Link>
                        </button>
                        <button  className='text-xl py-4 flex'>
                            District committees
                        </button>
                        <button  className='text-xl py-4 flex'>
                            Administration Committees
                        </button>
                        <button  className='text-xl py-4 flex'>
                            Membership Committees
                        </button>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar