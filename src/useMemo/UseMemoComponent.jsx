import React, { useMemo, useState } from 'react'
//we use useMemo hook for the code optimiztion 
//if we want not to effect other states
const UseMemoComponent = () => {
    let[state1,setState1]=useState(0);
    let[state2,setState2]=useState(0);
    let handleState1=()=>{
        setState1(state1+1)
    }
    let handleState2=()=>{
        setState2(state2+1)
    }
 
    let isEven=useMemo(()=>{
        let i=0;
        while(i<1000000000)
        i++
     return state1%2
    },[state1])

  return (
   <>
   <button onClick={handleState1}>counter1-{state1}</button>
   <span>{isEven?"odd":"even"}</span>
   <br /><br />
   <button onClick={handleState2}>counter2-{state2}</button>
   </>
  )
}

export default UseMemoComponent