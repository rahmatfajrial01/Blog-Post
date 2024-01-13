import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftNav from './LeftNav'

const SecondLayout = () => {
    return (
        <section className='flex justify-between'>
            <LeftNav />
            <Outlet />
        </section>
    )
}

export default SecondLayout