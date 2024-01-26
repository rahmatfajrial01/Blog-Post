import React, { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import Input from '../components/Input'
import { deletePost, getAllPosts } from '../features/post/postSlice'
import { CiViewList } from "react-icons/ci";
import { stables } from '../constants/stables'
import { Link } from 'react-router-dom'
import Body from '../components/Body'

const ListPostsUser = () => {
    const token = useSelector(state => state?.auth?.user?.token)
    const profile = useSelector(state => state?.auth?.profile)
    const posts = useSelector(state => state?.post?.posts)
    const deletedPost = useSelector(state => state?.post?.deletedPost)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getAllPosts())
    // }, [deletedPost])
    const [searchKeyword, setSearchKeyword] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [counter, setCounter] = useState(1);
    const limit = ''
    const cat = ""
    useEffect(() => {
        dispatch(getAllPosts({ searchKeyword, page: counter, limit, cat }))
    }, [counter, deletedPost])

    // console.log(posts)
    // console.log(profile._id)

    const deleteAPost = (slug) => {
        const data = { token, slug }
        dispatch(deletePost(data))
    }

    return (
        <section className='w-full min-h-screen pt-5 px-5 bg-slate-50'>
            <Body>
                <div className='  rounded-xl'>
                    <div className="rounded-xl bg-white p-3 border ">
                        <div className="">
                            <div className="flex gap-16 ">
                                <div className=' w-1/2 flex' >
                                    <Link to={'/post'} className='p-2 bg-green-500 rounded-xl text-white'>
                                        Add Posts
                                    </Link>
                                </div>
                                <div className=' w-1/2 flex' >
                                    <div className='w-full me-1'>
                                        <Input />
                                    </div>
                                    <span>
                                        <Button />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Blog Title
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Category
                                        </th>
                                        {/* <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        User
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Role
                                    </th> */}
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Created at
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        posts?.result && posts?.result.map((item, key) => {
                                            if (item?.user?._id === profile?._id) {
                                                return (
                                                    <tr key={key}>

                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0">
                                                                    <a href="#" className="relative block">
                                                                        {
                                                                            item?.photo ? <img className='w-24 h-14 object-cover rounded-sm' src={stables + item?.photo} alt="" /> : <CiViewList className='text-3xl' />
                                                                        }
                                                                    </a>
                                                                </div>
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                                        {item?.title}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 ">
                                                            <p className="text-gray-900 whitespace-no-wrap space-x-3 ">
                                                                {item?.categories && item?.categories.map((item, key) =>
                                                                    <span key={key}>
                                                                        {item.title}
                                                                    </span>
                                                                )}
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item?.createdAt}
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                            <span className='flex  gap-2 '>
                                                                <Link to={`/post/${item?.slug}`} className='bg-green-500 hover:opacity-85 py-1 px-2 rounded-xl text-white'>Edit</Link>
                                                                <button onClick={() => { deleteAPost(item?.slug) }} className='bg-red-500 hover:opacity-85 py-1 px-2 rounded-xl text-white'>Delete</button>
                                                            </span>
                                                        </td>
                                                    </tr>)
                                            }
                                        }
                                        )
                                    }

                                </tbody>
                            </table>
                            <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                                <div className="flex items-center">
                                    <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ">
                                        1
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                        2
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
                                        3
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                        4
                                    </button>
                                    <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Body>

        </section >
    )
}

export default ListPostsUser