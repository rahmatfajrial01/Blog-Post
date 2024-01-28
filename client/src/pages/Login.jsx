import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Body from '../components/Body'
import Button from '../components/Button'
import Input from '../components/Input'
import * as yup from 'yup';
import { loginUser } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Oauth from '../components/Oauth'

const Login = () => {

    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // if (state.isSuccess = true) {
    //     // localStorage.setItem("user", JSON.stringify(action.payload.token))
    //     toast.info("User Login Successfully")
    // }

    const Schema = yup.object({
        email: yup.string().nullable().email("email shoul be valid").required('email is required'),
        password: yup.string().required("passowrd is reguired"),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Schema,
        onSubmit: values => {
            // alert(JSON.stringify(values));
            dispatch(loginUser(values))
        },
    });

    useEffect(() => {
        if (authState.user !== null && authState.isError === false) {
            localStorage.setItem("user", JSON.stringify({ token: authState.user.token }))
            navigate('/')
        }
    }, [authState])

    return (
        <Body>
            <div className='min-h-screen   flex flex-col justify-center items-center'>
                <form
                    onSubmit={formik.handleSubmit}
                    className='w-96  py-5 rounded-xl border-2 -mt-20'>
                    <h1 className='text-center font-semibold text-2xl mb-5'>Login</h1>
                    <div className='px-5 space-y-3'>
                        <div>
                            <Input
                                type="text"
                                name="email"
                                label="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <p className='text-red-500'>
                                {formik.touched.email && formik.errors.email}
                            </p>
                        </div>
                        <Input
                            type="password"
                            name="password"
                            label="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <p className='text-red-500'>
                            {formik.touched.password && formik.errors.password}
                        </p>
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
                        <Oauth />
                        <div className='text-sm py-1'>
                            <p>Dont't have an accoount ? <Link to={'/register'} className='text-blue-500'>Register !</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </Body>
    )
}

export default Login