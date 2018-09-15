import React, { Component } from 'react';
import Task from './components/Task'
import TasksList from './components/TasksList'
import ErrorForm from './components/ErrorForm'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
    this.showTask = this.showTask.bind(this);
    this.userHandleChange = this.userHandleChange.bind(this);
    this.addNotes = this.addNotes.bind(this);
    this.checkedPassword = this.checkedPassword.bind(this);
  }
  state = {
      email: '',
      password: '',
      notes : '',
      formErrors: {email: '', password: ''},
      checkedEmail: false
  }
  userHandleChange = (event, value) => {
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
  addNotes = (event, value) => {
    let notes = event.target.value;
    if(notes !== this.state.notes){
      this.setState({
        notes : notes
      })
    }
  }
  checkedPassword = (event, value) => {
    const pass = event.target.value.substr(0, 20)
    console.log(pass)
  } 

  submit = () => {console.log("banana")}
  reset = () => {console.log('wowow')}
  showTask =() => {console.log('blablabla')}
  render() {
    console.log(this.state.notes)
    return (
      <div className="App">
        <TasksList />
        <Task 
        valueEmail={this.state.email}
        valuePassword={this.state.password}
        submit = {this.submit}
        reset={this.reset}
        showTask={this.showTask}
        userHandleChange = {this.userHandleChange}
        checkedEmail={this.state.checkedEmail}
        addNotes={this.addNotes}
        checkedPassword = {this.checkedPassword}
        />
      </div>
    );
  }
}

export default App;
export const isEmail = string => !(/^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/i).test(string);