import React, { Component } from 'react';
import ToDo from './components/ToDo';
import Products from './components/Products';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <ToDo/>
          </Grid>
          <Grid item xs={6}>
            <Products/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;