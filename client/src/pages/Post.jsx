import React from 'react'
import Input from '../components/Input'

const Post = () => {
    return (
        <section className='min-h-screen container mx-auto mt-5'>
            <div className='w-full flex  justify-center h-96 '>
                <img className='object-cover' src="https://images.unsplash.com/photo-1611742608984-e5260c1a0378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDN8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" />
            </div>
            <Input />
            <Input />
        </section >

    )
}

export default Post