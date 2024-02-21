import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Read = () => {
  let[user,setUser] =useState({})
  let {id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${id}`)
    .then((val)=>{
      setUser(val.data)
    })
  },[])
  return (
    <>
    <h1>{user.id}</h1>
    <h1>{user.name}</h1>
    <h1>{user.email}</h1>
    <h1>{user.place}</h1>
    <h1>{user.mobile}</h1>
    </>
  )
}

export default Read