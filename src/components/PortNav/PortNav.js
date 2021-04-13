import React from 'react'

import { Navbar,Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function PortNav () {

	return(
		<div className="portnav">
			<div className="col-md-12">
				<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#projects">Projects</Nav.Link>
							<Nav.Link href="#about-me">About Me</Nav.Link>
							<Nav.Link href="#contact">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	)  
}

export default PortNav;