import React from 'react'

const Input = () => {
    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor="">label</label>
            <input className='border p-2 rounded-xl' type="text" />
        </div>
    )
}

export default Input