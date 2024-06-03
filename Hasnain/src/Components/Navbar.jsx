import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to='/'><li>Home</li></Link>
        <Link to='/About'><li>About</li></Link>
        <Link to='/Contact'><li>Contact</li></Link>
        <Link to='/Product'><li>Products</li></Link>
      </nav>
    </>
  ) 
}

export default Navbar