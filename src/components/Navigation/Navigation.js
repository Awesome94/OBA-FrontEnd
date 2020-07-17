import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authentication } from '../../_reducers/authentication.reducer';
import { issignedIn, removeUserSession } from '../../helpers';

import { userActions } from '../../_actions';

const Navigation = (props) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(userActions.logout());
  };

  if (!issignedIn()) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">OBA-ANALYZER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav />
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="outline-primary" variant="light">
      <Navbar.Brand href="#home">OBA-ANALYZER</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <Nav.Link href="/">Dashboard</Nav.Link>
          <Nav.Link onClick={() => { handleSignOut(); }}>Sign Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
