import React from 'react';
import { Container, Grid } from '@material-ui/core'

import Profile from './components/Profile';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid item xs={12} md={4} lg={3} style={{backgroundColor: 'blue'}}>
            <Profile />
          </Grid>
          <Grid item xs style={{backgroundColor: 'red'}}>
            <Header />
            <Portfolio />
            <Resume />
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;