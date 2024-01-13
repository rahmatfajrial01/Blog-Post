import React from 'react'
import { Link } from 'react-router-dom'
import Body from '../components/Body'
import Button from '../components/Button'
import Input from '../components/Input'

const Login = () => {
    return (
        <Body>
            <div className='min-h-screen   flex flex-col justify-center items-center'>
                <form className='w-96  py-5 rounded-xl border-2 -mt-20'>
                    <h1 className='text-center font-semibold text-2xl mb-5'>Login</h1>
                    <div className='px-5 space-y-3'>
                        <Input />
                        <Input />
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
                            <p>Dont't have an accoount ? <Link className='text-blue-500'>Register !</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </Body>
    )
}

export default Login