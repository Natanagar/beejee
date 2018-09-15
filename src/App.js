import React, { Component } from 'react';
import Task from './components/Task'
import TasksList from './components/TasksList'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }
  state = {
      email: '',
      password: ''
  }
  render() {
    return (
      <div className="App">
        <TasksList />
        <Task 
        valueEmail={this.state.email}
        valuePassword={this.state.password}
        />
      </div>
    );
  }
}

export default App;
