import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Body from '../components/Body'
import Button from '../components/Button'
import Input from '../components/Input'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { profileUser, updateUser, updateUserProfile } from '../features/user/userSlice'
import { stables } from '../constants/stables'

const Profile = () => {
    const userState = useSelector(state => state?.auth?.user)
    const profileUpdated = useSelector(state => state?.auth?.userProfileUpdated)
    const profile = useSelector(state => state?.auth?.profile)
    // const token = useSelector(state => state?.user.userInfo.token)
    console.log(userState.token)

    const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const authState = useSelector(state => state.auth)

    const Schema = Yup.object().shape({
        username: Yup.string().required("username is required"),
        email: Yup.string().email("email must be valid").required("email is required"),
        password: Yup.string(),
        // Cpassword: Yup.string().required("password confirm password is required").oneOf([Yup.ref('password'), null], 'Must match "password" field value'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: profile?.username || "",
            email: profile?.email || "",
            password: profile?.password || "",
            // Cpassword: '',
        },
        validationSchema: Schema,
        onSubmit: values => {
            const data = { values, token: userState.token }
            dispatch(updateUser(data))
            // alert(JSON.stringify(values, null, 2));

        },
    })

    useEffect(() => {
        dispatch(profileUser(userState.token))
    }, [profileUpdated])


    const handleDelete = () => {
        const values = new FormData()
        values.append('profilePicture', "")
        const data = { values, token: userState.token }
        dispatch(updateUserProfile(data))
        setPicture("");
    }

    const handleSubmit = () => {
        const values = new FormData()
        values.append('profilePicture', picture)
        const data = { values, token: userState.token }
        dispatch(updateUserProfile(data))
    }

    const [picture, setPicture] = useState('')

    const handleChoose = (e) => {
        const file = e.target.files[0];
        setPicture(file);
        console.log(file)
    }

    // let img3 = { URL.createObjectURL(picture) }
    // const image = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
    // const image0 = stables + profile?.avatar
    // const display = profile?.avatar ? image0 : image

    return (
        <Body   >
            <div className='min-h-screen   flex flex-col justify-center items-center'>
                <form onSubmit={formik.handleSubmit} className='w-96  py-5 rounded-xl border-2 -mt-20'>
                    <h1 className='text-center font-semibold text-2xl mb-5'>Profile</h1>
                    <div className='px-5 space-y-3'>
                        <div className='flex gap-3 items-center'>
                            {
                                profile?.avatar
                                    ?
                                    <img className="w-14 h-14 object-cover rounded-full" src={stables + profile?.avatar} alt="" />
                                    :
                                    !picture
                                        ?
                                        <label htmlFor="picture" className='w-14 h-14 flex items-center justify-center'>
                                            <CgProfile className='text-5xl' />
                                        </label>
                                        :
                                        <label htmlFor="picture" className='w-14 h-14'>
                                            <img className="object-cover w-full h-full rounded-full" src={URL.createObjectURL(picture)} alt="" />
                                        </label>
                            }
                            <input onChange={handleChoose} className='hidden' id='picture' type="file" />
                            {
                                profile?.avatar
                                    ?
                                    <button className='p-1 bg-red-500 text-white rounded-xl' type='button' onClick={handleDelete}>Delete</button>
                                    :
                                    picture
                                        ?
                                        <button className='p-1 bg-green-500 text-white rounded-xl' onClick={handleSubmit} type='button'>Apply</button>
                                        :
                                        ""
                            }
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="username"
                                label="Username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleChange}
                                value={formik.values.username}
                            />
                            {formik.errors.username && formik.touched.username ? <p className='text-red-500'>{formik.errors.username}</p> : null}
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="email"
                                label="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email && formik.touched.email ? <p className='text-red-500'>{formik.errors.email}</p> : null}
                        </div>
                        <div>
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.password && formik.touched.password ? <p className='text-red-500'>{formik.errors.password}</p> : null}
                        </div>
                        {/* <div>
                            <Input
                                type="password"
                                name="Cpassword"
                                label="Confirm Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleChange}
                                value={formik.values.Cpassword}
                            />
                            {formik.errors.Cpassword && formik.touched.Cpassword ? <p className='text-red-500'>{formik.errors.Cpassword}</p> : null}
                        </div> */}
                        <Button />
                    </div>
                </form>
            </div>
        </Body>
    )
}

export default Profile