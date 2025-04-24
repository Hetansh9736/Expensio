import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import LoginPage from './Components/Login'
import SignUpPage from './Components/Signup'
import Wrapper from './Components/Wrapper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<LoginPage />}
        />
        <Route
          path='/Signup'
          element={<SignUpPage />}
        />
        <Route
          path='/Dashboard'
          element={
              <Dashboard />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App