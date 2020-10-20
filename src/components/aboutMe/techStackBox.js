import React from 'react';
import useStyles from "../techStackStyles"
import Typography from '@material-ui/core/Typography';
import css from '../../documents/Css.png'
import js from '../../documents/javaScript.png';
import reactlogo from '../../documents/react-logo.png';
import ajax from '../../documents/ajax.jpg';
import bootstrap from '../../documents/bootstrap.jpeg';
import cypress from '../../documents/cypress.png';
import git from '../../documents/git.png';
import html from '../../documents/html.png';
import jest from '../../documents/jest.png';
import materialui from '../../documents/materialUi.png';
import nodejs from '../../documents/nodejs.jpeg';
import ruby from '../../documents/rubyRails.png';
import sql from '../../documents/sql.jpeg';
import storyBook from '../../documents/storyBook.png'

export default function TechStackBox() {
  const classes = useStyles();

  return (
    <div className={classes.techStackBoxMain}>
        <Typography style={{display: "flex", justifyContent: "center"}} color="textSecondary">
          Tech stack
        </Typography>
        <div className={classes.imgSemiCircle}>
          <img src={css} alt="css" className={classes.logo}></img>
          <img src={js} alt="js logo" className={classes.logo}></img>
          <img src={reactlogo} alt="reactlogo" className={classes.logo}></img>
          <img src={ajax} alt="ajax logo" className={classes.logo}></img>
          <img src={bootstrap} alt="boostrap logo" className={classes.logo}></img>
          <img src={cypress} alt="cypress logo" className={classes.logo}></img>
          <img src={git} alt="git logo" className={classes.logo}></img>
          <img src={html} alt="html logo" className={classes.logo}></img>
          <img src={jest} alt="jest logo" className={classes.logo}></img>
          <img src={materialui} alt="material ui logo" className={classes.logo}></img>
          <img src={nodejs} alt="nodejs logo" className={classes.logo}></img>
          <img src={ruby} alt="ruby logo" className={classes.logo}></img>
          <img src={sql} alt="sql logo" className={classes.logo}></img>
          <img src={storyBook} alt="storybook logo" className={classes.logo}></img>

        </div>
        <div className={classes.centerCircle}></div>
  </div>
  );
}