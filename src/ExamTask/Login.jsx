import React, { useState } from 'react'

const Login = () => {
   
    let[details,setDetails]=useState({
        name:"",
        password:""
    })
    let{name,password}=details
    let handleName=(e)=>{
      
        setDetails({...details,name:e.target.value})
  
      }
      let handlePassword=(e)=>{
       
        setDetails({...details,password:e.target.value})
  
      }
      let handleSubmit=(e)=>{
        e.preventDefault();
      
      }
      let login=()=>{
        const details=JSON.parse(localStorage.getItem('items'))
        console.log(details)
        if(details.name==name && details.password==password){
            alert("Successful login")
            window.open("./dashboard")
        }
      }
  return (
    <>
    <center>
    <h1>Login Form</h1>
    <form action="" onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
         <input type="text" name="name" id="name" value={name} onChange={handleName}/>
         <br /><br />
         <label htmlFor="password">Password:</label>
         <input type="text" name="password" id="password" value={password} onChange={handlePassword} />
         <br /><br />
         <input type="submit" value="Login" onClick={login}/>
    </form>
    </center>
    </>
  )
}

export default Login