import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Body from '../components/Body'
import { createUser, resetState, resentOtp } from '../features/user/userSlice'

const Verification = () => {
    const getId = location?.pathname?.split('/')[2]
    const [otp, setOtp] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const authState = useSelector(state => state.auth)

    const submitOtp = (e) => {
        e.preventDefault();
        const values = {
            userId: getId,
            otp
        }
        dispatch(createUser(values))
    };

    const submitresentOtp = (e) => {
        e.preventDefault();
        const values = { userId: getId, }
        dispatch(resentOtp(values))
    };

    // console.log(authState)

    useEffect(() => {
        if (authState.createdUserVerif !== null && authState.isError === false) {
            dispatch(resetState())
            navigate(`/login`)
        }
    }, [authState.createdUserVerif])

    return (
        <section className='min-h-screen flex justify-center items-center'>
            <form onSubmit={submitOtp} className='flex flex-col bg-slate-200 p-5 rounded-xl gap-2'>
                <label htmlFor="">check your email  to enter verification</label>
                <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder='verificasi'
                    className='border p-3 rounded-xl text-lg text-center'
                />
                <button onClick={submitresentOtp} className='text-sm mt-2 hover:opacity-85' type='button'>Resent Otp</button>
            </form>
        </section>
    )
}

export default Verification