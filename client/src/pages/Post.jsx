import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createPost, resetState } from '../features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BiImageAdd } from "react-icons/bi";
import Body from '../components/Body';
import Input from '../components/Input';
import { getAllPostCategory } from '../features/postCategory/postCategoryService';
import MultiSelectTagDropdown from '../components/MultiSelectTagDropdown';
// import { getAllPostCategories } from '../features/postCategories/postCategoriesSlice';
// import { getAllPostCategory } from '../features/postCategories/postCategoriesServis';
import { filterCategories } from '../utils/multiSelectTagUtils';
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const token = useSelector(state => state?.auth?.user?.token)
    const postCreated = useSelector(state => state?.post?.postCreated)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(postCreated)

    const promiseOptions = async (inputValue) => {
        const categoriesData = await getAllPostCategory()
        console.log(categoriesData)
        return filterCategories(inputValue, categoriesData)
    }

    let Schema = Yup.object().shape({
        title: Yup.string().required("title is required"),
        photo: Yup.mixed().required("image isRequired"),
        caption: Yup.string().required("deskripsi is required").min(12, 'Required, deskripsi min 5 carakter'),
        categories: Yup.array().min(1, "Pick at least 1 categories")
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: '',
            caption: '',
            photo: '',
            categories: [],
        },
        validationSchema: Schema,
        onSubmit: values => {
            // console.log(values)
            const data = new FormData()
            data.append('image', values.photo)
            data.append('title', values.title)
            data.append('caption', values.caption)
            data.append('categories', JSON.stringify(values.categories))
            const dataPost = { token, data }
            dispatch(createPost(dataPost))
            if (postCreated)
                navigate('/list-post')
        },
    })

    const [picture, setPicture] = useState(null)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPicture(file);
        formik.setFieldValue('photo', e.currentTarget.files[0]);
    };

    useEffect(() => {
        if (postCreated) {
            navigate('/list-post')
        }
        dispatch(resetState())
    }, [postCreated])

    return (
        <section className='pt-5 px-5'>
            <Body>
                <div>
                    <form className='space-y-3 mt-3' onSubmit={formik.handleSubmit} encType="multipart/form-data">
                        {/* <input
                    type='file'
                    name='photo'
                    accept='image/*'
                    onChange={handleFileChange}
                /> */}
                        {!picture ?
                            <label className='flex flex-col justify-center items-center bg-slate-100' htmlFor="image">
                                <BiImageAdd className='text-5xl h-96 bg-' />
                                <input onChange={handleFileChange} id='image' className='hidden' type="file" />
                            </label>
                            :
                            <label className='flex flex-col justify-center items-center' htmlFor="image">
                                <img
                                    src={URL.createObjectURL(picture)}
                                    className="rounded-xl  h-96"
                                />
                                <input onChange={handleFileChange} id='image' className='hidden' type="file" />
                            </label>}
                        {formik.errors.photo && formik.touched.photo ? <p className='text-red-500'>{formik.errors.photo}</p> : null}

                        <div className='flex flex-col'>
                            <Input
                                label="Header"
                                type="text"
                                name="title"
                                onChange={formik.handleChange}
                                onBlur={formik.handleChange}
                                value={formik.values.title}
                            />
                            {formik.errors.title && formik.touched.title ? <p className='text-red-500'>{formik.errors.title}</p> : null}
                        </div>
                        <div className='flex flex-col'>
                            <label className='' htmlFor="caption">Category</label>
                            <MultiSelectTagDropdown
                                loadOptions={promiseOptions}
                                onChange={(newValue) =>
                                    formik.setFieldValue('categories', newValue.map((item) => item.value))
                                }
                                value={formik.values.categories}
                            />
                            {formik.errors.categories && formik.touched.categories ? <p className='text-red-500'>{formik.errors.categories}</p> : null}

                            <label className='mt-2' htmlFor="caption">Descripsi</label>
                            {/* <JoditEditor
                        className='w-full'
                        value={formik.values.caption}
                        // onChange={formik.handleChange("caption")}
                        onBlur={formik.handleChange("caption")}
                        tabIndex={1}
                        ref={editor}
                        config={config}
                    /> */}
                            {/* <input
                        id='caption'
                        placeholder='Username'
                        type="text"
                        className='border p-2 rounded-lg'
                        onChange={formik.handleChange}
                        onBlur={formik.handleChange}
                        value={formik.values.caption}
                    /> */}

                            <ReactQuill
                                theme="snow"
                                placeholder="caption"
                                value={formik.values.caption}
                                onChange={formik.handleChange("caption")}
                            // onBlur={formik.handleChange("caption")}
                            />
                            {formik.errors.caption && formik.touched.caption ? <p className='text-red-500'>{formik.errors.caption}</p> : null}
                        </div>
                        <button className='bg-green-500 text-white font-semibold py-1 px-2 rounded-xl mt-40' type='submit'>submit</button>
                    </form >

                </div >
            </Body>
        </section >

    )
}

export default Post