// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayouts from './components/MainLayouts'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
