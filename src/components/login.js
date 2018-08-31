import React from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, UncontrolledDropdown, FormText
} from 'reactstrap';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            "username": "",
            "password": ""
        }
    }


    render() {
        return (
            <div>
            <Form>
            <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
            </Form>
            </div>
        )
    }
}

export default Login;