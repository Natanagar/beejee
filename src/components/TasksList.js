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
        const { users } = this.props;
        const Headers = ["Email", "Task", "Status", "Image", "Notes" ];
        return(
            <div>
                <Form className="admin" row>
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="examplePassword" placeholder="Your password" />
                    </FormGroup>
                    <Button>Submit</Button>
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
export default TasksList;