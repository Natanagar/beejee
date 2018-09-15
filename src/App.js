import React, { Component } from 'react';
import Task from './components/Task'
import TasksList from './components/TasksList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TasksList />
        <Task />
      </div>
    );
  }
}

export default App;
