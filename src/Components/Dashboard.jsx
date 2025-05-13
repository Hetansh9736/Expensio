import React from 'react'
import Sidebar from './Sidebar'
import LoginPage from './Login'
import SignUp from './Signup'
import Borrow from './Borrow'
import Home from './Home'
import Analysis from './Analysis'
import LandingPage from './LandingPage'

function Dashboard() {
    return (
        <div className="flex bg-[#0d0d0d] text-white min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-0 md:ml-64 p-4 md:p-6 overflow-y-auto">
           <Home/>
          </main>
        </div>
        // <LandingPage/>

        
    )
}

export default Dashboard