import React from 'react';
import { Button } from 'reactstrap';


const SortTableHeader = (props) => {
 const { columns, sortingTable } = props
 let sortedColumns = columns.map(item => console.log(item.label))
    return(
      <thead>
          <tr>
           <th>
            <Button
                 outline color="primary"
                 onClick={()=>sortingTable('id')}
                 >
                 Id
              </Button>
           </th>
           <th>
            <Button
                 outline color="primary"
                 onClick={()=>sortingTable('username')}
                 >
                 Username
              </Button>
           </th>
           <th>
            <Button
                 outline color="primary"
                 onClick={()=>sortingTable('email')}
                 >
                 Email
              </Button>
           </th>
           <th>
            <Button
                 outline color="primary"
                 onClick={()=>sortingTable('text')}
                 >
                 Text
              </Button>
           </th>
           <th>
            <Button
                 outline color="primary"
                 onClick={()=>sortingTable('status')}
                 >
                 Status
              </Button>
           </th>
           <th>
            <Button
                 outline color="primary"
                 onClick={()=>sortingTable('image')}
                 >
                 Image
              </Button>
           </th>
           
            {/*{ columns.map(item => (
               <th>
                 <Button
                 outline color="primary"
                 onClick={sortingTable}
                 >
                 {item.label}
                </Button>
               </th>
            ))}*/}
          </tr>
      </thead>
      )
}

export default SortTableHeader;