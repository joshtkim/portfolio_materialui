import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './App.css'

import Home from './components/Home/Home';
import Projects from './components/Project/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import PortNav from './components/PortNav/PortNav'


function App() {
	return (
		<div className="App">
			<PortNav/>
			<Container>
				<Grid container direction='column' alignItems='center' wrap="nowrap">
					<Grid item xs={12}>
						<Home />
					</Grid>
					<Grid item xs={12}>
						<Projects />
					</Grid>
					<Grid item xs={12}>
						<AboutMe />
					</Grid>
					<Grid item xs={12}>
						<Contact />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;