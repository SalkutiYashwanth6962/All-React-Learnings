import React, { useContext } from 'react'
import {UserName,Age, Obj} from './GlobalContext'

const ChildChild1Context = () => {
    let name=useContext(UserName);
    let age=useContext(Age);
    let obj=useContext(Obj);
   // console.log(obj)
    let {place,skill,func}=obj; 
    //func()
  return (
    <>
    <h1>My Name is  {name} and my age is{age}</h1>
    <h1>{place}</h1>
    <h1>{skill}</h1>
    

     </>
  )
}

export default ChildChild1Context