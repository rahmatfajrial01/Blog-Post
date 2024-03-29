import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { getAllUser } from '../../features/user2/userSlice'
import { CgProfile } from "react-icons/cg";
import { stables } from '../../constants/stables'
import { getAllComments, updateCheckComment } from '../../features/comment/commentSlice'

const Comment = () => {

    const authState = useSelector(state => state?.auth?.user)
    const allUser = useSelector(state => state?.user?.allUser)
    const commentState = useSelector(state => state?.comment)
    const token = useSelector(state => state?.auth?.user?.token)


    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    const dispatch = useDispatch()
    // console.log(commentState)

    useEffect(() => {
        dispatch(getAllUser())
    }, [])

    // console.log(allUser)

    const updateCheck = (a, b) => {
        const values = { check: b }
        const data = { token, values, id: a }
        dispatch(updateCheckComment(data))
    }

    return (
        <section className='w-full pt-5 px-5 bg-slate-50'>
            <div className='mb-5 px-5'>
                <p>
                    Dashboard / Comment
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
                                        User
                                    </th>
                                    {/* <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Role
                                    </th> */}
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Receiver
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Comment
                                    </th>
                                    {/* <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Role
                                    </th> */}
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Created at
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Set Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <>
                                    {
                                        commentState?.comments && commentState?.comments.map((item, key) =>
                                            <tr key={key}>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <a href="#" className="relative block">
                                                                {
                                                                    item?.user?.avatar ? <img className='w-14 h-14 object-cover rounded-full' src={item?.user?.avatar} alt="" /> : <CgProfile className='text-6xl' />
                                                                }
                                                            </a>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item?.user?.username}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                {/* <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                {item?.user?.admin === true ? "Admin " : "User"}
                                                </p>
                                            </td> */}
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <a href="#" className="relative block">
                                                                {
                                                                    item?.post?.user?.avatar ? <img className='w-14 h-14 object-cover rounded-full' src={item?.post?.user?.avatar} alt="" /> : <CgProfile className='text-6xl' />
                                                                }
                                                            </a>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item?.post?.user?.username}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item?.desc}
                                                    </p>
                                                </td>
                                                {/* <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap"> */}
                                                {/* {item?.admin === true ? "Admin " : "User"} */}
                                                {/* </p>
                                            </td> */}
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item?.user?.createdAt}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <div>
                                                        <select defaultValue={item?.check} onChange={(e) => { updateCheck(item?._id, e.target.value) }} >
                                                            <option value={true}>on</option>
                                                            <option value={false}>off</option>
                                                        </select>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </>
                            </tbody>
                        </table>
                        {/* <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
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
                        </div> */}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Comment