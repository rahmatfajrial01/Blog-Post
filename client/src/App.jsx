// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SecondLayout from './components/Admin/SecondLayout'
import MainLayouts from './components/MainLayouts'
import Category from './pages/Admin/Category'
import Dashboard from './pages/Admin/Dashboard'
import User from './pages/Admin/User'
import DetailCart from './pages/DetailCart'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Post from './pages/Post'
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

          <Route path='/admin' element={<SecondLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='post' element={<Post />} />
            <Route path='user' element={<User />} />
            <Route path='category' element={<Category />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
