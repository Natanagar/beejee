import React from 'react';
import { Input } from 'reactstrap';


const SortTableHeader = (props) => {
 const { columns } = props
    return(
        <thead>
          <tr>
            {columns.map((element, index) =>
              <th key={index}>
                <Input
                type="text"
                defaultValue={element.label}
                >
                </Input>
                
              </th>
            )}
          </tr>
        </thead>
      )
}

export default SortTableHeader;