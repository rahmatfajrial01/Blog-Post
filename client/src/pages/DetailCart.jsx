import React, { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { stables } from '../constants/stables'
import { createComment, getAllComments } from '../features/comment/commentSlice'
import { getAllPosts, getSinglePost, resetState } from '../features/post/postSlice'

const DetailCart = () => {
    const dispatch = useDispatch()

    const getUrl = location?.pathname?.split('/')[1]
    const postState = useSelector((state) => state?.post?.singlePost)
    const posts = useSelector(state => state?.post?.posts)
    const commentState = useSelector(state => state?.comment)
    const profile = useSelector(state => state?.auth?.profile)
    const token = useSelector(state => state?.auth?.user?.token)

    // console.log('ini profile', profile)
    // console.log('ini comment', commentState.comments)
    // console.log('ini post', postState)
    const [url, setUrl] = useState(getUrl)
    const [pushComment, setPushComment] = useState("")

    useEffect(() => {
        dispatch(getSinglePost(url))
        dispatch(getAllComments())
    }, [url])

    useEffect(() => {
        dispatch(getAllComments())
        setPushComment("")
    }, [commentState.commentCreated])

    const searchKeyword = ''
    const page = ''
    const limit = ''
    const cat = ""
    useEffect(() => {
        dispatch(resetState())
        dispatch(getAllPosts({ searchKeyword, page, limit, cat }))
    }, [])

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [url]);

    const submitComment = (e) => {
        e.preventDefault();
        console.log({ user: profile._id, desc: pushComment, slug: postState.slug })
        const values = { user: profile._id, desc: pushComment, slug: postState.slug }
        dispatch(createComment({ values, token }))
    };

    return (
        <section className='flex justify-between container mx-auto my-5 gap-10 min-h-screen' >
            <div className='w-3/4 space-y-2'>
                <img className='rounded-xl h-96 object-cover w-full  ' src={stables + postState?.photo} alt="" />
                <h1 className='font-semibold text-xl'>{postState?.title}</h1>
                <p className=''> {postState?.caption}     </p>
                <div className='px-1 pb-1 flex justify-between items-center'>
                    <div className='w-10 flex items-center gap-1 '>
                        <img className='border-2 w-10 h-10 object-cover rounded-full' src={postState?.user?.avatar} alt="" />
                        <h1 >{postState?.user?.username}</h1>
                    </div>
                    <div>{postState?.createdAt}</div>
                </div>
                <form onSubmit={submitComment} className='relative'>
                    <textarea
                        onChange={(e) => setPushComment(e.target.value)}
                        value={pushComment}
                        placeholder='left your comment here...'
                        className='border w-full rounded-xl p-2'
                        name=""
                        id=""
                        rows="7">
                    </textarea>
                    <button type='submit' className='py-1 px-2 bg-green-500 rounded-xl absolute bottom-5 right-3 text-white'>submit</button>
                </form>
                <div className='space-y-3 bg-slate-100 rounded-xl'>
                    {
                        commentState?.comments && commentState?.comments.filter(item => item?.check === true).filter(item => item?.post?._id === postState?.id).map((item, key) =>
                            <div key={key} className='flex flex-col gap-2 p-2 '>
                                <div className='flex gap-2 items-center'>
                                    {
                                        item?.user?.avatar
                                            ?
                                            <img className='border-2 w-10 h-10 object-cover rounded-full' src={item?.user?.avatar} alt="" />
                                            :
                                            <CgProfile className='text-4xl' />
                                    }
                                    <div className=''>
                                        <p className='text-md'>{item?.user?.username}</p>
                                        <p className='text-sm'>{item?.createdAt}</p>
                                    </div>
                                </div>
                                <div className='ms-11'>
                                    <p>{item?.desc}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='w-1/4 space-y-5'>
                {
                    posts?.result && posts?.result.map((item, key) =>
                        <Link
                            to={`/${item?.slug}`}
                            key={key}
                            onClick={() => setUrl(item.slug)}
                            className='flex gap-2 ' >
                            <img className='rounded-xl cursor-pointer  h-24  ' src={stables + item?.photo} alt="" />
                            <div className='p-1 w-full flex flex-col justify-center overflow-hidden h-24 '>
                                <h1 >{item?.title}</h1>
                            </div>
                        </Link>
                    )
                }
            </div>
        </section>

    )
}

export default DetailCart