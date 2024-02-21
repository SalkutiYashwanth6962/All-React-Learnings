import React, { useState } from 'react'
import TodoList from './TodoList';

const Form = () => {
   
    const [task,setTask]=useState("");
    const[todos,setTodos]=useState([]);
    const changehandler=(e)=>{
        setTask(e.target.value)
    }
    const submithanler=(e)=>{
        e.preventDefault();
        const newTodos=[...todos,task]
        setTodos(newTodos);
        setTask("");
    }
    const deletehandler=(indexValue)=>{
        const newTodos=todos.filter((todo,index)=>index!=indexValue);
        setTodos(newTodos);
    }
  return (
    
    <>
    <h1>Todo List</h1>
    <form action="" onSubmit={submithanler}>
        <input type="text" name="task" id=""  placeholder="enter a todo task" value={task} onChange={changehandler} />&nbsp;
        <input type="submit" value="Add" name="Add"></input>
        <TodoList todolist={todos} deletehandler={deletehandler}/>
    </form>
    </>
  )
}

export default Form