import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { stables } from '../constants/stables'
import { getAllPosts, getSinglePost, resetState } from '../features/post/postSlice'

const DetailCart = () => {
    const dispatch = useDispatch()

    let getUrl = location?.pathname?.split('/')[1]
    const postState = useSelector((state) => state?.post?.singlePost)
    const posts = useSelector(state => state?.post?.posts)

    let [url, setUrl] = useState(getUrl)

    console.log(postState)
    useEffect(() => {
        dispatch(getSinglePost(url))
    }, [url])

    const searchKeyword = ''
    const page = ''
    const limit = ''
    const cat = ""
    useEffect(() => {
        dispatch(resetState())
        dispatch(getAllPosts({ searchKeyword, page, limit, cat }))
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [url]);

    return (
        <section className='flex justify-between container mx-auto my-5 gap-10 min-h-screen' >
            <div className='w-3/4 space-y-2'>
                <img className='rounded-xl h-96 object-cover w-full  ' src={stables + postState?.photo} alt="" />
                <h1 className='font-semibold text-xl'>{postState?.title}</h1>
                <p className=''> {postState?.caption}     </p>
                <div className='px-1 pb-1 flex justify-between items-center'>
                    <div className='w-10 flex items-center gap-1 '>
                        <img className='border-2 w-10 h-10 object-cover rounded-full' src={stables + postState?.user?.avatar} alt="" />
                        <h1 >{postState?.user?.username}</h1>
                    </div>
                    <div>{postState?.createdAt}</div>
                </div>
            </div>
            <div className='w-1/4 space-y-5'>
                {
                    posts?.result && posts?.result.map((item, key) =>
                        <div key={key} onClick={() => setUrl(item.slug)} className='flex gap-2 ' >
                            <img className='rounded-xl cursor-pointer  h-24  ' src={stables + item?.photo} alt="" />
                            <div className='p-1 w-full flex flex-col justify-center overflow-hidden h-24 '>
                                <h1 >{item?.title}</h1>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>

    )
}

export default DetailCart