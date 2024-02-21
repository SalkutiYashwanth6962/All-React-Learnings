// import React from 'react'

// const ChildProp = (props) => {
//   console.log(props);
//   let {click}=props
//   let{pincode,obj:{name,age},fun}= props;
//   console.log(fun());
//   return (
//     <>ChildProp
//     <h1>My Name is :{name}</h1> 
//     <h1>My Age is: {age}</h1>
//     <h1>My Pincode is :{pincode}</h1>
 

//     <button onClick={click}>click Me''''''</button>
//     <div></div>
//     </>
    

//   )
// }

// export default ChildProp
//!Props.children
// import React from 'react'

// const ChildProp = (props) => {
  
//   let {children}=props
//   console.log(children);
//  // let {children}=props
//  // console.log(children)

//   return (
//     <div>{children}</div>


//   )
// }

//export default ChildProp
// import React from 'react'

// const ChildProp = ({children}) => {
//   console.log(children)
//   return (
//     <>{children}</>
//   )
// }

// export default ChildProp
//!Default Props
//if we get data from the parent prop and also write the data inside  the default prop it will consider parent prop what it has sent
// import React from 'react'

// const ChildProp = ({name,age,phone}) => {
//   return (
//     <>
//     <h1>My name is:{name}</h1>
//     <h1>My name is:{age}</h1>
//     <h1>My name is:{phone}</h1>
//     </>
//   )
// }


// export default ChildProp
// ChildProp.defaultProps={
// name:"yash",
// age:23,
// phone:63998437
// }
//componentname.defaultProps

//!prop drilling
import React from 'react'
import ChildChild1Prop from './ChildChild1Prop'
const ChildProp = (props) => {
  return (
    <>
    {/* <ChildChild1Prop something={props}/> */}
    {/* sending object  with help of the spread operator */}
    <ChildChild1Prop {...props}/>
    
    
    
    </>
  )
}

export default ChildProp