import React, { useState } from 'react'

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(email,password)
    }
  return (
    // <div>Login</div>
    <div className="min-h-screen w-full flex items-center justify-center p-2" >
    <div className="relative w-full sm:max-w-md md:max-w-lg flex flex-col gap-3 p-3 py-5 bg-slate-50 rounded-md divide-y">
        <h2>Log In</h2>
        <form onSubmit={handlesubmit} className="flex flex-col gap-4 pt-4">
            <input
                onChange={(e)=>setemail(e.target.value)}
                className='w-full text-lg  py-2 px-3 outline-none'
                type='email'
                placeholder='Email'
            />
            <input
                onChange={(e)=>setpassword(e.target.value)}
                className='w-full text-lg  py-2 px-3 outline-none'
                type='password'
                placeholder='Password'
            />
            
            <button className='w-full h-10 py-2 rounded-md bg-[#ce9847] disabled:bg-slate-500 text-white'>Log In</button>
        </form>
    </div>
</div>
  )
}

export default Login