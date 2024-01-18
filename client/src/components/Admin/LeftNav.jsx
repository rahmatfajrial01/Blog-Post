import React from 'react'
import { Link } from 'react-router-dom'

const LeftNav = () => {
    return (
        <nav className='bg-slate-200 min-w-fit min-h-screen pt-5'>
            <h1 className='font-bold text-2xl  text-center mb-5 '>Admin.</h1>
            <ul className='ps-7 pe-7 transition-all font-semibold'>
                <Link to={'/admin'}>
                    <li className='hover:bg-white py-2 ps-2 pe-10 rounded-xl'>Dashboard </li>
                </Link>
                <Link to={'/admin/user'}>
                    <li className='hover:bg-white py-2 ps-2 pe-10 rounded-xl'>User</li>
                </Link>
                <Link to={'/admin/category'}>
                    <li className='hover:bg-white py-2 ps-2 pe-10 rounded-xl'>Category</li>
                </Link>
                <Link to={'/admin/list-post'}>
                    <li className='hover:bg-white py-2 ps-2 pe-10 rounded-xl'>Post</li>
                </Link>
                <Link to={'/'}>
                    <li className='hover:bg-white py-2 ps-2 pe-10 rounded-xl'>Back </li>
                </Link>
            </ul>
        </nav >
    )
}

export default LeftNav