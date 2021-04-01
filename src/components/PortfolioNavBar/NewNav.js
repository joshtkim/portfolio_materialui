import React from 'react'

	import { Navbar,Nav } from 'react-bootstrap'

function NewNav () {

	return(
		<div>
			<div className="row">
				<div className="col-md-12">
					<Navbar bg="dark" variant="dark" expand="lg" fixed="sticky">
						<Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
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
			</div>
		</div>
	)  
}

export default NewNav;