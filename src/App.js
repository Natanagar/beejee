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
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeTask = this.handleChangeTask.bind(this)
  }
  state = {
      user : {
        email: '',
        password: '',
        notes : '',
        task : null,
        file : null
      },
      invalidEmail : '',
      checkedEmail: {},
      checkedImage : {},
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
                notes : this.state.user.notes,
                task : this.state.user.task,
                file : this.state.user.file 
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
          notes : notes,
          task : this.state.user.task,
          file : this.state.user.file
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
          notes : this.state.user.notes,
          task : this.state.user.task,
          file : this.state.user.file
        }
      })
    }
  } 
  validateEmail = (email) => {
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  }

  submit = (event) => {
    axios({
      method: 'post',
      url: 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Name.',
      crossDomain: true,
      headers : {
        'Content-Type': 'multipart/form-data'
      },
      processData: false,
      data: {
        user : this.state.user.email,
        password : this.state.user.password,
        notes : this.state.user.notes,
        task : this.state.user.task,
        file : this.state.user.file
        },
      config: { headers: {'Content-Type': 'multipart/form-data' },
        onUploadProgress : progressEvent => {
          console.log('Upload Progress:' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
        }
      }
    }).then(function (response) {
      //handle success
      console.log(response.data);
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
        file : null,
        task : null
      },
      invalidEmail : '',
      checkedEmail: {},
      checkedImage : {},
      isMailSent : false,
      isTaskShow : false
    })
  }
  showTask = (event) => {
    this.setState({
      isTaskShow : true
    })
  }
  handleChangeTask = event => {
    event.preventDefault();
    const task = event.target.value;
    this.setState({
      user : {
        email: this.state.user.email,
        password: this.state.user.password,
        notes : this.state.user.notes,
        task : task,
        file : this.state.user.file
      }
    })
  }
  handleChangeImage = (event, value) => {
    event.preventDefault();
    const uploadFile = event.target.files[0];
    //check type of image and resize
    console.log(uploadFile.type)

    //check size or width with height!!!
    if(uploadFile.type === 'image/jpeg' || uploadFile.type === 'image/png'){
      this.setState({
        checkedImage : true,
        user : {
          email: this.state.user.email,
          password: this.state.user.password,
          notes : this.state.user.notes,
          task : this.state.user.task,
          file : uploadFile
        }

      })

    } else {
      this.setState({
        checkedImage : false
      })
    }
  }
  render(){
    console.log(this.state)
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
            handleChangeImage ={this.handleChangeImage}
            checkedEmail={this.state.checkedEmail}
            checkedImage={this.state.checkedImage}
            addNotes={this.addNotes}
            checkedPassword = {this.checkedPassword}
            invalidEmail={this.state.invalidEmail}
            isTaskShow={this.state.isTaskShow}
            handleChangeTask = {this.handleChangeTask}
            />
          </ErrorBoundary>
        </div>
      )
    }
}

export default App;