// src/components/TodoList.js
import React from 'react';
import Task from './Task';

const TodoList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
    
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TodoList;
