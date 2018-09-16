import React from 'react';
import { Alert } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import PropTypes from 'prop-types';



const SearchBar = (props) => {
       
    return(
        
            <div>
                <Alert>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText className="bar" >Tasks for today</InputGroupText>
                        </InputGroupAddon>
                                <Input 
                                className='input' 
                                type="text" 
                                placeholder = "Search"
                                aria-label="search text"
                                role = "search"
                                
                                />
                    </InputGroup>
                    <br/>
                </Alert>            
            </div>
        )
    }
 
SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onHandleChange: PropTypes.func.isRequired
}
export default SearchBar;