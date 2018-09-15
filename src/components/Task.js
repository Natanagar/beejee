import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class Task extends React.Component {
    constructor(props){
        super(props)

    }
    
   
  render() {
    const { submit, reset, showTask, userHandleChange, checkedEmail, addNotes, checkedPassword, invalidEmail } = this.props;
    
    return (
      <Form className="validationForm">
           { this.props.isMailSent ? <div className="success">Thank you for submission. Someone will be in contact with you shortly.</div> : null }

        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input 
            type="email" 
            name="email" 
            id="exampleEmail" 
            placeholder="write your email"
            onChange={userHandleChange}
            />
          </Col>
            <FormText color="danger" style ={{
                textAlign: 'center',
                marginLeft: '225px'
             }}>
                Please, include an '@' in the email address. 'not email' is missing an '@'
            </FormText>
            {checkedEmail ? null : <FormText color="danger" style ={{textAlign: 'center', marginLeft: '225px'}}>{`Your email ${invalidEmail} is not valid`}</FormText>}

        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input 
            type="password" 
            name="password" 
            id="examplePassword" 
            placeholder="write your password"
            onChange={checkedPassword}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Describe your task</Label>
          <Col sm={10}>
            <Input 
            type="select" 
            name="selectMulti" 
            id="exampleSelectMulti"
            >
                <option disabled>Choose your task</option>
                <option value="Task1">Task 1</option>
                <option selected value="Task2">Task 2</option>
                <option value="Task3">Task 3</option>
                <option value="Task4">Task 4</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Your notes</Label>
          <Col sm={10}>
            <Input 
            type="textarea" 
            name="text" 
            id="exampleText" 
            onChange = {addNotes}/>
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
                <Button 
                color="link"
                onClick={this.props.showTask}
                >
                Click for show task
                </Button>
                
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
            <Button 
            color="info"
            onClick={reset}
            >
            Reset
            </Button>
            <span>  </span>
            <Button 
            color="primary"
            onClick={submit}
            >
            Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
