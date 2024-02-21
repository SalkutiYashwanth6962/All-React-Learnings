import React, { useEffect } from 'react'

const UnMountEffect = () => {
   
    useEffect(()=>{
        console.log("useEffect Running")
        //clean up function
        return()=>{
          console.log("component Removed");
        }
    },[])
  return (
    <>
     <p>Unmount Effect</p>
    </>
  )
}

export default UnMountEffect