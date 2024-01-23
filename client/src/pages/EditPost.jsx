import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stables } from '../constants/stables'
import { getSinglePost, resetState, updatePost, updatePostPicture } from '../features/post/postSlice'
import { AiOutlineLoading } from "react-icons/ai";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MultiSelectTagDropdown from '../components/MultiSelectTagDropdown'
import { getAllPostCategory } from '../features/postCategory/postCategoryService'
import { categoryToOption, filterCategories } from '../utils/multiSelectTagUtils'
import Body from '../components/Body'

const EditPost = () => {

    const dispatch = useDispatch()
    const postState = useSelector((state) => state?.post?.singlePost)
    const postUpdated = useSelector((state) => state?.post?.postUpdated)
    const postpictureUpdated = useSelector((state) => state?.post?.picturePostUpdated)
    const token = useSelector(state => state?.auth?.user?.token)

    // console.log(postUpdated)
    // console.log(getSlug)
    const loading = useSelector((state) => state?.post?.isLoading)
    const error = useSelector((state) => state?.post?.isError)
    const getSlug = location?.pathname?.split('/')[2]
    // const [id, setId] = useState(getSlug)

    const image = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
    const image0 = stables + postState?.photo
    const display = postState?.photo ? image0 : image

    const [value, setValue] = useState('');
    const [picture, setPicture] = useState('')
    console.log(postUpdated)
    console.log(getSlug)

    useEffect(() => {
        dispatch(resetState())
        dispatch(getSinglePost(getSlug))
    }, [postUpdated, postpictureUpdated])



    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPicture(file);
    };

    const handleUpdate = () => {
        const data = new FormData()
        // console.log(picture)
        data.append('postPicture', picture)
        data.append(
            "document",
            JSON.stringify({})
        );
        const Data = { token, slug: getSlug, updateData: data }
        if (!picture)
            return alert("chose new photo")
        dispatch(updatePostPicture(Data))
        // setTimeout(() => {
        //     dispatch(getAllPost())
        // }, 100)
    };

    const handleDelete = () => {
        const data = new FormData()
        // console.log(picture)
        data.append('postPicture', "")
        data.append(
            "document",
            JSON.stringify({})
        );
        const Data = { token, slug: getSlug, updateData: data }
        if (!postState?.photo && !picture) {
            return alert("no data to delete")
        }
        else if (!postState?.photo && picture) {
            setPicture("")
            return
        }

        dispatch(updatePostPicture(Data))
        setPicture("")


    }
    console.log(picture)

    let Schema = Yup.object().shape({
        title: Yup.string().required("title is required"),
        // photo: Yup.mixed().required("image isRequired"),
        caption: Yup.string().required("deskripsi is required").min(12, 'Required, deskripsi min 5 carakter'),
        categories: Yup.array().min(1, "Pick at least 1 categories")
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: postState?.title || '',
            caption: postState?.caption || '',
            categories: postState?.categories || '',
            // photo: '',
        },
        validationSchema: Schema,
        onSubmit: values => {
            // const data = new FormData()
            // data.append('postPicture', picture)
            // data.append("document", JSON.stringify({
            //     title: values.title,
            //     caption: values.caption
            // }))
            const Data = { token, slug: getSlug, updateData: values }
            console.log(Data)
            // console.log(data)
            // console.log(values.title)
            // data.append('image', values.photo)
            // data.append('title', values.title)
            // data.append('caption', values.caption)
            dispatch(updatePost(Data))
        },
    })

    const promiseOptions = async (inputValue) => {
        const categoriesData = await getAllPostCategory()
        // console.log(categoriesData)
        return filterCategories(inputValue, categoriesData)
    }




    return (
        <Body>

            <section className='pt-5 space-y-3'>

                <div>
                    {
                        loading
                            ?
                            <div className='animate-pulse bg-slate-200 h-96 w-full flex justify-center items-center'>
                                {/* <p className='animate-spin text-5xl'><AiOutlineLoading /></p> */}
                            </div>
                            :
                            !picture ?
                                <label className='flex flex-col justify-center items-center ' htmlFor="image">
                                    <img
                                        src={display}
                                        className="rounded-xl h-96 "
                                    />
                                    <input onChange={handleFileChange} id='image' className='hidden' type="file" />
                                </label>
                                :
                                <label className='flex flex-col justify-center items-center ' htmlFor="image">
                                    <img
                                        src={URL.createObjectURL(picture)}
                                        className="rounded-xl h-96"
                                    />
                                    <input onChange={handleFileChange} id='image' className='hidden' type="file" />
                                </label>
                    }
                    <div className='space-x-5'>
                        <button onClick={handleUpdate} className='bg-green-500 rounded-xl p-2 mt-5'>Apply Photo</button>
                        {
                            postState?.photo && !loading || picture ?
                                <button onClick={handleDelete} className='bg-red-500 rounded-xl p-2 mt-5'>Delete Photo</button>
                                :
                                ""
                        }
                    </div>

                    <form onSubmit={formik.handleSubmit} className='space-y-3' action="">
                        <div className='flex flex-col mt-5'>
                            <label htmlFor="title">Header</label>
                            <input
                                id='title'
                                placeholder='Username'
                                type="text"
                                className='border p-2 rounded-lg'
                                onChange={formik.handleChange}
                                onBlur={formik.handleChange}
                                value={formik.values.title}
                            />
                            {formik.errors.title && formik.touched.title ? <p className='text-red-500'>{formik.errors.title}</p> : null}
                        </div>
                        <div>
                            {postState?.categories && (
                                <MultiSelectTagDropdown
                                    defaultValue={postState && postState?.categories.map(categoryToOption)}
                                    loadOptions={promiseOptions}
                                    onChange={(newValue) =>
                                        formik.setFieldValue('categories', newValue.map((item) => item.value))
                                    }
                                    value={formik.values.categories}
                                />
                            )}
                            {formik.errors.categories && formik.touched.categories ? <p className='text-red-500'>{formik.errors.categories}</p> : null}

                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Descripsi</label>
                            {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
                            <ReactQuill
                                theme="snow"
                                placeholder="caption"
                                value={formik.values.caption}
                                onChange={formik.handleChange("caption")}
                            // onBlur={formik.handleChange("caption")}
                            />
                            {formik.errors.caption && formik.touched.caption ? <p className='text-red-500'>{formik.errors.caption}</p> : null}
                        </div>
                        <button className='bg-green-500 text-white font-semibold py-1 px-2 rounded-xl ' type='submit'>submit</button>
                    </form>

                </div>
            </section>
        </Body>
    )
}

export default EditPost