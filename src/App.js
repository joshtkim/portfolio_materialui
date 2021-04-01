import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import './App.css'

import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid xs={12} >
            <AboutMe />
          </Grid>
          <Grid xs={12}>
            <Header />
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;