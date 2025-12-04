import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/About.jsx'
import AuthParent from './pages/auth/AuthParent.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import Categories from './pages/Categories.jsx'
import Car from './pages/Car.js'
import Layout from './pages/Layout.jsx'
import NotFound from './pages/NotFound.jsx'
import Product from './pages/Product.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route path={"about"} element={<About />} />
        <Route path={"categories"} element={<Categories />} />
        <Route path='categories'>
          <Route path={"car"} element={<Car />} />
        </Route>
        <Route path='product/:title' element={<Product />} />
      </Route>
      <Route path='/*' element={<NotFound />} />
      <Route path='/auth' element={<AuthParent />}>
        <Route path={"login"} element={<Login />} />
        <Route path={"register"} element={<Register />} />
      </Route>

    </Routes>

  </BrowserRouter>
  // </StrictMode>,
)
