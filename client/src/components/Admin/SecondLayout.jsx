import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { profileUser } from '../../features/user/userSlice'
import LeftNav from './LeftNav'

const SecondLayout = () => {

    const userState = useSelector(state => state?.auth?.user)
    const profile = useSelector(state => state?.auth?.profile)
    const isError = useSelector(state => state?.auth?.isError)
    const isLoading = useSelector(state => state?.auth?.isLoading)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileUser(userState?.token))
    }, [userState?.token])

    // if (!profile?.admin && isError === false)
    //     return <Navigate to='*' replace={true} />

    return (
        <>
            {
                isLoading ? <div className='flex items-center justify-center min-h-screen w-full'><p>Loading...</p></div> :
                    !profile?.admin && isError === false
                        ?
                        <Navigate to='*' replace={true} />
                        :
                        <section className='flex justify-between'>
                            <LeftNav />
                            <Outlet />
                        </section>

            }
        </>
    )
}

export default SecondLayout