import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

    const SortTableBody = (props) => {
     const { tasks, sendDatasFromAdmin } = props   
    
        return(
        <div>    
          <tbody>
            {tasks.map(element => <tr>{Object.values(element).map(
            el => <td>{el}<input type="text" defaulValue={el}></input></td>)}
                </tr>)}
        
          </tbody>
        <Link
        exact to='/'>
            <Button 
            outline color="info"
            onClick={sendDatasFromAdmin}
            >
            Send to server
            </Button>
        </Link>
        </div>
        )
    
}
export default SortTableBody;