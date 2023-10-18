import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../slices/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleStatusChange = (id, status) => {
    dispatch(updateTask({ id, status }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="task-list">
      <h3>Task List</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <div className="task-actions">
              {task.status === 'Pending' ? (
                <button onClick={() => handleStatusChange(task.id, 'Completed')}>
                  Mark as Completed
                </button>
              ) : (
                <button onClick={() => handleStatusChange(task.id, 'Pending')}>
                  Mark as Pending
                </button>
              )}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
