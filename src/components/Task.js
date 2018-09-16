import React, { Component } from 'react';
import { Alert, Col, Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Task extends React.Component {
    
   
  render() {
    const { submit, reset, userHandleChange, checkedEmail, addNotes, checkedPassword, 
      checkedImage, invalidEmail, isTaskShow, handleChangeImage, handleChangeTask, user } = this.props;
   
    
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
            onChange={handleChangeTask}
            defaultValue="Task2"
            >
                <option disabled>Choose your task</option>
                <option value="Task1">Task 1</option>
                <option value="Task2">Task 2</option>
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
            <Input 
            type="file" 
            name="file" 
            id="exampleFile" 
            required
            onChange={handleChangeImage}
            />
            <FormText color="muted">
              This file have to size no more 320х240 pixels. If you have more, your file will be cut in this size.
            </FormText>
            {(!checkedImage) ? (<FormText color="danger">This file's type is not a jpeg/jpg/png or file's size is more 320х240 pixels</FormText>) : null}
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
              {isTaskShow ? <Alert color="primary"><FormText color="muted">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Task</th>
                            <th>Notes</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            {!checkedEmail ? <td>{`${invalidEmail} is not valid`}</td> : <td>{user.email}</td>}
                            <td>{user.password}</td>
                            <td>{user.task}</td>
                            <td>{user.notes}</td>
                            {!checkedImage ? <td>{`Image is not valid`}</td> : <td>{user.file.name}</td>}
                        </tr>
                    </tbody>
                </Table>
              </FormText></Alert> : null}
              
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
            <Link
              to='/'
            >
            <Button 
            color="primary"
            onClick={submit}
            >
            Submit
            </Button>
            </Link>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
