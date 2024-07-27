import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import Task from './Task';
import '../styles/TaskList.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask('');
  };

  return (
    <div className="task-list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add</button>
      </form>
      {tasks.map(t => (
        <Task key={t.id} task={t} />
      ))}
    </div>
  );
};

export default TaskList;
