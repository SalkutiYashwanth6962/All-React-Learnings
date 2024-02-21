import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const Connection = () => {
  return (
    <>
    <Navbar/>
    <div id="sub">
    <h1>Connection Page</h1>

    <ul id='sidebar'>
      <Link to="/about/connection"><li id='side-item'>connection</li></Link>
      <Link to="/about/profile"><li id='side-item'>profile</li></Link>
    </ul>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus molestiae et porro laudantium quisquam aspernatur quasi sed iste ad vitae cumque perferendis, non laboriosam ducimus. Alias iusto quibusdam esse harum aspernatur magnam praesentium fugiat aut, ratione enim repellat minus velit similique quae inventore modi explicabo illo hic nobis odit soluta autem, consequatur vitae. Suscipit illo minima nemo quas placeat voluptas totam, maxime recusandae iusto delectus minus! Perspiciatis magni corporis velit ipsam cumque, quam doloribus sunt, temporibus cum itaque eaque pariatur. Molestiae tenetur, corporis suscipit placeat quibusdam, quos beatae mollitia natus libero ab fugit amet facilis enim. Placeat, doloribus officia?</h2>
    
    {/* <Outlet/> */}
    </div>
    </>
  )
}

export default Connection