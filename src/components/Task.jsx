import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/taskSlice';
import '../styles/Task.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task">
      <span className={task.completed ? 'completed' : ''}>
        {task.task}
      </span>
      <button onClick={() => dispatch(toggleComplete(task.id))}>Complete</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
