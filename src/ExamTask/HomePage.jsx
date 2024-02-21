import React from 'react'
import SignUp from './SignUp'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <center>
    <h1>Home Page</h1>
    //to and path element must be same 
    <button ><Link to="/signup" style={{textDecoration:'none'}}>Sign up</Link></button>&nbsp;&nbsp;
    <button><Link to="/login"  style={{textDecoration:'none'}}>Login</Link></button>
    </center>
  
    </>
  )
}

export default HomePage