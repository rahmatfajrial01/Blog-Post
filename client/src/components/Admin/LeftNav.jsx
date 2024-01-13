import React from 'react'
import { Link } from 'react-router-dom'

const LeftNav = () => {
    return (
        <nav className='bg-slate-200 w-56 min-h-screen pt-5'>
            <h1 className='font-bold text-2xl  text-center mb-5 '>Admin.</h1>
            <ul className='ps-5 space-y-3'>
                <li><Link to={'/admin'}>Dashboard </Link> </li>
                <li><Link to={'/admin/user'}>User</Link> </li>
                <li><Link to={'/admin/category'}>Category</Link></li>
                {/* <li><Link to={'/admin/post'}>Post</Link></li> */}
                <li><Link to={'/'}>Kembali</Link></li>
            </ul>
        </nav>
    )
}

export default LeftNav