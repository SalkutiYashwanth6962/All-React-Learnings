import React, { useCallback, useState } from 'react'
import CallbackTitle from './CallbackTitle'
import CallbackCounter from './CallbackCounter'
import CallbackButton from './CallbackButton'

const CallbackParent = () => {
   let[age,setAge]= useState(23)
    let[salary,setSalary]=useState(20000)
    let handleAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    let handleSalary=useCallback(()=>{
        setSalary(salary+10000)
    },[salary])

  return (
   <>
   <CallbackTitle/>
   <CallbackCounter text="age" count={age}/>
   <CallbackButton send={handleAge}>Increment Age</CallbackButton>
   <CallbackCounter text="salary" count={salary}/>
   <CallbackButton send={handleSalary}>Increment Salary</CallbackButton>
   </>
  )
}

export default React.memo(CallbackParent)

