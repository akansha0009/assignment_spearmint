import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/taskSlice';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title && description) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        status: 'Pending',
      };
      dispatch(addTask(newTask));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="add-task">
      <h3>Add New Task</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
