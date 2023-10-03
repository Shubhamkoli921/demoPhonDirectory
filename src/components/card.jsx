import React from 'react'
// import { BsFillPersonFill } from 'react-icons/bs'
// import { CgOrganisation } from 'react-icons/cg'
// import { BiSolidNetworkChart } from 'react-icons/bi'
// import { LiaBirthdayCakeSolid } from 'react-icons/lia'
// import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import CardComponent from './cardcomponent'
import Rotary from './rotary'
import Navbar from './navbar'
import Footer from './footer'

const Cards = () => {
    return (
        <>
            <Navbar />
            <Rotary />
            <div className='max-w-[1400px] mx-auto items-center w-full h-full p-2'>
                <div className='grid grid-cols-1 md:grid-cols-3 '>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Cards