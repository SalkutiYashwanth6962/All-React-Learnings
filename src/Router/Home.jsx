import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  let navigate=useNavigate()
  let handlenavigate=()=>{
    navigate("./contact")
  }

  return (
    <>
    <Navbar/>
<div id="sub">
<h1>Homepage</h1>
</div>
<button onClick={handlenavigate}>Click here to move to contact component</button>
    </>
  )
}

export default Home