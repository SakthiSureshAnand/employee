import React from 'react';
import './App.css';

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


export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "isOpen": false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('toggle called ')
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">We have Rights to raise a Questions ????</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
        <Form>
        <Container className = "App">
          <FormGroup>
  <Label for="exampleText">Candidate</Label>
          <Input type="textarea" name="text" id="candidate" />
          </FormGroup>
        </Container>
        </Form>
      </div>
    );
  }
}