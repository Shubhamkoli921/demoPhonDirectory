import React from 'react'

const Landing = () => {
    return (
        <>
            <div className='max-w-[1640px] mx-auto p-4'>
                <div className='max-h-[500px] relative'>
                    {/* {overlay} */}
                    <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex-col justify-center'>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Rotary <span className='text-blue-600'>RID 3131 </span></h1>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-blue-600'>DIRECTORY  </span>2022-2023</h1>
                    </div>
                    
                    <img className='w-full max-h-[500px] object-cover' src='https://img.freepik.com/free-vector/flat-design-polygonal-background_23-2148900723.jpg' alt='food' />
                </div>
                
            </div>
        </>
    )
}

export default Landing