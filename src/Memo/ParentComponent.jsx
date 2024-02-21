import React, { useState } from 'react'
import NormalComponent from './NormalComponent'
import MemoComponent from './MemoComponent'

const ParentComponent = () => {
   let[state,setState]= useState({name:"yashwanth"});
   let handleState=()=>{
    setState({name:"yashwanth"})
   }

  return (
   <>
   <NormalComponent val1={state.name}/>
   <MemoComponent val2={state.name}/>
   <button onClick={handleState}>Click here to change the state</button>
   </>
  )
}

export default ParentComponent