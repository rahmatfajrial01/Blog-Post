import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import Body from '../components/Body'
import Button from '../components/Button'
import Input from '../components/Input'
import * as yup from 'yup';

const Login = () => {

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
            alert(JSON.stringify(values));
        },
    });

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