// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayouts from './components/MainLayouts'
import DetailCart from './pages/DetailCart'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='detail' element={<DetailCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
