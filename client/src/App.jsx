import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SecondLayout from './components/Admin/SecondLayout'
import MainLayouts from './components/MainLayouts'
import ScrollToTop from './components/ScrollToTop'
import Category from './pages/Admin/Category'
import Dashboard from './pages/Admin/Dashboard'
import User from './pages/Admin/User'
import ListPost from './pages/Admin/ListPost'
import DetailCart from './pages/DetailCart'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Post from './pages/Post'
import Profile from './pages/Profile'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRoutes } from './routing/privateRoutes'
import { OpenRoutes } from './routing/openRoutes'
import ListPostsUser from './pages/ListPostUser'


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path='detail' element={<DetailCart />} />
            <Route path='profile' element={<PrivateRoutes><Profile /></PrivateRoutes>} />
            <Route path='list-post' element={<PrivateRoutes><ListPostsUser /></PrivateRoutes>} />
            <Route path='post' element={<PrivateRoutes><Post /></PrivateRoutes>} />
            <Route path='login' element={<OpenRoutes><Login /></OpenRoutes>} />
            <Route path='register' element={<OpenRoutes><Register /></OpenRoutes>} />
          </Route>
          <Route path='/admin' element={<PrivateRoutes><SecondLayout /></PrivateRoutes>}>
            <Route index element={<Dashboard />} />
            <Route path='user' element={<User />} />
            <Route path='category' element={<Category />} />
            <Route path='list-post' element={<ListPost />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          className={'mt-12'}
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </>
  )
}

export default App
