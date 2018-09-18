import React, { Component } from 'react';
const SortTableHeader = (props) => {
 const { columns } = props
    return(
        <thead>
          <tr>
            {columns.map((element, index) =>
              <th key={index}>{element.label}</th>
            )}
          </tr>
        </thead>
      )
}

export default SortTableHeader;