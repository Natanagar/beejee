import React from 'react';
import { Alert } from 'reactstrap';
import SearchBar from './SearchBar';
import UserList from './UserList'




const Table = (props) =>  {
    const { users, searchTasks, searchValue, filteredUsers } = props
        console.log(searchValue, filteredUsers)     
        return(
                
                <div>Hello World!
                    <Alert color="secondary">
                    
                        <SearchBar 
                        aria-label="Filter markers form"
                        role="search"
                        label="Filter tasks"
                        searchValue={searchValue}
                        searchTasks={searchTasks}
                        
                        />
                        <UserList
                        role='menu'
                        tabIndex="0"
                        users={users}
                        searchValue={searchValue}
                        filteredUsers={filteredUsers}
                        
                        
                        />
                    </Alert>
                </div>
            )
        }

export default Table;