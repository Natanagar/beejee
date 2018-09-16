import React, { Component } from 'react';
import { ListGroup, ListGroupItem} from 'reactstrap';
import { TablePagination } from 'react-pagination-table';
import PropTypes from 'prop-types';

class TasksList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { users } = this.props;
        const Headers = ["UserType", "Email", "Task", "Status", "Image", "Notes" ];
        return(
            <div>
                <TablePagination
                    title="Todo application"
                    subTitle={`We have only ${users.length} tasks`}
                    headers={ Headers }
                    data={ users }
                    columns="usertypes.email.task.status.image.notes"
                    perPageItemCount={ 3 }
                    totalCount={ users.length }
                    //arrayOption={ [["size", 'all', ' ']] }
                />
            </div>
        )
    }
}
export default TasksList;