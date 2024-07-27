import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks, { id: Date.now(), task, completed: false }]);
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, task: updatedTask } : t)));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleComplete = id => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};
