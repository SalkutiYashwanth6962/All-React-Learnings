// src/components/Task.js
import React, { useState } from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    onEdit(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.title}</span>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Task;
