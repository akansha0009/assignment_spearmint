import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, updateTask, deleteTask } from '../slices/taskSlice';
import AddTask from './AddTask';
import TaskList from './TaskList';

const TaskManager = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleStatusChange = (id, status) => {
    dispatch(updateTask({ id, status }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="task-manager">
      <h2>Task Manager</h2>
      {/* Add Task component */}
      {/* Task List component */}
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TaskManager;
