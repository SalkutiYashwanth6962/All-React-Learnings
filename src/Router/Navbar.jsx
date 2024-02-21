import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./global.css"
const Navbar = () => {
  return (
    <>
    <div id="container">
    <ul>
       {/* path and to attributes  should be same  */}
        <NavLink to="/"><li>HOME</li></NavLink>
        <NavLink to="/about"><li>ABOUT</li></NavLink>
        <NavLink to="/contact"> <li>CONTACT</li></NavLink>
        <NavLink to="/services"><li>SERVICES</li></NavLink>
      
    </ul>
    </div>
   
    </>
  )
}

export default Navbar