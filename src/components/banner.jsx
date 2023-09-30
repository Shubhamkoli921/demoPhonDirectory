import React from 'react'
import '../assets/style.css'
import Navbar from './navbar'
import Rotary from './rotary'
const Banner = () => {
    return (
        <>
        <Navbar />
        <Rotary/>
        <h1 className='text-4xl mx-auto flex font-bold max-w-[1640px] items-center p-2 ml-5'>Rotary Information</h1>
        <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-2 gap-6'>
            {/* {card} */   }
            <div className='rounded-xl relative w-full h-full mb-4' id='banner-relative'>
                {/* {overlay} */}
                <div className='absolute lg:max-h-[500px] md:max-h-[600px] bg-black/50 rounded-xl text-white p-2'>
                <div className='grid md:grid-cols-2 gap-2'>
                    <div></div>
                    <div className='flex mx-auto w-full justify-end items-center p-2'>
                    <img className="max-h-[300px] lg:max-h-[120px] sm:max-h-[120px] w-[100px] object-cover rounded-xl" src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' id='imgp' />
                    </div>
                </div>
                    <p className='font-bold text-2xl px-2 pt-4'>Dear Fello Rotarians</p>
                    <br />
                    <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus inventore ducimus nobis obcaecati assumenda qui nostrum neque, minima vitae optio impedit rem! Beatae fuga doloribus, quam ab consequatur distinctio.lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. In temporibus soluta vel quam eius laudantium nihil, nesciunt alias, minus, sint eaque dignissimos perferendis accusantium. Inventore, error. Autem iste laboriosam incidunt.</p>
                    <br/>
                    <p className='px-2'>Kind Regards,</p>
                    <br/>
                    <p className='px-2'>Sagar Mehta</p>
                    <p className='px-2'>Rotary Internantional President</p>
                </div>
                {/* <img id='imgw' className='lg:max-h-[500px] md:max-h-[560px] w-full object-cover rounded-xl' src='https://www.vhv.rs/dpng/d/427-4270980_geometric-background-png-background-geometric-design-png-transparent.png' alt='/'/> */}
            </div>
            <div className='rounded-xl relative w-full h-full mb-4' id='banner-relative'>
                {/* {overlay} */}
                <div className='absolute lg:max-h-[500px] md:max-h-[600px] bg-black/50 rounded-xl text-white p-2'>
                <div className='grid md:grid-cols-2 gap-2'>
                    <div></div>
                    <div className='flex mx-auto w-full justify-end items-center p-2'>
                    <img className="max-h-[300px] lg:max-h-[120px] sm:max-h-[120px] w-[100px] object-cover rounded-xl" src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' id='imgp' />
                    </div>
                </div>
                    <p className='font-bold text-2xl px-2 pt-4'>Dear Fello Rotarians</p>
                    <br />
                    <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus inventore ducimus nobis obcaecati assumenda qui nostrum neque, minima vitae optio impedit rem! Beatae fuga doloribus, quam ab consequatur distinctio.lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. In temporibus soluta vel quam eius laudantium nihil, nesciunt alias, minus, sint eaque dignissimos perferendis accusantium. Inventore, error. Autem iste laboriosam incidunt.</p>
                    <br/>
                    <p className='px-2'>Kind Regards,</p>
                    <br/>
                    <p className='px-2'>Sagar Mehta</p>
                    <p className='px-2'>Rotary Internantional President</p>
                </div>
                {/* <img id='imgw' className='lg:max-h-[500px] md:max-h-[560px] w-full object-cover rounded-xl' src='https://www.vhv.rs/dpng/d/427-4270980_geometric-background-png-background-geometric-design-png-transparent.png' alt='/'/> */}
            </div>
           
        </div>
        </>
    )
}

export default Banner