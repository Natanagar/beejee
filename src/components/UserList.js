import React from 'react';
import { Alert, Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';




const UserList = (props) =>{   
    const { searchValue, filteredUsers } = props
        return(
    
            <div>
                <Alert color="light">
                    <ol>
                        
                        {filteredUsers.map((user) => {
                
                            return (
                            
                            <Container>
                                <Row>
                                <li 
                                key={user.id}
                                id={user.id} 
                                >
                                    <Col>
                                        {`User Type - ${user.username}`}
                                    </Col>
                                    <Col>
                                        {`User email - ${user.email}`} 
                                        
                                    </Col>
                                    <Col>
                                        {`User Task - ${user.text}`} 
                                        
                                    </Col>
                                    <Col>
                                        <input 
                                        onChange={()=>{console.log('Hura!')}} 
                                        />
                                    </Col>
                                    <Col>
                                        {`User Status ${user.status}`}
                                
                                    </Col>
                                    <Col>
                                            {`User path ${user.image_path}`}
                                            
                                    </Col>
                                    <Col>
                                        <span>{`Task was done`}</span> 
                                        <input 
                                        type="checkbox" 
                                        onClick={()=>{console.log('Banana!')}}
                                        />
                                        
                                    </Col>
                
                                    </li>   
                                </Row>
                            </Container>
                            );
                        })}
                    </ol>
                <br/>
                    </Alert>           
            </div>
        )
    } 
    
export default UserList;

Alert.propTypes = {
    className: PropTypes.string,
    closeClassName: PropTypes.string,
    color: PropTypes.string, // default: 'success'
    isOpen: PropTypes.bool,  // default: true
    toggle: PropTypes.func,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    // Controls the transition of the alert fading in and out
  }
  Container.propTypes = {
    fluid:  PropTypes.bool
    // applies .container-fluid class
  }