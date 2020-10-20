import React from 'react';
import useStyles from "./aboutStyles"
import DescriptionBox from './descriptionBox';
import TechStackBox from './techStackBox';


export default function About() {
  const classes = useStyles();
  
  
  return (
  <div>
    <div className={classes.aboutBackground}>
    </div>
    <DescriptionBox/>

    <TechStackBox/>
  </div>
  );
}