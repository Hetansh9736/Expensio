import React from "react"
import Sidebar from "./Sidebar"
import Home from "./Home"
import Auth from './auth'

export default function Dashboard() {
  return (
    <div className="flex bg-[#0d0d0d] text-white min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-64 p-4 md:p-6 overflow-y-auto">
        <Home />
      </main>
    </div>
    // <Auth/>  
  )
}
