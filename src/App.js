import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import Navbar from './Navbar';
import VerticalBar from './Barchart';
import PieChart from './Pie';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: theme.spacing(90),
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    width: 300,
    height: 400,
    marginTop: 50,
    margin: '0 auto',
    textAlign: 'center'
  },
  Loginform: {
    marginTop: theme.spacing(10)
  }
}));



function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <br />
      <PieChart />
      <br />
      <VerticalBar />
      <br />
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <form className={classes.Loginform} autoComplete="off">
            <h1>Login</h1>
            <TextField id="standard-basic" label="Email" />
            <br />
            <br />
            <TextField id="standard-basic" label="Password" />
            <br />
            <br />
            <Button variant="contained" color="primary">
              Login
            </Button>
          </form>
        </Paper>
      </div>
    </React.Fragment>
  );
}

export default App;
