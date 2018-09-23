import React from 'react';
import { Input } from 'reactstrap';


const SortTableHeader = (props) => {
 const { columns } = props
 
    return(
      <thead>
          <tr>
            { columns.map(item => (
              <th>{item.label}</th>
            ))}
          </tr>
      </thead>
      )
}

export default SortTableHeader;