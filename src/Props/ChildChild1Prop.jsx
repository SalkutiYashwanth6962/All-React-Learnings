// import React from 'react'

// const ChildChild1Prop = (props) => {
//     console.log(props)
//     let {something:{obj:{name,age}}}=props;
   
//   return (
//     <>
//     <h1>My name  is {name}</h1>
//     <h1>My name  is {age}</h1>
//     </>

    
//   )
// }

// export default ChildChild1Prop
//spread operator drillling
//import { getAllByAltText } from '@testing-library/react';
import React from 'react'

const ChildChild1Prop = (props) => {
    //console.log(props)
    let {obj:{name,age}}=props;
   
  return (
    <>
    <h1>My name  is {name}</h1>
    <h1>My name  is {age}</h1>
    </>

    
  )
}

export default ChildChild1Prop