import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';
import '../styles/Customer.css';

class Customer extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="slogin">
      <div className='login'>
          <h2>Seller Login</h2><br/>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" autoComplete='off' required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" autoComplete='off' required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
      </div>
    </div>
        );
    }
}
export default Customer;
