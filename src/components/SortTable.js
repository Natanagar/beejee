import React, { Component } from 'react';
import SortTableHeader from './SortTableHeader';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

class SortTable extends Component {
   /* static propTypes = {
        name: React.PropTypes.string,
    };*/
    
    render(){
    
       const { users, addChangedDatasFromAdmin, getChangedTasksFromAdmin, columns, sendDatasFromAdmin } = this.props
        console.log(users)

        return(
    
            <div className="sort-table">
                <Table>
                    <SortTableHeader
                    columns={columns} 
                    />
                    <tbody>
                    {users.map(element => 
                        <tr>{Object.values(element).map(el =><td>{el}</td>)}
                        </tr>)}
                    
                    </tbody>
                </Table>
                <Link
                    exact to='/'>
                    <Button
                    className="sendToServer"
                    outline color="info"
                    onClick={sendDatasFromAdmin}
                    >
                    Send to server
                    </Button>
                </Link>
            </div>
        )
    }
    
}



export default SortTable