import React from 'react'

const Input = (props) => {
    const { type, label, name, value, onChange } = props
    return (
        <div className='flex flex-col'>
            <label htmlFor={name}>{label}</label>
            <input
                className='border p-2 rounded-xl bg-white'
                type={type}
                id={name}
                placeholder='...'
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onChange}
            />
        </div>
    )
}

export default Input