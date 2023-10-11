import React, { useState } from 'react'
import Rotary from './rotary'
import Footer from './footer'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input';

const OtpAuth = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate()
    return (
        <>
            <Rotary />
            <div className="min-h-screen w-full flex justify-center mt-6 p-2" >
                <div className="relative w-full sm:max-w-md md:max-w-lg flex flex-col gap-3 p-3 py-5 rounded-md divide-y">
                    <h2 className='flex items-center justify-between m-2 text-black'> <MdKeyboardBackspace className='text-black cursor-pointer' size={30} onClick={() => navigate('/login')} />Enter OTP</h2>
                    <div className='border border-black'>

                    <OtpInput
                        className="border-2"
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                        />
                        </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OtpAuth