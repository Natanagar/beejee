import React, { Component } from 'react';
import { Alert, Col, Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SortTable from './SortTable';


export default class Task extends React.Component {
    
   
  render() {
    const { submit, reset, userHandleChange, checkedEmail, addNotes, checkedPassword, 
      checkedImage, invalidEmail, isTaskShow, handleChangeImage, handleChangeTask, getDatasFromServer, user } = this.props;
      
   
    
    return (
      <div>
        <SortTable
          getDatasFromServer={getDatasFromServer} />
        <Form 
        className="validationForm"
        role="form"
        >
        <h2>Add Task</h2>
            { this.props.isMailSent ? <div className="success">Thank you for submission. Someone will be in contact with you shortly.</div> : null }

          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
              <Input 
              type="email" 
              name="email"
              aria-labelledby="email" 
              id="exampleEmail" 
              placeholder="example@example.com"
              onChange={userHandleChange}
              />
            </Col>
            
              {checkedEmail ? null : <FormText color="danger" style ={{textAlign: 'center', marginLeft: '225px'}}>{`Your email ${invalidEmail} is not valid`}</FormText>}

          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
              <Input 
              type="password" 
              name="password" 
              id="examplePassword"
              aria-labelledby="password" 
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
              Only jpeg/png/gif files maximum resolution is 320x240 px.
              </FormText>
              {(!checkedImage) ? (<FormText color="danger">Your image has invalid format</FormText>) : null}
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
      </div>
      
    );
  }
}
Input.propTypes = {
  children: PropTypes.node,
  // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
  invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

Form.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'form'
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

FormGroup.propTypes = {
  children: PropTypes.node,
  // Applied the row class when true, does nothing when false
  row: PropTypes.bool,
  // Applied the form-check class when true, form-group when false
  check: PropTypes.bool,
  inline: PropTypes.bool,
  // Applied the disabled class when the check and disabled props are true, does nothing when false
  disabled: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.string, // default: 'div'
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

FormText.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'small'
  color: PropTypes.string, // default: 'muted'
  className: PropTypes.string,
  cssModule: PropTypes.object,
};
Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,

  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  onClick: PropTypes.func,
  size: PropTypes.string
}
