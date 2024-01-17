import React from 'react'
import Cart from '../components/Cart'
import images from '../constants/images'
import { FaSearch } from "react-icons/fa";


const Home = () => {
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
                    <span>category 1</span>
                    <span>category 2</span>
                    <span>category 3</span>
                    <span>category 4</span>
                    <span>category 5</span>
                    <span>category 6</span>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-5'>
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                </div>
                <div className='flex justify-center my-5'>
                    <span className='border rounded-xl  p-3'>more </span>
                </div>
            </div>
        </>
    )
}

export default Home