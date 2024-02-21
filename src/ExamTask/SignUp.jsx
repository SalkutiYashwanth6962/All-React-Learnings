import React, { useState } from 'react'
import Login from './Login'

const SignUp = () => {
    let[data,setData]=useState({
        name:"",
        password:"",
        email:""
    })
    let{name,password,email}=data
    let handleName=(e)=>{
      
        setData({...data,name:e.target.value})
  
      }
      let handlePassword=(e)=>{
       
        setData({...data,password:e.target.value})
  
      }
      let signup=(e)=>{
        console.log(e);
       localStorage.setItem('items',JSON.stringify(data))
      }
      let handleEmail=(e)=>{
        
        setData({...data,email:e.target.value})
  
      }
      console.log(email);
      let handleSubmit=(e)=>{
        e.preventDefault();
      console.log(name,password,email);
      }
  return (
    <>
    <center>
    <h1>SignUp Form</h1>
    <form action="" onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
         <input type="text" name="name" id="name" value={name} onChange={handleName}/>
         <br /><br />
         <label htmlFor="password">Password:</label>
         <input type="text" name="password" id="password" value={password} onChange={handlePassword} />
         <br /><br />
         <label htmlFor="email">Email:</label>
         <input type="text" name="email" id="email" value={email} onChange={handleEmail}/>
         <br /><br />
         <input type="submit" value="Sign Up" onClick={signup}/>
    </form>
    
    </center>
    </>
  )
}

export default SignUp
