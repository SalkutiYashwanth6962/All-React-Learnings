import React from 'react'
import Navbar from './Navbar'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
    <Navbar/>
    <div id="sub">
    <h1>About Page</h1>

    <ul>
      <Link to="/about/connection"><li>connection</li></Link>
      <Link to="/about/profile"><li>profile</li></Link>
    </ul>
    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eveniet quasi nisi recusandae. Libero dolorum minima, fugit praesentium quidem eius, ab laudantium impedit est maxime facere esse aliquam non illum doloremque reprehenderit dolores sequi officia, eum blanditiis id consectetur sapiente dolore explicabo. Eum, ad. Voluptatem non ipsum minus, consequuntur cupiditate dicta iste fugiat aperiam, voluptates quidem repellat praesentium voluptate eum qui sapiente molestias similique! Dolor nemo aliquam cum nulla totam, sit mollitia porro sint explicabo, odio quia, magni modi consequuntur in corrupti nihil. Pariatur impedit animi, doloremque provident blanditiis porro architecto facilis dolores quaerat sit id optio similique saepe qui?</h2>
    {/* <Outlet/> */}
    {/* if we want to render  the components in same page use as above */}
    {/* outlet renders the children components */}
    </div>
    
    </>
  )
}

export default About