// import React, { useEffect, useState } from 'react'
import '../assets/style.css'
import Navbar from './navbar'
import Rotary from './rotary'
import Footer from './footer'
import shekarmehta from '../assets/shekarmehta.jpeg'

const Banner = () => {

    // const [rotary,setrotary] = useState([])
    // useEffect(()=>{
    //     fetch('https://rslsolution.com/Rotary_directory/api/getMenuList')
    //     .then((resp)=>{
    //         setrotary(resp.data)
    //         console.log(resp)
    //     })

    // })

    return (
        <>
            <Navbar />
            <Rotary />
            <h1 className='text-4xl mx-auto flex font-bold max-w-[1640px]  items-center p-2 ml-5 text-blue-950'>
                {/* {rotary.data.subMenu.title} */}
                RI President Shekar Mehta's Message
            </h1>
            <div className='max-w-[1640px] mx-auto p-4 items-center w-full h-full '>
                {/* {card} */}
                <div className='rounded-xl' id='banner-relative'>
                    {/* {overlay} */}
                    <div className=' w-full h-full bg-black/50 rounded-xl text-white p-2'>
                        <div className='grid md:grid-cols-2 gap-2'>
                            <div></div>
                            <div className='flex mx-auto w-full justify-end items-center p-2'>
                                <img className="max-h-[300px] lg:max-h-[120px] sm:max-h-[120px] w-[100px] object-cover rounded-xl" src={shekarmehta} alt='img' id='imgp' />
                            </div>
                        </div>
                        <p className='font-bold text-2xl px-2 pt-4'>Dear Fello Rotarians</p>
                        <br />
                        <p className='px-2'>We have been through trying times together. We have helped
                            the world cope with uncertainty and adapt to rapid change.
                            Now is the time for us to dream big.
                            It is time for us to take on major challenges, to do more and
                            grow more, and most of all, for us to care for and share with
                            others.<br/>
                            This year, we note all the ways that we Serve to Change Lives.
                            Service is the rent we pay for our time on earth and we will
                            expand Rotary service as we grow more and do more. We will
                            grow through Each One, Bring One. If every Rotary member
                            could bring just one more person to Rotary, there is no limit to
                            how much we can grow. We will do more by putting a special
                            emphasis on empowering girls, so young women can have
                            improved opportunities worldwide. We will also feature Rotary
                            Days of Service, so that all members share in our good works
                            around the globe and look for new ways to serve beyond their
                            backyards.
                            It is our attitude that defines service. We all have a great
                            opportunity to lead by example and to inspire each other to
                            participate in projects that have a measured and sustained
                            impact.
                            The District Board has assumed important responsibilities and I
                            thank them for this hard work. They have made a commitment
                            to help grow Rotary, adapt to the digital future and make
                            Rotary more appealing to younger generations.
                            Your good work will help us serve our communities and help
                            Rotary thrive so we can Serve to Change Lives.</p>
                        <br />
                        <p className='px-2'>Kind Regards,</p>
                        <br />
                        <p className='px-2'>Sagar Mehta</p>
                        <p className='px-2'>Rotary Internantional President</p>
                    </div>
                    {/* <img id='imgw' className='lg:max-h-[500px] md:max-h-[560px] w-full object-cover rounded-xl' src='https://www.vhv.rs/dpng/d/427-4270980_geometric-background-png-background-geometric-design-png-transparent.png' alt='/'/> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Banner