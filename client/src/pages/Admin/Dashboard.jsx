import React from 'react'

const Dashboard = () => {
    return (
        <section className=' bg-slate-50 w-full '>
            <div className='flex justify-between gap-3 pt-5 px-5'>
                <div className='bg-slate-200 w-full p-5 rounded-xl' >User</div>
                <div className='bg-slate-200 w-full p-5 rounded-xl' >Category</div>
                <div className='bg-slate-200 w-full p-5 rounded-xl' >Post</div>
            </div>
        </section>
    )
}

export default Dashboard