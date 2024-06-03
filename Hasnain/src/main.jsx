import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Products from './Components/Product.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <><Navbar /> <Home /></>
  },
  {
    path:"/about",
    element: <><Navbar /> <About /></>
  },
  {
    path: "/contact",
    element : <><Navbar /> <Contact /></>
  },
  {
    path:"/product",
    element: <><Navbar /> <Products /></>
  }
])
export default router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    {/* <Navbar />  */}
    <RouterProvider router = {router} />
    </>
  </React.StrictMode>
)
