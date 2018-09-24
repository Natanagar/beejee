import React, { Component } from 'react';
import Task from './components/Task';
import TasksList from './components/TasksList';
import ErrorBoundary from './components/ErrorBoundary';
import axios from 'axios';
import { Route } from 'react-router-dom';
//import DataUsers from './components/TaskListJson';
import SortTable from './components/SortTable';
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';
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
    this.handleChangeTask = this.handleChangeTask.bind(this);
    this.getAdminLogin = this.getAdminLogin.bind(this);
    this.getAdminPassword = this.getAdminPassword.bind(this);
    this.searchTasks = this.searchTasks.bind(this);
    this.getDatasFromServer = this.getDatasFromServer.bind(this);
    this.sendDatasFromAdmin = this.sendDatasFromAdmin.bind(this);
    this.getChangedTasksFromAdmin = this.getChangedTasksFromAdmin.bind(this)
    this.sortingTable = this.sortingTable.bind(this)

  }
  state = {
      admin : {
        login : 'admin',
        password : "123"
      },
      columns : [
        {
            label: 'ID',
            sort: 'default',
        }, 
        {
            label: 'User Name',
            sort: 'default',
        }, 
        {
            label: 'Email',
            sort: 'default',
        },
        {
            label: 'Text',
            sort: 'default',
        }, 
        {
            label: 'Status',
            sort: 'default',
        }, 
        {
            label: 'image_path',
            sort: 'default',
        },
    ],
      user : {
        email: '',
        password: '',
        notes : '',
        task : null,
        file : null
      },
      changedTasks : [],
      searchValue : '',
      users : [],
      tasks : [],
      invalidEmail : '',
      checkedEmail: {},
      checkedImage : {},
      isMailSent : false,
      isTaskShow : false,
      checkedAdminLogin : false,
      checkedAdminPassword : false,
    }
 
  searchTasks = event => {
    const inputValue = event.target.value;
    if(inputValue!==this.state.searchValue){
      this.setState({
            searchValue : inputValue
          })
  
    }
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
    let formData = new FormData();
      formData.append('username', 'User');
      formData.append('email', this.state.user.email);
      formData.append('password', this.state.user.password);
      formData.append('text', this.state.user.notes);
      formData.append('task', this.state.user.task);
      formData.append('image', this.state.user.file);

    console.log(formData);
    console.log(this.state)
    axios({
      method: 'post',
      url: 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Agarkova',
      crossDomain: true,
      headers : {
        'Content-Type': 'multipart/form-data'
      },
      processData: false,
      data: formData,
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

  getDatasFromServer = event => {
      axios({
        method:'get',
        url: 'https://uxcandy.com/~shapoval/test-task-backend/?developer=Agarkova',
      })
      .then((response) => {
        let tasksFromServer = response.data.message.tasks
        if(tasksFromServer !== this.state.users){
          this.setState({ users : tasksFromServer })
        }
      })
      .catch(error => console.log(error))
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
    if(uploadFile.type === 'image/jpeg' || uploadFile.type === 'image/png' || uploadFile.type ==='image/gif'){
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
  getAdminLogin = (event, value) => {
    const loginAdmin = event.target.value.substr(0,7);
    console.log(loginAdmin)
    if(loginAdmin === this.state.admin.login){
        this.setState({
          checkedAdminLogin : true
        })
    } else {
      this.setState({
        checkedAdminLogin : false
      })
    } 
  }
  getAdminPassword = (event, value) => {
    const passwordAdmin = event.target.value.substr(0,20);
    if(passwordAdmin === this.state.admin.password){
        this.setState({
          checkedAdminPassword : true
        })
    } else {
      this.setState({
        checkedAdminPassword : false
      })
    } 
  }

  getChangedTasksFromAdmin = event => {
    const changedInput = event.target.value;
    console.log(changedInput)
    if(changedInput !== this.state.changedTasks){
      this.setState({
        changedTasks : changedInput
      })
    }
    this.sendDatasFromAdmin();
  }


  sendDatasFromAdmin = (event) => {
    console.log('AXIOS')
      axios({
        method: 'post',
        url: 'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Agarkova',
        crossDomain: true,
        headers : {
          'Content-Type': 'multipart/form-data'
        },
        processData: false,
        data: {
          username : this.state.admin.login,
          password : this.state.admin.password,
          notes : this.state.user.notes,
          task : this.state.changedTasks,
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
  compareBy(key) {
    return function (a, b, order="asc") {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)){
        return 0;
      }
      const varA = (typeof a[key] === 'string') ?  a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?  b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }
 

  sortingTable = (key) => {
     let sortedArray = this.state.users.slice(0).sort(this.compareBy(key))
      console.log(sortedArray)
      this.setState({
        users : sortedArray
      })

    }
  
  componentDidMount(){
    this.getDatasFromServer();   
  }

  render(){
    const { users, admin, checkedAdminLogin, searchValue, columns } = this.state;
  
    //const filteredUsers = users.filter(user => {
       // return user.text.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    //})
    
      return(
        <div 
        className="App"
        role="application"
        >
        <Route 
          exact path="/"
            render={()=>(
              <TasksList
              columns={columns}
              users={users}
              admin={admin}
              checkEmailAndPasswordAdmin={this.checkEmailAndPasswordAdmin}
              getAdminLogin={this.getAdminLogin}
              checkedAdminLogin={this.state.checkedAdminLogin}
              checkedAdminPassword={this.state.checkedAdminPassword}
              getAdminPassword={this.getAdminPassword}
              searchTasks={this.searchTasks}
              searchValue={searchValue}
              //filteredUsers={filteredUsers}
              getDatasFromServer={this.getDatasFromServer}
              sortingTable={this.sortingTable}
              

              />
              )}
          />
          <Route
            path="/task"
              render={({ history }) => (
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
                  getDatasFromServer={this.getDatasFromServer}
                  users={users}
                  />
                </ErrorBoundary>
              )}
          />
          
        </div>
      )
    }
}

export default App;