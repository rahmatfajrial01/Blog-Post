import React from 'react'

const Dashboard = () => {
    return (
        <section className='pt-5 bg-slate-50 w-full ps-5'>
            <div className='flex justify-between gap-3'>
                <div className='bg-slate-200 w-full p-5 rounded-xl' >User</div>
                <div className='bg-slate-200 w-full p-5 rounded-xl' >Category</div>
                <div className='bg-slate-200 w-full p-5 rounded-xl' >Post</div>

            </div>
        </section>
    )
}

export default Dashboard