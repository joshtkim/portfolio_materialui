import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css'

import Home from './components/Home/Home';
import Projects from './components/Project/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import PortNav from './components/PortNav/PortNav'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
		width: '100%',
		backgroundColor: 'black',
  },

}));

function App() {
	
	const classes = useStyles();

	return (
		<div className="App">
			<PortNav/>
			<Container>
				<Grid container direction='column' alignItems='center' wrap="nowrap">
					<Grid item>
						<Home />
					</Grid>
					<Grid item className={classes.root}>
						<Projects />
					</Grid>
					<Grid item>
						<AboutMe />
					</Grid>
					<Grid item className={classes.root}>
						<Contact />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;