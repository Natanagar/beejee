import React, { Component } from 'react';
import { Button } from 'reactstrap';

    const SortTableBody = (props) => {
     const { tasks } = props   
    
        return(
        <div>    
          <tbody>
            {tasks.map(element => <tr>{Object.values(element).map(
            el => <td>{el}<input type="text" defaulValue={el}></input></td>)}
                </tr>)}
        
          </tbody>
          <Button outline color="info">Send to server</Button>
        </div>
        )
    
}
export default SortTableBody;