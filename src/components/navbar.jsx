// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import { BsFillPersonFill } from 'react-icons/bs'
// import { IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'



const Navbar = () => {

    const [nav, setnav] = useState(false)
    const [open, isopen] = useState(false)

    // const props =  


    const handleOpen = () => {

        isopen(!open)
    }

    const [data, setData] = useState([])
    const [selectedOption, setSelectedOption] = useState('')


    useEffect(() => {
        ShowPending();
    }, [])


    const ShowPending = async () => {
        await fetch('https://rslsolution.com/Rotary_directory/admin/api/getMenuList', {
            method: 'GET',
            headers: {
                Accept: 'Application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then(res => res.json())
            .then(resData => {
                console.log('resData______data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', resData);
                setData(resData.results);
            })
            .catch(error => console.log('error', error));
    };

    const handlechange = (e) => {
        setSelectedOption(e.target.value)
    }
    // const fetchData = () => {

    //     axios.get('https://rslsolution.com/Rotary_directory/admin/api/getMenuList')
    //         // const data = await response.json()
    //         // setrotary(data.data)
    //         // console.log(data)
    //         // .then((res)=>res.json())
    //         .then((resp) => {

    //             setData(resp.data)
    //             console.log('resp.data',resp.data.results)
    //             // console.log(resp.data)
    //         })
    //         .catch((err) => console.log(err))
    // }



    return (

        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-2'>
            <div className='flex items-center'>
                <div onClick={() => setnav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <div className='ml-2 font-bold text-2xl text-blue-950 text-center'>Rotary</div>


            </div>
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
            {/* {Side drawer menu} */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => setnav(!nav)} />

                <h2 className='text-2xl p-4 font-bold'>Rotary <span className='font-bold text-blue-600'>2020-2023</span></h2>

                <nav className='h-full'>
                    <ul className='flex flex-col p-4 text-gray-800'>

                        {/* {console.log("data of console", data.results)} */}
                        {data.map((index) => (
                            <>
                                {console.log("in map ", index.title)}
                                <div>

                                    <button onClick={handleOpen} className='text-xl py-2 flex flex-col'>
                                        {index.title}
                                        {console.log("nested submenu", index.subMenu)}

                                    </button>
                                    <div onChange={handlechange} value={selectedOption}>

                                        {index.subMenu.map((type) => (
                                            <>
                                                {console.log("in nested map ", type.id)}

                                                {/* {open ? ( */}
                                                    <ul key={type.id} props={type.id}>
                                                        <li className='text-gray-500 text-[14px]'><Link to={`/${type.id}`}>{type.title}</Link></li>
                                                    </ul>
                                                {/* ) : null} */}
                                            </>
                                        ))}
                                    </div>

                                </div>

                            </>
                        ))}









                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar