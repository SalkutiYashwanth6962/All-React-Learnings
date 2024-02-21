// import React from 'react'
// import ChildProp from './ChildProp'

// const ParentProp = () => {

// let k =()=>{
//   alert("hey u clicked...... billa")
// }
  
//     let details={
//       name:"yash",
//       age:23
//     }
//   return (
//      <>
//      {/* <h1><ChildProp name="yashwanth"/></h1> */}
//      {/* <h1><ChildProp pincode="509401" obj={{ name:"yash", age:23}} click={k}/></h1> */}
//      <h1><ChildProp pincode="509401" obj={details} fun={()=>{console.log("I am from parent component")}}/></h1>
//      </>
//   )
// }

// export default ParentProp
//!Props.children
// import React from 'react'
// import ChildProp from './ChildProp'

// const ParentProp = () => {
//   return (
//     <><ChildProp>
//       <h1>some data 1 children</h1>
//       <h1>some data 2</h1>
//       </ChildProp></>
       
//   )
// }

// export default ParentProp

//!Default props
// import React from 'react'
// import ChildProp from './ChildProp'

// const ParentProp = () => {
//   return (
//     <><ChildProp name="yashwanth"/></>
//   )
// }

// export default ParentProp
//! prop drilling problem
import React, { Component } from 'react'
import ChildProp from './ChildProp'


const ParentProp = () => {
  return (
    <>
    <ChildProp obj={{name:"yashwanth",age:"23"}}/>
    
    
    
    </>
  )
}

export default ParentProp
//React js library is used to build ui
 // break everything as a Component
 //Components html css js
 //twitter
 //rerenders changes easily compares old with new tree(dom and virtual dom )
 //
 //registraction clock app dictionary kepper to do list

 