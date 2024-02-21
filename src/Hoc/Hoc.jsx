import React from 'react'

const Hoc = (Wrap) => {
    let details={
        age:23,
        gender:"male"
    }
  return ()=>{
    return  <Wrap name="yashwanth" obj={details}/>
  }
// return()=><Wrap name="yashwanth"/>
//this also works same(we can also use this above code)

  
}

 export default Hoc
