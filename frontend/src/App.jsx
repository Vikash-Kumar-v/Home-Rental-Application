import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
const App = () => {
  return (
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      </Routes>
     </BrowserRouter>
  )
}

export default App
