import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

const Navigation = (props) => {
  if(props.issignedIn){
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">OBA-ANALYZER</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#home">Register</Nav.Link>
      <Nav.Link href="#link">Sign In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
  } else {
    return(
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="outline-primar" variant="light">
  <Navbar.Brand href="#home">OBA-ANALYZER</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#home">Dashboard</Nav.Link>
      <Nav.Link href="#link">Profile</Nav.Link>
      <Nav.Link href="#link2">Sign Out</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}
export default Navigation;