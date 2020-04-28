/* eslint-disable no-unused-expressions */
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './navbar.css';

function menubar() {
  return (
  <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home">
        <img
          
          width="30"
          height="30"
          className="d-inline-block align-top"
          
        />운면따
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#link" className="aaa">로그인</Nav.Link>
      <Nav.Link href="#link" className="aaa">회원가입</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

  );
  }
export default menubar;