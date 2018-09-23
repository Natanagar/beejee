import React from 'react';
import { Button } from 'reactstrap';


const SortTableHeader = (props) => {
 const { columns, sortingTable } = props
 
    return(
      <thead>
          <tr>
            { columns.map(item => (
               <th>
                 <Button
                 outline color="primary"
                 onClick={sortingTable}
                 >
                 {item.label}
                </Button>
               </th>
            ))}
          </tr>
      </thead>
      )
}

export default SortTableHeader;