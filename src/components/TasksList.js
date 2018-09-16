import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import { TablePagination } from 'react-pagination-table';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TasksList extends Component{
    
    render(){
        const { users, checkEmailAndPasswordAdmin, getAdminLogin, checkedAdminLogin, checkedAdminPassword, getAdminPassword } = this.props;
        const Headers = ["Email", "Task", "Status", "Image", "Notes" ];
        if(checkedAdminPassword && checkedAdminLogin){
            return(
                <div className="tablePagination">
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
                        <Button outline color="info">Add Task</Button>
                    </div>)
        } else {
            return(
                <div>
                <Form className="admin" row>
                    <FormGroup>
                        <Input 
                        type="email" 
                        name="email" 
                        id="exampleEmail" 
                        placeholder="Login"
                        onChange={getAdminLogin} 
                        />
                    {!checkedAdminLogin ? <FormText color="danger">Have not login</FormText> : null}
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        type="password" 
                        name="password" 
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
                outline color="info"
                ><Button>Add Task</Button>
            </Link>
        </div>
            )
        }
    }
}
export default TasksList;