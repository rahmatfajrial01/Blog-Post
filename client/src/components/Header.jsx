import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-black text-white sticky top-0 z-50'>
            <section className='container mx-auto py-3 flex justify-between items-center'>
                <div className='text-3xl font-semibold '>
                    <Link to={'/'}>Blog.</Link>

                </div>
                <div className='border  py-1 px-2 rounded-full border-white hover:text-black hover:bg-white'>
                    <Link to={'/login'}>Login</Link>
                </div>
            </section>
        </header>
    )
}

export default Header