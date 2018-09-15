import React, { Component } from 'react';
import Task from './components/Task'
import TasksList from './components/TasksList'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
    this.showTask = this.showTask.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }
  state = {
      email: '',
      password: ''
  }
  handleChangeEmail = (query) => {
    this.setState({
      email : query
    })
  }
  submit = () => {console.log("banana")}
  reset = () => {console.log('wowow')}
  showTask =() => {console.log('blablabla')}
  render() {
    return (
      <div className="App">
        <TasksList />
        <Task 
        valueEmail={this.state.email}
        valuePassword={this.state.password}
        submit = {this.submit}
        reset={this.reset}
        showTask={this.showTask}
        />
      </div>
    );
  }
}

export default App;
