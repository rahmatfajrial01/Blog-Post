import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Body from '../components/Body'
import Button from '../components/Button'
import Input from '../components/Input'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { profileUser } from '../features/user/userSlice'

const Profile = () => {
    const userState = useSelector(state => state?.auth?.user)
    const profile = useSelector(state => state?.auth?.profile)
    // const token = useSelector(state => state?.user.userInfo.token)
    console.log(userState.token)

    const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const authState = useSelector(state => state.auth)

    const Schema = Yup.object().shape({
        username: Yup.string().required("username is required"),
        email: Yup.string().email("email must be valid").required("email is required"),
        password: Yup.string().required("password is required"),
        Cpassword: Yup.string().required("password confirm password is required").oneOf([Yup.ref('password'), null], 'Must match "password" field value'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: profile?.username || "",
            email: profile?.email || "",
            password: profile?.password || "",
            Cpassword: '',
        },
        validationSchema: Schema,
        onSubmit: values => {
            // dispatch(registerUser(values))
            // alert(JSON.stringify(values, null, 2));

        },
    })

    useEffect(() => {
        dispatch(profileUser(userState.token))
    }, [userState.token])

    return (
        <Body   >
            <div className='min-h-screen   flex flex-col justify-center items-center'>
                <form onSubmit={formik.handleSubmit} className='w-96  py-5 rounded-xl border-2 -mt-20'>
                    <h1 className='text-center font-semibold text-2xl mb-5'>Profile</h1>
                    <div className='px-5 space-y-3'>
                        <div className='flex gap-1'>
                            <label htmlFor="picture">
                                <CgProfile className='text-4xl' />
                            </label>
                            <button>Delete</button>
                            <input className='hidden' id='picture' type="file" />
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
                        <div>
                            <Input
                                type="password"
                                name="Cpassword"
                                label="Confirm Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleChange}
                                value={formik.values.Cpassword}
                            />
                            {formik.errors.Cpassword && formik.touched.Cpassword ? <p className='text-red-500'>{formik.errors.Cpassword}</p> : null}
                        </div>
                        <Button />
                    </div>
                </form>
            </div>
        </Body>
    )
}

export default Profile