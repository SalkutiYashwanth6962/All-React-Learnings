import React, { useRef } from 'react'
import FChild from './FChild'

const FParent = () => {
  
    let InputRef=useRef()
    console.log(InputRef)
    let handleFocus=()=>{
        InputRef.current.focus()
        
    }
  return (
    <>
    <FChild ref={InputRef}/>
    <button onClick={handleFocus}>Click to focus</button>
    </>
  )
}

export default FParent