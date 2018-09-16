import React, { Component } from 'react';
import { Col, Alert, FormGroup, Button, FormText } from 'reactstrap';
class ErrorBoundary extends Component{
    constructor(props){
        super(props)
    }
    state = {
        hasError : false
    }
    componentDidCatch(error, info){
        this.setState({
          hasError : true
        })
      }
    render(){
        if(this.state.hasError){
            return(
                <Alert color="danger">
                    <FormGroup row>
                        <Col xl={10} />
                        <FormText>We have an error</FormText>
                        <Button 
                        outline color="danger"
                        onClick={()=>console.log("send info about error")}
                        >
                        Send information about error
                        </Button>
                    
                    </FormGroup>
                </Alert>
            )
        }
        return this.props.children;
        
    }
}

export default ErrorBoundary;
