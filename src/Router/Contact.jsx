import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  let navigate=useNavigate();
  //useNavigate() will return a function which has capability to move to the another component without refreshing the page
  let handlemove=()=>{
     navigate(-2)
     //to go back to previous page use -1(1pages back)
  }
  return (
    <>
    <Navbar/>
    <div id="sub">
    <h1>Contact</h1>

     </div>
     <button onClick={handlemove}>click here to move to previous page</button>
     
    </>
   
  )
}

export default Contact