import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "./styles"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Navbar from '../nav/navbar';
import img from '../../documents/jalayna.jpeg'

export default function SimpleContainer() {
  const classes = useStyles();
  return (
  <React.Fragment>
  <CssBaseline />
    <div className={classes.background}>
    <Navbar/>
    <Container fixed className={classes.caption}>
      <div className={classes.words}>Learning is a way of life for me, designing and creating is my passion</div>
    </Container>
    <div className={classes.profileContainer}>
    <img className={classes.profilePic} src={img} alt="profilePic"/>
    </div>
    </div>
  </React.Fragment> 
  );
}
