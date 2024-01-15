import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { Menu } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux';
import { IoIosLogOut } from "react-icons/io";
import { logoutUser, resetState } from '../features/user/userSlice';



const Header = () => {
    // const [isOpen, setIsOpen] = useState(false)
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleLogout = () => {
        // localStorage.clear()
        // navigate('/')
        // window.location.reload()
        setTimeout(() => {
            dispatch(logoutUser())
        }, 100);
        dispatch(resetState())
    }

    return (
        <header className='bg-black text-white sticky top-0 z-50'>
            <section className='container mx-auto py-3 flex justify-between items-center'>
                <div className='text-3xl font-bold '>
                    <Link to={'/'}>BlogPost.</Link>
                </div>

                <div className='space-x-10 font-semibold flex items-center'>
                    {/* <Link to={'/login'}>Login</Link> */}
                    <span className='hover:opacity-85 hover:underline-offset-4 hover:underline transition-all cursor-pointer'>Home</span>
                    <span className='hover:opacity-85 hover:underline-offset-4 hover:underline transition-all cursor-pointer'>About</span>
                    <span className='hover:opacity-85 hover:underline-offset-4 hover:underline transition-all cursor-pointer'>Service</span>
                    <span className='hover:opacity-85 hover:underline-offset-4 hover:underline transition-all cursor-pointer'>Contact</span>
                    {/* <Link className='border-2  py-1 px-5 rounded-full border-white hover:text-black hover:bg-white transition-all' to={'/admin'}>Admin</Link> */}
                    {/* <div onClick={() => { setIsOpen((prev) => !prev) }} className='relative group'>
                        <div className='text-3xl flex  items-center ' ><CgProfile /></div>
                        <div className={`absolute  ${isOpen ? "block" : 'hidden'}  right-0 top-12 bg-white text-black p-2 rounded-xl   text-end `}>
                            <div className='flex flex-col'>
                                <Link className='hover:bg-slate-300 px-2 py-1 rounded-xl transition-all' to={'/admin'}>Dashboard</Link>
                                <Link className='hover:bg-slate-300 px-2 py-1 rounded-xl transition-all' to={'/post'}>Add Blog</Link>

                            </div>
                        </div>
                    </div> */}
                    {
                        authState.user === null
                            ?
                            <Link className='border-2  py-1 px-5 rounded-full border-white hover:text-black hover:bg-white transition-all' to={'/login'}>Login</Link>
                            :
                            <div className='relative'>
                                <Menu>
                                    <Menu.Button className='flex items-center text-3xl'><CgProfile /></Menu.Button>
                                    <Menu.Items className='absolute bg-white text-black right-0 top-12 p-2 rounded-xl flex flex-col text-end border'>
                                        <Menu.Item>
                                            <Link className='hover:bg-slate-300 px-2 py-1 rounded-xl transition-all' to={'/admin'}>Dashboard</Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link className='hover:bg-slate-300 px-2 py-1 rounded-xl transition-all' to={'/post'}>Add Blog</Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link className='hover:bg-slate-300 px-2 py-1 rounded-xl transition-all '
                                                onClick={handleLogout}
                                            >Logout</Link>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            </div>
                    }
                </div>
            </section >
        </header >
    )
}

export default Header