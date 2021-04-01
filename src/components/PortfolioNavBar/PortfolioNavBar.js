import React from 'react'

import './PortfolioNavBar.css'
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function PortfolioNavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="sticky-nav" >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default PortfolioNavBar
