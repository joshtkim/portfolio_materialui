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
          <Grid item xs={12} md={4} lg={3}>
            <AboutMe />
          </Grid>
          <Grid item xs>
            <Header />
            <Router>
              <Switch>
                <Route path='portfolio'>
                  <Portfolio />
                </Route>
                <Route path='/'>
                  <Resume />
                </Route>
              </Switch>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;