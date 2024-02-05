import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Body from '../components/Body'
import Button from '../components/Button'
import Input from '../components/Input'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser, resetState } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authState = useSelector(state => state.auth)

    const Schema = Yup.object().shape({
        username: Yup.string().required("username is required"),
        email: Yup.string().email("email must be valid").required("email is required"),
        password: Yup.string().required("password is required"),
        Cpassword: Yup.string().required("password confirm password is required").oneOf([Yup.ref('password'), null], 'Must match "password" field value'),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            Cpassword: '',
        },
        validationSchema: Schema,
        onSubmit: values => {
            dispatch(registerUser(values))
            // alert(JSON.stringify(values, null, 2));

        },
    })

    useEffect(() => {
        if (authState.createdUser !== null && authState.isError === false) {
            navigate(`/verification/${authState.createdUser.userId}`)
            dispatch(resetState())
        }
    }, [authState.createdUser])

    return (
        <Body   >
            <div className='min-h-screen   flex flex-col justify-center items-center'>
                <form onSubmit={formik.handleSubmit} className='w-96  py-5 rounded-xl border-2 -mt-20'>
                    <h1 className='text-center font-semibold text-2xl mb-5'>Register</h1>
                    <div className='px-5 space-y-3'>
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
                        <div className='flex justify-between text-sm py-1'>
                            <span className='flex gap-1'>
                                <input type="checkbox" />
                                <p>Remember me</p>
                            </span>
                            <span className='text-blue-500'>
                                <Link>Forgot Password ?</Link>
                            </span>
                        </div>
                        <Button />
                        <div className='text-sm py-1'>
                            <p>Already have an accoount ? <Link to={'/login'} className='text-blue-500'>Login !</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </Body>
    )
}

export default Register