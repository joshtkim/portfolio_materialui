import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import './App.css'

import Home from './components/Home/Home';
import Projects from './components/Project/Projects';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import PortNav from './components/PortNav/PortNav'


function App() {
  return (
    <div className="App">
      <PortNav />
      <Container>
        <Grid container>
          <Grid xs={12} className="home">
            <Home />
          </Grid>
          <Grid xs={12} className="projects">
            <Projects />
          </Grid>
          <Grid xs={12} className="skills">
            <Skills />
          </Grid>
          <Grid xs={12} className="contact">
            <Contact />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;