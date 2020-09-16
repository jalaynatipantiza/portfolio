import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "./aboutStyles"
import img from '../../documents/jalayna.jpeg'
import Paper from '@material-ui/core/Paper';
import DescriptionBox from './descriptionBox';
import TechStackBox from './techStackBox';


export default function About() {
  const classes = useStyles();
  
  return (
  <React.Fragment>
  <CssBaseline />
    <div className={classes.aboutProfileImg}>
      <img className={classes.profilePicture} src={img} alt="profilePic"/>
        <div className={classes.root}>
          <Paper elevation={4} className={classes.paper}>
            <DescriptionBox/>
          </Paper>
          <Paper elevation={4} className={classes.paper}>
          <TechStackBox/>
          </Paper>
        </div>
    </div>
  </React.Fragment> 
  );
}