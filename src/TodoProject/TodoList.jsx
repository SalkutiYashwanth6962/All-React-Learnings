import React from 'react'

const TodoList = ({todolist,deletehandler}) => {
  return (
    <div >
        {/* while iterating in map index geets sstarts from 0 and value increases */}
        {todolist.map((todolist,index)=>
        <div key={index}><h3>{todolist}</h3>  &nbsp; <button onClick={()=>deletehandler(index)}>Delete</button></div>)}
    </div>
  )
}

export default TodoList