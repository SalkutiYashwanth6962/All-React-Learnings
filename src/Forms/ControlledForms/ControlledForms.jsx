import React, { useState } from 'react'
//handling data with  the help of the state is controlled forms
const ControlledForms = () => {
  
    let[data,setData]=useState({
      name:"",
      password:"",
      email:"",
      skills:"",
      gender:"",
      feedback:"",
      dob:"",
      file:""
    })
    let[place,setPlace]=useState([]);
    let {name,password,email,skills,gender,feedback,dob,file}=data;
   
    let handleName=(e)=>{
      
      setData({...data,name:e.target.value})

    }
    let handlePassword=(e)=>{
     
      setData({...data,password:e.target.value})

    }
    console.log(password);
    let handleEmail=(e)=>{
      
      setData({...data,email:e.target.value})

    }
    console.log(email);
    let handleSkills=(e)=>{
      setData({...data,skills:e.target.value})
    }
    let handleGender=(e)=>{
      setData({...data,gender:e.target.value})
    }
    let handleFeedback=(e)=>{
      setData({...data,feedback:e.target.value})
    }
    let handleCheckbox=(e)=>{
      setPlace([...place,e.target.value])
    }
    
    let handleDob=(e)=>{
      setData({...data,dob:e.target.value})
    }
    let handleFile=(e)=>{
      setData({...data,file:e.target.value})
    }
    let handleSubmit=(e)=>{
      e.preventDefault();
      console.log(name,password,email,password,skills,gender)
    }
   
  return (
    <form action="" onSubmit={handleSubmit} >
         <label htmlFor="name">Name:</label>
         <input type="text" name="name" id="name" value={name} onChange={handleName}/>
         <br /><br />
         <label htmlFor="password">Password</label>
         <input type="text" name="password" id="password" value={password} onChange={handlePassword} />
         <br /><br />
         <label htmlFor="email">Email:</label>
         <input type="text" name="email" id="email" value={email} onChange={handleEmail}/>
         <br /><br />
         <select name="skills" id="skills" value={skills} onChange={handleSkills}>
          <label htmlFor="Html"></label>
          <option value="Html" id="Html" name="Html">Html</option>
          <label htmlFor="Css"></label>
          <option value="Css" id="Css" name="Css">Css</option>
         </select>
         <br /><br />
         <label htmlFor="gender" >Gender:</label>
         <div id="gender" value={gender} onChange={handleGender}>
          <input type="radio" name="gender" id="Male" value="male"/>
          <label htmlFor="Male">Male</label>
          
          <input type="radio" name="gender" id="Female" value="female"/>
          <label htmlFor="Female">Female</label>
          <input type="radio" name="gender" id="Others" value="others" />
          <label htmlFor="Others">Others</label>

         
         </div>
        <div value={place} onChange={handleCheckbox}>
        <label htmlFor="Place">Place:</label>
        <input type="checkbox" name="place" id="Bangalore" value="Bangalore" />
        <label htmlFor="Bangalore">Bangalore</label>
        <input type="checkbox" name="place" id="Hyderabad" value="Hyderabad"/>
        <label htmlFor="Hyderabad">Hyderabad</label>
        <input type="checkbox" name="place" id="Chennai" value="chennai" />
        <label htmlFor="Chennai">Chennai</label>
        </div>

        {/* feedback */}
        <label htmlFor="feedback">Feedback</label>
        <textarea name="feedback" id="feedback" cols="30" rows="10" value={feedback} onChange={handleFeedback}></textarea>
        <br /><br />
         <label htmlFor="dob">DOB:</label>
         <input type="datetime-local"  name="dob" id="dob" value={dob} onChange={handleDob} />
         <br /><br />
         {/* file */}
         <label htmlFor="file">Choose a File:</label>
         <input type="file" name="file" id="file" value={file} onChange={handleFile}/>
         <input type="submit" value="submit" />
     </form>
  )
}

 export default ControlledForms

// 1.structure of form 
// 2.avoid default behaviour of form
// 3.create a state
// 4.link the state to the input fields by using value attribute
// 5. onChange handler for input fields
// 6.set the state by fetching the value by using the e.target.value
// 7.to keep the track of previous data use spread operator while setting the state
// import React from 'react'

// const ControlledForms = () => {
//   return (
//     //autocomplete="off"
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input type="text" name="name" id="name" />
//       <label htmlFor="email">Email</label>
//       <input type="text" name="email" id="email" />
//       <label htmlFor="password">Password</label>
//       <input type="password" name="password" id="password"/>
//       <input type="submit" value="Submit" />
//     </form>
//   )
// }

// export default ControlledForms

// 1-create the form structure 
// 2-avoid default behaviour of form 
// 3-create a state 
// 4-link the state to input fields by using value attribute
// 5-onChange handler to the input fields
// 6-set the state by fetching by using e.target.value
// 7-to keep the track of the previous data use spread operator


// import React, { useState } from 'react'
// //handling data with  the help of the state is controlled forms
// const ControlledForms = () => {
//     let[data,setData]=useState({
//       name:"",
//       password:"",
//       email:"",
//       skills:"",
//       gender:"",
//       feedback:"",
//       dob:"",
//       file:""
//     })
//     let[place,setPlace]=useState([]);
//     let {name,password,email,skills,gender,feedback,dob,file}=data;
   
//     let handleName=(e)=>{
      
//       setData({...data,name:e.target.value})

//     }
//     let handlePassword=(e)=>{
     
//       setData({...data,password:e.target.value})

//     }
//     console.log(password);
//     let handleEmail=(e)=>{
      
//       setData({...data,email:e.target.value})

//     }
//     console.log(email);
//     let handleSkills=(e)=>{
//       setData({...data,skills:e.target.value})
//     }
//     let handleGender=(e)=>{
//       setData({...data,gender:e.target.value})
//     }
//     let handleFeedback=(e)=>{
//       setData({...data,feedback:e.target.value})
//     }
//     let handleCheckbox=(e)=>{
//       setPlace([...place,e.target.value])
//     }
//     let handledetails=(e)=>{
//       setData({...data,[e.target.value]=e.target.name});
//     }
//     let handleDob=(e)=>{
//       setData({...data,dob:e.target.value})
//     }
//     let handleFile=(e)=>{
//       setData({...data,file:e.target.value})
//     }
//     let handleSubmit=(e)=>{
//       e.preventDefault();
//       console.log(name,password,email,password,skills,gender)
//     }
   
//   return (
//     <form action="" onSubmit={handleSubmit} >
//          <label htmlFor="name">Name:</label>
//          <input type="text" name="name" id="name" value={name} onChange={handledetails}/>
//          <br /><br />
//          <label htmlFor="password">Password</label>
//          <input type="text" name="password" id="password" value={password} onChange={handledetails} />
//          <br /><br />
//          <label htmlFor="email">Email:</label>
//          <input type="text" name="email" id="email" value={email} onChange={handledetails}/>
//          <br /><br />
//          <select name="skills" id="skills" value={skills} onChange={handledetails}>
//           <label htmlFor="Html"></label>
//           <option value="Html" id="Html" name="Html">Html</option>
//           <label htmlFor="Css"></label>
//           <option value="Css" id="Css" name="Css">Css</option>
//          </select>
//          <br /><br />
//          <label htmlFor="gender" >Gender:</label>
//          <div id="gender" value={gender} onChange={handledetails}>
//           <input type="radio" name="gender" id="Male" value="male"/>
//           <label htmlFor="Male">Male</label>
          
//           <input type="radio" name="gender" id="Female" value="female"/>
//           <label htmlFor="Female">Female</label>
//           <input type="radio" name="gender" id="Others" value="others" />
//           <label htmlFor="Others">Others</label>

         
//          </div>
//         <div value={place} onChange={handleCheckbox}>
//         <label htmlFor="Place">Place:</label>
//         <input type="checkbox" name="place" id="Bangalore" value="Bangalore" />
//         <label htmlFor="Bangalore">Bangalore</label>
//         <input type="checkbox" name="place" id="Hyderabad" value="Hyderabad"/>
//         <label htmlFor="Hyderabad">Hyderabad</label>
//         <input type="checkbox" name="place" id="Chennai" value="chennai" />
//         <label htmlFor="Chennai">Chennai</label>
//         </div>

//         {/* feedback */}
//         <label htmlFor="feedback">Feedback</label>
//         <textarea name="feedback" id="feedback" cols="30" rows="10" value={feedback} onChange={handledetails}></textarea>
//         <br /><br />
//          <label htmlFor="dob">DOB:</label>
//          <input type="datetime-local"  name="dob" id="dob" value={dob} onChange={handledetails} />
//          <br /><br />
//          {/* file */}
//          <label htmlFor="file">Choose a File:</label>
//          <input type="file" name="file" id="file" value={file} onChange={handledetails}/>
//          <input type="submit" value="submit" />
//      </form>
//   )
// }

//  export default ControlledForms