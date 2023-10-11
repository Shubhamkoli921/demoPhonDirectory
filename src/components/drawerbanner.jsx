// import React, { useEffect, useState } from 'react'
import Footer from './footer'
import Rotary from './rotary'
import Navbar from './navbar'
import anilparmar from '../assets/anilparmar.jpeg'
// import axios from 'axios'
// import { useFetcher } from 'react-router-dom'


const DrawerBanner = () => {


    return (
        <>
            <Navbar />
            <Rotary />
            <h1 className='text-4xl mx-auto flex font-bold max-w-[1640px]  items-center p-2 ml-5 text-blue-950'>
                {/* {rotary.data.subMenu.title} */}
                RI District Governor Anil Parmar's Message
            </h1>
            <div className='max-w-[1640px] mx-auto p-4 items-center w-full h-full '>
                {/* {card} */}
                <div className='rounded-xl' id='banner-relative'>
                    {/* {overlay} */}
                    <div className=' w-full h-full bg-black/50 rounded-xl text-white p-2'>
                        <div className='grid md:grid-cols-2 gap-2'>
                            <div></div>
                            <div className='flex mx-auto w-full justify-end items-center p-2'>
                                <img className="max-h-[300px] lg:max-h-[120px] sm:max-h-[120px] w-[100px] object-cover rounded-xl" src={anilparmar} alt='img' id='imgp' />
                            </div>
                        </div>
                        <p className='font-bold text-2xl px-2 pt-4'>Dear Fello Rotarians</p>
                        <br />
                        <p className='px-2'>It gives me immense pleasure to communicate with you in
                            these challenging times of unprecedented Crisis due to COVID-
                            19.
                            At the Outset my Congratulations to DG Pankaj and First Lady
                            Priya on being installed as the 14th District Governor and First
                            Lady of RID 3131.
                            Friends, current membership trends are a challenge for RID
                            3131 and membership development and retention should be
                            our highest priority.
                            Our district has a very strong history of TRF Giving and I appeal
                            to all Rotarians to contribute atleast 100 USD to APF every
                            year(EREY) and more possible to continue and increase the
                            quantum of service to community through The Rotary
                            Foundation, DG Pankaj and First Lady Priya have taken the lead
                            and I congratulate them both for the generosity and strong
                            desire to help the community at large.
                            DG myself and DGN Manjoo are strong proponents of Strategic
                            Planning at District as well as club level and would request all
                            Rotarians to actively participate in Strategic Planning and come
                            up with action plans and roadmap for respective clubs.
                            DG Pankaj and his Team has been working with zeal in these
                            challenging times and all clubs and Presidents are energised
                            with the motivational and well planned training events
                            arranged virtually by DG Pankaj and his team. All the training
                            events have been virtual and well attended and DG
                            Pankaj/District Trainer PDG Dr. Shailesh and Team 21/22 have
                            given very motivating and Informative training with use of
                            technology never done before in our District. I have also got
                            opportunities to interact with you all and I am amazed by the
                            level of enthusiasm you all are carrying.
                            Hema and myself take this opportunity to wish DG Pankaj. First
                            Lady Priya and whole team a great Rotary Year 21/22 and I am
                            sure RID 3131 will achieve greater heights and rock in RY 21/22
                            with active support of all Rotarians of RID 3131.1 take
                            opportunity to thank all Rotarians of RID 3131 for the love and
                            affection showered on me over the years.</p>
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

export default DrawerBanner