import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllComments } from '../../features/comment/commentSlice'
import { getAllPosts, resetState } from '../../features/post/postSlice'
import { getAllPostCategories } from '../../features/postCategory/postCategorySlice'
import { getAllUser } from '../../features/user2/userSlice'

const Dashboard = () => {
    const dispatch = useDispatch()

    const allUser = useSelector(state => state?.user?.allUser)
    const postCategory = useSelector(state => state?.postCategory?.postCategories)
    const posts = useSelector(state => state?.post?.posts)
    const comments = useSelector(state => state?.comment?.comments)
    const searchKeyword = ''
    const page = ''
    const limit = ''
    const cat = ''

    useEffect(() => {
        dispatch(getAllUser())
        dispatch(getAllPostCategories())
        dispatch(getAllPosts({ searchKeyword, page, limit, cat }))
        dispatch(getAllComments())
    }, [])

    return (
        <section className=' bg-slate-50 w-full px-5 '>
            <div className='mb-5 px-5 pt-5'>
                <p>
                    Dashboard
                </p>
            </div>
            <div className='flex justify-between gap-3  px-5'>
                <div className='bg-slate-200 w-full p-5 rounded-xl flex justify-between'  >
                    <span>Admin</span>
                    <span className='px-3 bg-white rounded-md'>                        {allUser.length !== 0 && allUser?.filter(item => item.admin === true).length}
                    </span>
                </div>
                <div className='bg-slate-200 w-full p-5 rounded-xl flex justify-between'  >
                    <span>User</span>
                    <span className='px-3 bg-white rounded-md'>
                        {allUser.length !== 0 && allUser?.filter(item => item.admin === false).length}</span>
                </div>
                <div className='bg-slate-200 w-full p-5 rounded-xl flex justify-between' >
                    <span>Category</span>
                    <span className='px-3 bg-white rounded-md' >{postCategory?.length}</span>
                </div>
                <div className='bg-slate-200 w-full p-5 rounded-xl flex justify-between'>
                    <span>Post</span>
                    <span className='px-3 bg-white rounded-md'>
                        {posts?.result?.length}
                    </span>
                </div>
                <div className='bg-slate-200 w-full p-5 rounded-xl flex justify-between'>
                    <span>Comment</span>
                    <span className='px-3 bg-white rounded-md'>
                        {comments?.length}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Dashboard