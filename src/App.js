import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskManager from './components/TaskManager';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Task Manager</h1>
        </header>
        <TaskManager />
      </div>
    </Provider>
  );
}

export default App;
