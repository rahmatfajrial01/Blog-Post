import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart'
import images from '../constants/images'
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, resetState } from '../features/post/postSlice';
import { getAllPostCategories } from '../features/postCategory/postCategorySlice';
import { getUserFavorite } from '../features/user2/userSlice';


const Home = () => {

    const dispatch = useDispatch()

    const posts = useSelector(state => state?.post?.posts)
    const postCategories = useSelector(state => state?.postCategory)
    const searchKeyword = ''
    const page = ''

    const [limit, setLimit] = useState(4)
    const [cat, setCat] = useState('')

    useEffect(() => {
        dispatch(resetState())
    }, [])

    useEffect(() => {
        dispatch(getAllPosts({ searchKeyword, page, limit, cat }))
        dispatch(getAllPostCategories())
    }, [limit, cat])

    const token = useSelector(state => state?.auth?.user?.token)
    const addedToFavorite = useSelector(state => state?.user?.addedToFavorite)
    useEffect(() => {
        dispatch(getUserFavorite(token))
    }, [addedToFavorite])

    return (
        <>
            <div className='bg-black -mt-8'>
                <div className='container mx-auto text-white min-h-[50vh]'>
                    <div className='flex'>
                        <div className=' md:w-1/2 min-h-[50vh] flex  justify-center items-center'>
                            <div className='flex flex-col lg:gap-10 gap-10  md:gap-7 justify-center px-10 '>
                                <h1 className='text-2xl font-semibold'>Welcome</h1>
                                <p>Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get starred, from helpful tips and tutorials</p>
                                <div >
                                    <span className='relative'>
                                        <input placeholder='search' className=' text-black focus:outline-none py-1 ps-3 pe-8 w-4/5 rounded-2xl' type="text" />
                                        <FaSearch className='absolute top-1 right-3 text-black' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 min-h-[50vh] md:flex hidden justify-end items-center pe-10 '>
                            <img className='w-full xl:w-[80%]' src={images.Hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='min-h-[50vh] container mx-auto'>
                <div className='flex justify-between mt-5 '>
                    <span onClick={() => { setCat(""), setLimit(4) }} className="cursor-pointer">All</span>
                    {
                        postCategories?.postCategories && postCategories?.postCategories.map((item, key) =>
                            <span className="cursor-pointer" onClick={() => setCat(item._id)} key={key}>{item?.title}</span>
                        )
                    }

                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-5'>
                    {
                        posts?.result && posts.result.map((item, key) => {
                            return <Cart
                                key={key}
                                _id={item?._id}
                                title={item?.title}
                                photo={item?.photo}
                                createdAt={item?.createdAt}
                                avatar={item?.user?.avatar}
                                username={item?.user?.username}
                                slug={item?.slug}
                            />
                        }
                        )
                    }
                </div>
                <div className='flex justify-center my-5'>
                    <span onClick={() => setLimit(limit + 4)} className='border rounded-xl cursor-pointer p-3'>more </span>
                </div>
            </div>
        </>
    )
}

export default Home