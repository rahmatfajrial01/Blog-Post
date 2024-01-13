import React from 'react'
import { Link } from 'react-router-dom'

const LeftNav = () => {
    return (
        <nav className='bg-slate-200 w-56 min-h-screen pt-5'>
            <h1 className='font-bold text-2xl  text-center mb-5 '>Admin.</h1>
            <ul className='px-5 transition-all font-semibold'>
                <li className='hover:bg-white p-2 rounded-xl'><Link to={'/admin'}>Dashboard </Link> </li>
                <li className='hover:bg-white p-2 rounded-xl'><Link to={'/admin/user'}>User</Link> </li>
                <li className='hover:bg-white p-2 rounded-xl' ><Link to={'/admin/category'}>Category</Link></li>
                {/* <li><Link to={'/admin/post'}>Post</Link></li> */}
                <li className='hover:bg-white p-2 rounded-xl'><Link to={'/'}>Kembali</Link></li>
            </ul>
        </nav>
    )
}

export default LeftNav