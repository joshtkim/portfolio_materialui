import React from 'react';
import { Container, Grid } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container>
          <Grid item xs={12} md={4} lg={3} style={{backgroundColor: 'blue'}}>
            left
          </Grid>
          <Grid item xs style={{backgroundColor: 'red'}}>
            right
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;