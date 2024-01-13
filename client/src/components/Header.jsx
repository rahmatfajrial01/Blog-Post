import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-black text-white sticky top-0 z-50'>
            <section className='container mx-auto py-3 flex justify-between items-center'>
                <div className='text-3xl font-bold '>
                    <Link to={'/'}>BlogPost.</Link>

                </div>

                <div className='space-x-10 font-semibold'>
                    {/* <Link to={'/login'}>Login</Link> */}
                    <span className='hover:opacity-85 hover:underline-offset-4 hover:underline transition-all'>Home</span>
                    <span className='hover:opacity-85 hover:underline-offset-4 hover:underline transition-all'>About</span>
                    <span className='hover:opacity-85 hover:underline-offset-4 hover:underline transition-all'>Service</span>
                    <span className='hover:opacity-85 hover:underline-offset-4 hover:underline transition-all'>Contact</span>
                    <Link className='border-2  py-1 px-5 rounded-full border-white hover:text-black hover:bg-white transition-all' to={'/admin'}>Admin</Link>
                </div>
            </section>
        </header>
    )
}

export default Header