import React from 'react'
import Body from '../components/Body'
import Cart from '../components/Cart'

const Home = () => {
    return (
        <>
            <div className='bg-black '>
                <div className='container mx-auto text-white min-h-[50vh]'>
                    <div className=' flex'>
                        <div className='w-1/2 min-h-[50vh] flex  justify-center items-center'>
                            <div className='flex flex-col gap-5 justify-center p-10 '>
                                <h1 className='text-3xl font-semibold'>Welcome</h1>
                                <p>Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get starred, from helpful tips and tutorials</p>
                                <div className='flex items-center'>
                                    <input placeholder='...' className=' text-black focus:outline-none py-1 px-3  w-2/3 rounded-s-xl' type="text" />
                                    <button className=' bg-white py-1 px-4 text-black rounded-e-xl ' >s</button>
                                </div>
                            </div>

                        </div>
                        <div className='w-1/2 min-h-[50vh] flex  justify-center items-center'>
                            hero 2
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
                <div className='grid grid-cols-4 gap-5 mt-5'>
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