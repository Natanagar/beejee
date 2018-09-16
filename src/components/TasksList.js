import React, { Component } from 'react';
import { ListGroup, ListGroupItem} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { TablePagination } from 'react-pagination-table';
import PropTypes from 'prop-types';

class TasksList extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const { users, admin, checkEmailAndPasswordAdmin, getAdminEmail, checkedAdminEmail, checkedAdminPassword, getAdminPassword } = this.props;
        console.log(checkedAdminPassword, checkedAdminEmail)
        const Headers = ["Email", "Task", "Status", "Image", "Notes" ];
        if(checkedAdminPassword && checkedAdminEmail){
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
                        placeholder="Email"
                        onChange={getAdminEmail} 
                        />
                    {!checkedAdminEmail ? <FormText color="danger">Have not email</FormText> : null}
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
            <Button outline color="info">Add Task</Button>
        </div>
            )
        }
    }
}
export default TasksList;