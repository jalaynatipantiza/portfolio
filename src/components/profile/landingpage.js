import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "./styles"
import Navbar from '../nav/navbar';
import img from '../../documents/jalayna.jpeg'

export default function SimpleContainer() {
  const classes = useStyles();
  return (
  <React.Fragment>
  <CssBaseline />
    <div className={classes.background}>
    <Navbar/>
    <div className={classes.profileContainer}>
    <img className={classes.profilePic} src={img} alt="landscape"/>
    </div>
    </div>
  </React.Fragment> 
  );
}
