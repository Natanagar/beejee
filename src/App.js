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
      password: '',
      checkedEmail: false
  }
  handleChangeEmail = (event, value) => {
    value = event.target.value.substr(0, 30);
    
    if(typeof value !== 'undefined'){
      console.log(value);
    }
    if(value !== this.state.email){
      this.setState({
        email : value
      })
    }
    
  }

  submit = () => {console.log("banana")}
  reset = () => {console.log('wowow')}
  showTask =() => {console.log('blablabla')}
  render() {
    console.log(this.state.email)
    return (
      <div className="App">
        <TasksList />
        <Task 
        valueEmail={this.state.email}
        valuePassword={this.state.password}
        submit = {this.submit}
        reset={this.reset}
        showTask={this.showTask}
        handleChangeEmail = {this.handleChangeEmail}
        checkedEmail={this.state.checkedEmail}
        />
      </div>
    );
  }
}

export default App;
