import React, { Component } from 'react';
import SortTableHeader from './SortTableHeader';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import Pagination from './Pagination';


class SortTable extends Component {
   /* static propTypes = {
        name: React.PropTypes.string,
    };*/
    
    render(){
    
       const { users, addChangedDatasFromAdmin, getChangedTasksFromAdmin, columns, sendDatasFromAdmin, sortingTable, activePage, handlePageChange, tasks } = this.props

        return(
    
            <div className="sort-table">
                <Table>
                    <SortTableHeader
                    columns={columns}
                    sortingTable={sortingTable} 
                    />
                    <tbody>
                    {users.map((element,i) => 
                        <tr
                        key={i}
                        >{Object.values(element).map(el =>
                        <td
                        key={el}
                        >{el}</td>
                        )}
                    </tr>)}
                    
                    </tbody>
                </Table>
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={3}
                    totalItemsCount={tasks}
                    pageRangeDisplayed={3}
                    onChange={handlePageChange}
                    />
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