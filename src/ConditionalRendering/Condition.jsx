// import React, { useState } from 'react'

// const Condition = () => {
    
//     let[data,setData]=useState(true);
//     let handleChange=()=>{
//      setData(!data)
//     }
//   return (
//     <>
//     <h1> {data?"hii":"bye"}</h1>
   
//     <button onClick={handleChange}>{data?"click to say bye":"click to say hii"}</button>
//     </>
//   )
// }

// export default Condition

import React, { useState } from 'react'

const Condition = () => {
  let[state,setState]=useState(true)
  return (
    <>{state?"hii":"helo"}
    <button>{state?"click to say bye":"hii"}</button>
    </>
  )
}

export default Condition
