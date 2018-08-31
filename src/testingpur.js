// import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Button , Form, FormGroup, Label, Input, FormText ,Col } from 'reactstrap';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Button size ="sm" outline color="primary"> Teste</Button>
//         <Form>
//          <FormGroup row>
//           <Label for="exampleEmail" sm={2}>Email</Label>
//           <Col sm={10}>
//             <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="examplePassword" sm={2}>Password</Label>
//           <Col sm={10}>
//             <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//           </Col>
//         </FormGroup>
//         </Form>
//       </div>
//     );

//   }
// }

// export default App;

// import React from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     };
//   }

//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="faded" light>
//           <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
//           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//           <Collapse isOpen={!this.state.collapsed} navbar>
//             <Nav navbar>
//               <NavItem>
//                 <NavLink href="/components/">Components</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }