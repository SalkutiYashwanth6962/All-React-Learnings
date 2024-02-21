import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <Navbar/>
    <div id="sub">
    <h1>Profile Page</h1>

    <ul>
      <Link to="/about/connection"><li>connection</li></Link>
      <Link to="/about/profile"><li>profile</li></Link>
    </ul>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque optio a ducimus aperiam vero eaque inventore voluptatem, architecto impedit blanditiis velit deleniti corrupti nihil laboriosam non dignissimos, dolor excepturi totam tenetur? Deleniti, voluptate et. Ipsa eveniet deserunt provident minima, aspernatur autem debitis laborum rerum, reiciendis odit ratione minus consectetur, unde nobis dolorem eligendi beatae natus magnam expedita! Corrupti distinctio ratione in impedit praesentium, laboriosam aperiam provident facilis repellendus, esse unde ea voluptas cupiditate, quo error. Sunt hic assumenda tenetur nostrum minus! Consectetur quam, cumque magnam vel deserunt dicta blanditiis quas voluptatibus atque assumenda repudiandae voluptas veritatis velit praesentium perspiciatis perferendis.</h2>
    
    {/* <Outlet/> */}
    /
    </div>
    </>
  )
}

export default Profile