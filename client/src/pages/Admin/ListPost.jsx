import React, { useEffect } from 'react'
import { CgProfile } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { getAllPosts } from '../../features/post/postSlice'
import { CiViewList } from "react-icons/ci";
import { stables } from '../../constants/stables'

const User = () => {

    const posts = useSelector(state => state?.post?.posts)
    const postCreated = useSelector(state => state?.post?.postCreated)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    console.log(posts)

    return (
        <section className='w-full pt-5 px-5 bg-slate-50'>
            <div className='mb-5 px-5'>
                <p>
                    Dashboard / Post
                </p>
            </div>
            <div className='px-5  rounded-xl'>
                <div className="rounded-xl bg-white p-3 border ">
                    <div className="">
                        <div className="flex gap-16 ">
                            <div className='w-1/2 flex' >
                                {/* <div className='w-full me-1 relative'>
                                    <Input
                                        type="text"
                                        name="title"
                                    />
                                    <span className='flex gap-2 absolute bg-white px-2  rounded-xl'>
                                        <p className='text-red-500'>
                                        </p>
                                    </span>
                                </div>
                                <span> */}
                                {/* <Button /> */}
                                {/* </span> */}
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
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        User
                                    </th>
                                    {/* <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
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
                                    posts.length !== 0 && posts.map((item, key) => {
                                        return <tr key={key}>
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
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    )}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.user?.username}
                                                </p>
                                            </td>
                                            {/* <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item?.user?.admin === true ? "Admin " : "User"}

                                                </p>
                                            </td> */}
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item?.createdAt}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <button>
                                                    detail
                                                </button>
                                            </td>
                                        </tr>
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
        </section >
    )
}

export default User