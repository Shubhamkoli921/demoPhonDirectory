import React, { useState } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [fname, setfname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(fname,phone,email)
    }
    return (
        // <div>Login</div>
        <div className="min-h-screen w-full flex items-center justify-center p-2" >
            <div className="relative w-full sm:max-w-md md:max-w-lg flex flex-col gap-3 p-3 py-5 bg-slate-50 rounded-md divide-y">
                <h2 className='flex items-center justify-between m-2'> <MdKeyboardBackspace size={30} onClick={() => navigate('/')} /> Log In</h2>

                <form onSubmit={handlesubmit} className="flex flex-col gap-4 pt-4">
                    <input
                        onChange={(e) => setfname(e.target.value)}
                        className='w-full text-lg  py-2 px-3 outline-none'
                        type='text'
                        placeholder='Enter Your Full Name'
                    />
                    <input
                        onChange={(e) => setphone(e.target.value)}
                        className='w-full text-lg  py-2 px-3 outline-none'
                        type='tel'
                        placeholder='Phone Number'
                    />
                    <input
                        onChange={(e) => setemail(e.target.value)}
                        className='w-full text-lg  py-2 px-3 outline-none'
                        type='email'
                        placeholder='Email'
                    />


                    <button className='w-full h-10 py-2 rounded-md bg-[#ce9847] disabled:bg-slate-500 text-white'>Log In</button>
                </form>
                <div>
                    <span>Don't have an account? <Link className='text-blue-600' to={'/signup'}>Sign Up</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Login