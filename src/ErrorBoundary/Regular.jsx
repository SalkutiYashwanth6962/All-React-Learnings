import React from 'react'

const Regular = ({name}) => {
  if(name=="ravi"){
    throw new Error("some thing gone wrong")
  }
  return (
    <div>Regular-{name}</div>
  )
}

export default Regular