import React, { Component } from 'react';
const SortTableHeader = () => {
    const TABLE_COLUMNS = [
        {
            label: 'ID',
            sort: 'default',
        }, 
        {
            label: 'User Name',
            sort: 'default',
        }, 
        {
            label: 'Email',
            sort: 'default',
        },
        {
            label: 'Text',
            sort: 'default',
        }, 
        {
            label: 'Status',
            sort: 'default',
        }, 
        {
            label: 'image_path',
            sort: 'default',
        },

    ];
    return(
        <thead>
          <tr>
            {TABLE_COLUMNS.map((element, index) =>
              <th key={index}>{element.label}</th>
            )}
          </tr>
        </thead>
      )
}

export default SortTableHeader;