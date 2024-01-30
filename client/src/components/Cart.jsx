import React from 'react'
import { Link } from 'react-router-dom'
import { stables } from '../constants/stables'
import { CgProfile } from "react-icons/cg";

const Cart = (props) => {
    const { title, photo, createdAt, username, avatar, slug } = props
    return (
        <div className='border-2 rounded-xl'>
            <Link to={`/${slug}`}>
                <img className='rounded-t-xl w-full ' src={stables + photo} alt="" />
                <h1 className='p-1'>{title}</h1>
            </Link>
            <div className='px-1 pb-1 flex justify-between items-center'>
                <div className='w-10 flex items-center gap-1 '>
                    {
                        avatar ?
                            <img className='border-2 rounded-full w-10 h-10 object-cover' src={avatar} alt="" />
                            :
                            <span>
                                <CgProfile className='text-4xl' />
                            </span>
                    }
                    <h1>{username}</h1>
                </div>
                <div>{new Date(createdAt).getDate()} {" "}
                    {new Date(createdAt).toLocaleString("default", { month: "long" })}</div>
            </div>
        </div>
    )
}

export default Cart