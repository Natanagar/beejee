import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Task extends React.Component {
    constructor(props){
        super(props)

    }
    
   
  render() {
    const { valueEmail, valuePassword } = this.props;
    console.log(valueEmail, valuePassword)
    return (
      <Form className="validationForm">
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input 
            type="email" 
            name="email" 
            id="exampleEmail" 
            placeholder="write your email"
            value={valueEmail}
            />
          </Col>
            <FormText color="danger" style ={{
                textAlign: 'center',
                marginLeft: '225px'
             }}>
                Please, include an '@' in the email address. 'not email' is missing an '@'
            </FormText>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input 
            type="password" 
            name="password" 
            id="examplePassword" 
            placeholder="write your password"
            value={valuePassword}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Describe your task</Label>
          <Col sm={10}>
            <Input 
            type="select" 
            name="selectMulti" 
            id="exampleSelectMulti" multiple />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Your notes</Label>
          <Col sm={10}>
            <Input 
            type="textarea" 
            name="text" 
            id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>File</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This file have to size no more 320х240 pixels. If you have more, your file will be cut in this size.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>Show me task</Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Button color="link">Click for show task</Button>
                
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row style={{
            display: 'none'
        }}>
          <Label for="checkbox2" sm={2}>Your task</Label>
          <Col sm={{ size: 10 }}>
            <ul className='task'>
            </ul>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="info">Reset</Button>
            <span>  </span>
            <Button color="primary">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
