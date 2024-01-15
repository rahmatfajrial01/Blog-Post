import React from 'react'
import { useSelector } from 'react-redux'

const Button = () => {
    let authState = useSelector(state => state.auth)
    return (
        <button type='submit' className='bg-black text-white w-full p-2 rounded-xl hover:opacity-80 transition-all'>
            {authState.isLoading ? "Loding..." : "Submit"}
        </button>
    )
}

export default Button