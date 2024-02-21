import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  let[data,setData]=useState({
    id:"",
   name:"",
   place:"",
   email:"",
   mobile:""
  })
  let navigate=useNavigate()
  let{id,name,email,place,mobile}=data
  let handleChange=(e)=>{
   let {name,value}=e.target;
   setData({...data,[name]:value})
  }
  let handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/users",data)
    navigate("/")
  }
  return (
    <>
    
   
    <form action="" onSubmit={handleSubmit}>
    <table >
      <th><h1>Adding Data</h1></th>
      <tr>
        <td><label htmlFor="id">Id:</label></td>
        <td> <input type="text" name="id" id="id" value={id} onChange={handleChange}/></td>
       </tr>
       <tr>
       <td><label htmlFor="name">Name:</label></td>
        <td><input type="text" name="name" id="name"  value={name} onChange={handleChange}/></td>

       </tr>
       <tr>
        <td> <label htmlFor="email">Email:</label></td>
        <td><input type="text" name="email" id="email"  value={email} onChange={handleChange}/></td>
       </tr>
       <tr>
        <td> <label htmlFor="palce">Place:</label></td>
        <td><input type="text" name="place" id="place"  value={place} onChange={handleChange} /></td>
       </tr>
       <tr>
        <td><label htmlFor="mobile">Mobile:</label></td>
        <td><input type="text" name="mobile" id="mobile"  value={mobile} onChange={handleChange}/></td>
       </tr>
       <input type="submit"  value="submit"/>
    </table>
    
   
    
    
   
    
    
    </form>
   
    </>
  )
}

export default Create