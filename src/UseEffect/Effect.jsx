import React, { useEffect, useState } from 'react'
import UnMountEffect from './UnMountEffect';

const Effect = () => {
   let [count,setCount] =useState(0);
   let [decrement,setDecrement]=useState(0);
   let [remove,setRemove]=useState(true);
   useEffect(()=>{
    console.log("useEffect running like updating phase ")
   })
   useEffect(()=>{
    console.log("useEffect is running like mounting phase")

   },[])
   useEffect(()=>{
    console.log("useEffect is running after state changes")
   },[count])
  return (
    <>
    <button onClick={()=>{setCount(count+1)}}  > Click to increment-{count}</button>
    <button onClick={()=>{setDecrement(decrement-1)}}>Click to decrement-{decrement}</button>
    <button onClick={()=>{setRemove(!remove)}}>click to disappear </button>
     {remove?<UnMountEffect/>:<></>}
    </>
  )
}

export default Effect