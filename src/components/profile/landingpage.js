import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from "./styles"
import Navbar from '../nav/navbar';

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <Navbar/>
        <Typography component="div" className={classes.background}/> 
        <img  src={require('../../docs/')}></img>
    </React.Fragment>
  );
}