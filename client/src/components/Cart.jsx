import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { stables } from '../constants/stables'
import { CgProfile } from "react-icons/cg";
import { addToFavorite } from '../features/user2/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";


const Cart = (props) => {
    const { title, photo, createdAt, username, avatar, slug, _id } = props

    const dispatch = useDispatch()
    const token = useSelector(state => state?.auth?.user?.token)

    const addFavorite = (id) => {
        const values = { postId: id }
        const data = { token, values }
        dispatch(addToFavorite(data))
    }

    const userFavorite = useSelector(state => state?.user?.userFavorite)
    // const favoriteClick = userFavorite?.favorite && userFavorite?.favorite.filter((item) => item?._id === _id).length

    return (
        <div className='relative border-2 rounded-xl hover:shadow-lg overflow-hidden group transition-all flex flex-col justify-between pb-2'>
            <Link to={`/${slug}`}>
                <img className='rounded-t-xl w-full md:h-56 h-32 object-cover' src={stables + photo} alt="" />
                <p className='line-clamp-2 m-2 font-semibold'>{title}</p>
            </Link>
            <div className='px-2 pb-1 flex justify-between items-center h-10 bg-white'>
                <div className='w-2/3 flex items-center gap-1 '>
                    {
                        avatar ?
                            <img className='border-2 rounded-full w-10 h-10 object-cover' src={avatar} alt="" />
                            :
                            <span>
                                <CgProfile className='text-4xl' />
                            </span>
                    }
                    <h1 className='truncate'>{username}</h1>
                </div>
                <div className='w-1/3 text-end text-nowrap truncate'>{new Date(createdAt).getDate()} {" "}
                    {new Date(createdAt).toLocaleString("default", { month: "long" })}
                </div>
            </div>
            <div onClick={() => addFavorite(_id)} className='bg-white p-1 rounded-full absolute -right-9 group-hover:right-3 top-3  transition-all cursor-pointer'>
                {userFavorite?.favorite && userFavorite?.favorite.filter((item) => item?._id === _id).length === 1 ? <FaHeart className='text-xl text-red-500' /> : <FaHeart className='text-xl ' />}
            </div>
        </div>
    )
}

export default Cart