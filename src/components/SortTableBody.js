import React from 'react';
import { Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

    const SortTableBody = (props) => {
     const { tasks, sendDatasFromAdmin, getChangedTasksFromAdmin } = props   
    
        return(
        <div>    
          <tbody>
                {tasks.map(element => 
                <tr>{Object.values(element).map(
                el => <td>
                <Input 
                type="text" 
                defaultValue={el}
                onChange={getChangedTasksFromAdmin}
                >
                </Input>
            </td>)}
        </tr>)}
        
          </tbody>
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
export default SortTableBody;