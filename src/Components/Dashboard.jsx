// Components/DashboardLayout.jsx
import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
     <main className="ml-64 p-6 w-full bg-[#0d0d0d] min-h-screen">

        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
