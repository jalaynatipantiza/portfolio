import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "./styles"
import Container from '@material-ui/core/Container';
import img from '../../documents/jalayna.jpeg'

export default function PhotoIntro() {
  const classes = useStyles();
  return (
  <React.Fragment>
  <CssBaseline />
    <Container fixed className={classes.caption}>
      <div className={classes.words}>Learning is a way of life for me, designing and creating are my passion </div>
    </Container>
    <div className={classes.profileContainer}>
    <img className={classes.profilePic} src={img} alt="profilePic"/>
    </div>
  </React.Fragment> 
  );
}
