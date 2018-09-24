import React, { Component } from 'react';
import SortTableHeader from './SortTableHeader';
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import Pagination from "react-js-pagination";
import "~bootstrap/less/bootstrap";

class SortTable extends Component {
   /* static propTypes = {
        name: React.PropTypes.string,
    };*/
    
    render(){
    
       const { users, addChangedDatasFromAdmin, getChangedTasksFromAdmin, columns, sendDatasFromAdmin, sortingTable } = this.props

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
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
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