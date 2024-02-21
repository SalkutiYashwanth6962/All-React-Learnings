// import React from 'react'

// const UncontrolledForm = () => {
//     let handleUncontrolledForm=(e)=>{
//        // console.log(e);
//         e.preventDefault();
//        // console.log(e);
//         let name=document.getElementById("name").value;
//         let password=document.getElementById("password").value;
//         let email=document.getElementById("email").value;
//         console.log(name);
//         console.log(password);
//         console.log(email);

//     }
//   return (
//     <>
//     <form action="" onSubmit={handleUncontrolledForm} >
//         <label htmlFor="name">Name:</label>
//         <input type="text" name="name" id="name"/>
//         <br /><br />
//         <label htmlFor="password">Password</label>
//         <input type="text" name="password" id="password" />
//         <br /><br />
//         <label htmlFor="email">Email:</label>
//         <input type="text" name="email" id="email"/>
//         <br /><br />
//         <input type="submit" value="submit" />
//     </form>
//     </>
//   )
// }

// export default UncontrolledForm
//handling data with out the help of the state is uncontrolled forms
import React, { useRef } from 'react'

const UncontrolledForm = () => {
  //
    let name=useRef();
    let password=useRef();
    let email=useRef();
   let handleSubmit=(e)=>{
    e.preventDefault();
   // console.log(e);
   console.log(name);
   console.log(password.current.value);
   console.log(email.current.value);
   }

  return (
    <>
     <form action="" onSubmit={handleSubmit} >
        <label htmlFor="name">Name:</label>
         <input type="text" name="name" id="name" ref={name}/>
        <br /><br />
         <label htmlFor="password">Password</label>
         <input type="text" name="password" id="password" ref={password} />
         <br /><br />
         <label htmlFor="email">Email:</label>
         <input type="text" name="email" id="email" ref={email}/>
         <br /><br />
         <input type="submit" value="submit" />
     </form>
    
    </>
  )
}

export default UncontrolledForm
//handling the data without the help of the state
//let name=useRef();
//<form onSubmit={handleSubmit}>
//<input type="text" name="" id="" ref={name} />
//</form>
//let handleSubmit=(e)=>{e.preventDefault();  clg(name.current.value)}

