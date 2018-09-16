import React, { Component } from 'react';
import Task from './components/Task'
import TasksList from './components/TasksList'
import ErrorBoundary from './components/ErrorBoundary';
import axios from 'axios';
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
      user : {
        email: '',
        password: '',
        notes : '',
      },
      invalidEmail : '',
      checkedEmail: false,
      isMailSent : false,
      isTaskShow : false
    }
 

  userHandleChange = (event, value) => {
    value = event.target.value.substr(0, 30);
    if(typeof value !== 'undefined'){ 
      console.log(value);
        if (this.validateEmail(value)){
          if(value !== this.state.user.email){
            this.setState({
              user: { 
                email : value, 
                password : this.state.user.password, 
                notes : this.state.user.notes 
              }, 
              checkedEmail : true
            })
          } 
        } else { 
            console.log(false)
            this.setState({ 
              invalidEmail : value, 
              checkedEmail : false 
            })
          }
        

    }
    
    
  }
  addNotes = (event, value) => {
    let notes = event.target.value;
    if(notes !== this.state.user.notes){
      this.setState({
        user : {
          email : this.state.user.email,
          password : this.state.user.password,
          notes : notes
        }
      })
    }
  }
  checkedPassword = (event, value) => {
    const pass = event.target.value.substr(0, 20)
    console.log(pass)
    if(pass !== this.state.user.password){
      this.setState({
        user : {
          email : this.state.user.email,
          password : pass,
          notes : this.state.user.notes
        }
      })
    }
  } 
  validateEmail = (email) => {
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  }

  submit = (event) => {
    console.log("banana")

    axios({
      method: 'post',
      url: 'https://uxcandy.com/~shapoval/test-task-backend',
      crossDomain: true,
      headers : {
        'Content-Type': 'multipart/form-data'
      },
      processData: false,
      data: {
        user : this.state.user.email,
        password : this.state.user.password,
        notes : this.state.user.notes
      },
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    }).then(function (response) {
      //handle success
      console.log(response);
  })
  .catch(function (response) {
      //handle error
      console.log(response);
  });
  }
  reset = (event) => {
    this.setState({
      user : {
        email: '',
        password: '',
        notes : '',
      },
      checkedEmail: false,
      isMailSent : false,
      isTaskShow : false
    })
  }
  showTask = (event) => {
    this.setState({
      isTaskShow : true
    })
  }
  render(){
      return(
        <div className="App">
          <TasksList />
          <ErrorBoundary>
            <Task 
            user={this.state.user}
            submit = {this.submit}
            reset={this.reset}
            showTask={this.showTask}
            userHandleChange = {this.userHandleChange}
            checkedEmail={this.state.checkedEmail}
            addNotes={this.addNotes}
            checkedPassword = {this.checkedPassword}
            invalidEmail={this.state.invalidEmail}
            isTaskShow={this.state.isTaskShow}
            />
          </ErrorBoundary>
        </div>
      )
    }
}

export default App;