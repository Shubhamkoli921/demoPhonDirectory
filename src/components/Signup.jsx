import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {MdKeyboardBackspace} from 'react-icons/md'
import Rotary from './rotary'
import Footer from './footer'
const Signup = () => {

    const [fname, setfname] = useState('')
    const [Cname, setCname] = useState('')
    const [email, setemail] = useState('')
    const [date,setDate]=useState('')

    const [occupation, setOccupation] = useState('')
    const [phone, setphone] = useState('')
    const navigate = useNavigate()

    const handlesubmit =(e)=>{
        e.preventDefault()
        console.log(fname,Cname,occupation,date,phone,email)
    }

    return (
        <>
            <Rotary/>
            <div className="min-h-screen w-full flex items-center justify-center p-2" >
                <div className="relative w-full sm:max-w-md md:max-w-lg flex flex-col gap-3 p-3 py-5 bg-slate-50 rounded-md divide-y">
                <h2 className='flex items-center justify-between m-2'> <MdKeyboardBackspace className='cursor-pointer' size={30} onClick={()=> navigate('/') } /> Sign Up</h2>
                    <form onSubmit={handlesubmit} className="flex flex-col gap-4 pt-4">
                        <input
                            onChange={(e) => setfname(e.target.value)}
                            className='w-full text-lg  py-2 px-3 outline-none'
                            type='text'
                            placeholder='Enter Your Full Name'
                        />
                        <input
                            onChange={(e) => setCname(e.target.value)}
                            className='w-full text-lg  py-2 px-3 outline-none'
                            type='text'
                            placeholder='Company Name'
                        />
                        <input
                            onChange={(e) => setOccupation(e.target.value)}
                            className='w-full text-lg  py-2 px-3 outline-none'
                            type='text'
                            placeholder='Your Occupation'
                        />
                        
                        <input
                            onChange={(e) => setDate(e.target.value)}
                            className='w-full text-lg  py-2 px-3 outline-none'
                            type='date'
                            min="1997-01-01" max="2030-12-31"
                            placeholder='DD-MM-YYYY'
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
                        
                        <button className='w-full h-10 py-2 rounded-md bg-orange-500 disabled:bg-slate-500 text-white'>Sign In</button>
                    </form>
                    <div>
                        <span>Already have an account? <Link className='text-blue-600' to={'/login'}>Login</Link></span>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Signup