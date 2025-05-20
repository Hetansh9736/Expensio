import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Components/Login'
import SignUpPage from './Components/Signup'
import LandingPage from './Components/LandingPage'
import DashboardLayout from './Components/Dashboard'

import Home from './Components/Home'
import Analysis from './Components/Analysis'
import Report from './Components/Report'
import Emi from './Components/Emi'
import Borrow from './Components/Borrow'
import Dues from './Components/Dues'
import Settings from './Components/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Dashboard Routes with Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="Analysis" element={<Analysis />} />
          <Route path="Report" element={<Report />} />
          <Route path="Emi" element={<Emi />} />
          <Route path="Borrow" element={<Borrow />} />
          <Route path="Dues" element={<Dues />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
