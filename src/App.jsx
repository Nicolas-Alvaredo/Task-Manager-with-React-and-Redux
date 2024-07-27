import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TaskList from './components/TaskList';
import './styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Task Manager</h1>
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
