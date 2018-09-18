import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import { TablePagination } from 'react-pagination-table';
import { Link } from 'react-router-dom';
import Table from './Table';
import PropTypes from 'prop-types';

class TasksList extends Component{
    
    render(){
        const { users, checkEmailAndPasswordAdmin, getAdminLogin, checkedAdminLogin, checkedAdminPassword, getAdminPassword, searchTasks, searchValue, filteredUsers } = this.props;
        console.log(filteredUsers)
        const Headers = ["Email", "Task", "Status", "Image", "Notes" ];
        if(checkedAdminPassword && checkedAdminLogin){
            return(
                <div className="tablePagination">
                    <Table 
                    users={users}
                    searchTasks={searchTasks}
                    searchValue={searchValue}
                    filteredUsers={filteredUsers}
                    />   
                        <Link 
                        to='/admin'
                        >
                             <Button 
                            outline color="primary"
                            >
                            Send
                            </Button>
                            <Button 
                            outline color="info"
                            >
                            Add Task
                            </Button>
                        </Link>
                    </div>)
        } else {
            return(
                <div>
                <Form className="admin" 
                role="form"
                >
                    <FormGroup>
                        <Input 
                        type="email" 
                        name="email" 
                        id="exampleEmail"
                        aria-labelledby="email" 
                        placeholder="Login"
                        onChange={getAdminLogin} 
                        />
                    {!checkedAdminLogin ? <FormText color="danger">Have not login</FormText> : null}
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        type="password" 
                        name="password"
                        aria-labelledby="password"
                        id="examplePassword" 
                        placeholder="Your password"
                        onChange={getAdminPassword} 
                        />
                    {!checkedAdminPassword ? <FormText color="danger">Have not password</FormText> : null}
                    </FormGroup>
                    <Button
                    onClick={checkEmailAndPasswordAdmin}
                    >
                        Submit
                    </Button>
                </Form>
            <div>
                <TablePagination
                    title="Todo application"
                    subTitle={`We have only ${users.length} tasks`}
                    headers={ Headers }
                    data={ users }
                    columns="email.text.status.image_path.notes"
                    perPageItemCount={ 3 }
                    totalCount={ users.length }
                    arrayOption={ [["size", 'all', ' ']] }
                />
            </div>
            <Link
                to='/task' 
                >
                <Button
                outline color="info"
                >
                Add Task</Button>
            </Link>
        </div>
            )
        }
    }
}


Input.propTypes = {
    children: PropTypes.node,
    // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
    type: PropTypes.string,
    size: PropTypes.string,
    bsSize: PropTypes.string,
    valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
    invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    plaintext: PropTypes.bool,
    addon: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };
  
  Form.propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'form'
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };
  
  FormGroup.propTypes = {
    children: PropTypes.node,
    // Applied the row class when true, does nothing when false
    row: PropTypes.bool,
    // Applied the form-check class when true, form-group when false
    check: PropTypes.bool,
    inline: PropTypes.bool,
    // Applied the disabled class when the check and disabled props are true, does nothing when false
    disabled: PropTypes.bool,
    // Pass in a Component to override default element
    tag: PropTypes.string, // default: 'div'
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };
  
  FormText.propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'small'
    color: PropTypes.string, // default: 'muted'
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };
  Button.propTypes = {
    active: PropTypes.bool,
    block: PropTypes.bool,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,
  
    // Pass in a Component to override default button element
    // example: react-router Link
    // default: 'button'
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  
    // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  
    onClick: PropTypes.func,
    size: PropTypes.string
  }
  
  export default TasksList;