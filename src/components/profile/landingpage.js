import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "./styles"
import Container from '@material-ui/core/Container';
import img from '../../documents/profilePic.jpg'
import BottomNav from '../../components/breadcrumbs/bottomNav'


export default function PhotoIntro() {
  const classes = useStyles();
  const [offsetY, setOffsetY] = useState(0)
  return (
  <React.Fragment>
  <CssBaseline />
  <div className={classes.background1} style={{transform: `translateY(-${offsetY * 0.5}px)`}}>
    <Container fixed className={classes.caption}>
      <div className={classes.words}>Hi. I'm Jalayna.</div>
    </Container>
    <div className={classes.profileContainer}>
    <img className={classes.profilePic} src={img} alt="profilePic"/>
    <BottomNav/>
    </div>  
  </div>
  </React.Fragment> 
  );
}
