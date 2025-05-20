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

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="report" element={<Report />} />
          <Route path="emi" element={<Emi />} />
          <Route path="borrow" element={<Borrow />} />
          <Route path="dues" element={<Dues />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
