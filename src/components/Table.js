import React from 'react';
import { Alert } from 'reactstrap';
import SearchBar from './SearchBar';
import UserList from './UserList'




const Table = (props) =>  {
    const { users } = props
        console.log(users)     
        return(
                
                <div>Hello World!
                    <Alert color="secondary">
                    
                        {/*<SearchBar 
                        value={value}
                        aria-label="Filter markers form"
                        role="search"
                        label="Filter tasks"
                        />*/}
                        <UserList
                        role='menu'
                        tabIndex="0"
                        users={users}
                        
                        />
                    </Alert>
                </div>
            )
        }

export default Table;