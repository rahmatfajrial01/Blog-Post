import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { getAllPostCategories, createPostCategories, deletePostCategories, getAPostCategory, updatePostCategories } from '../../features/postCategory/postCategorySlice'
import { useFormik } from 'formik'
import * as yup from 'yup';

const Category = () => {

    const token = useSelector(state => state?.auth?.user?.token)
    const postCategory = useSelector(state => state?.postCategory?.postCategories)
    const postCategoryAction = useSelector(state => state?.postCategory)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPostCategories())
    }, [
        postCategoryAction?.postCategoryCreated,
        postCategoryAction?.postCategoryDeleted,
        postCategoryAction?.postCategoryUpdated
    ])

    const Schema = yup.object({
        title: yup.string().required('Category is required'),
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: postCategoryAction?.getACategory?.title || ''
        },
        validationSchema: Schema,
        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            if (postCategoryAction?.getACategory) {
                const data = { token, values, id: postCategoryAction.getACategory._id }
                dispatch(updatePostCategories(data))
            } else {
                const data = { token, values }
                dispatch(createPostCategories(data))
                resetForm()
            }
        },
    });

    const deleteAPost = (id) => {
        const data = { token, id }
        dispatch(deletePostCategories(data))
    }

    const getAId = (id) => {
        dispatch(getAPostCategory(id))
    }

    return (
        <section className='w-full pt-5 px-5 bg-slate-50'>
            <div className='mb-5 px-5'>
                <p>
                    Dashboard / Category
                </p>
            </div>
            <div className='px-5 rounded-xl'>
                <div className="rounded-xl bg-white p-3 border ">
                    <div className="">
                        <div className="flex gap-16 ">
                            <form onSubmit={formik.handleSubmit} className='w-1/2 flex' >
                                <div className='w-full me-1 relative'>
                                    <Input
                                        type="text"
                                        name="title"
                                        value={formik.values.title}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <span className='flex gap-2 absolute bg-white px-2  rounded-xl'>
                                        <p className='text-red-500'>
                                            {formik.touched.title && formik.errors.title}
                                        </p>
                                        {formik.touched.title && formik.errors.title ? <button onClick={formik.resetForm}>Cancel</button> : ""}
                                    </span>
                                </div>
                                <span>
                                    <Button />
                                </span>
                            </form>
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
                                        Category
                                    </th>
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
                                    postCategory?.length !== 0 && postCategory.map((item, key) => {
                                        return (
                                            <tr key={key}>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item?.title}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item?.createdAt}
                                                    </p>
                                                </td>
                                                <td className="flex gap-2 px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <button onClick={() => { getAId(item?._id) }} className='bg-green-500 hover:opacity-85 py-1 px-2 rounded-xl text-white'>Edit</button>
                                                    <button onClick={() => { deleteAPost(item?._id) }} className='bg-red-500 hover:opacity-85 py-1 px-2 rounded-xl text-white'>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    )
                                }
                            </tbody>
                        </table>
                        {/* <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                            <div class="flex items-center">
                                <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                        </path>
                                    </svg>
                                </button>
                                <button type="button" class="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ">
                                    1
                                </button>
                                <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                    2
                                </button>
                                <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
                                    3
                                </button>
                                <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                    4
                                </button>
                                <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                                    <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
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

export default Category