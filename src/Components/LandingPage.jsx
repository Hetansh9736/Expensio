import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <nav className='flex justify-between p-6 bg-[#18181b] text-white items-center'>
            <div>
                <h3 className='text-2xl font-bold bg-gradient-to-r from-[#33F9D8] to-[#3478FF] bg-clip-text text-transparent tracking-wide'>
                    Expensio
                </h3>
            </div>
            <div className='flex gap-6'>
                <p>Features</p>
                <p>About us</p>
                <p><Link to='/Login'>Login</Link></p>
                <p ><Link to='/Signup' className='bg-gradient-to-r from-[#33F9D8] to-[#3478FF] px-3 rounded font-medium cursor-pointer'>Sign Up</Link></p>
            </div>
        </nav>
    )
}

export default LandingPage
