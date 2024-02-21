import React from 'react'
import Hoc from './Hoc'

const Child1 = (props) => {
    let{age,gender}=props.obj;
    console.log(props.obj)
  return (
    <div>Child1---{props.name}--{age}--{gender}</div>
  )
}

export default Hoc(Child1)