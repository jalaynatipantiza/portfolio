import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "./aboutStyles"
import img from '../../documents/jalayna.jpeg'

export default function About() {
  const classes = useStyles();
  return (
  <React.Fragment>
  <CssBaseline />
    <div className={classes.aboutProfileImg}>
    <img className={classes.profilePicture} src={img} alt="profilePic"/>
    </div>
  </React.Fragment> 
  );
}