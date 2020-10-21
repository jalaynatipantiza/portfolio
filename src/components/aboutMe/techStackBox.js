import React from 'react';
import useStyles from "../techStackStyles"
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
      <h1 className={classes.h1}>Tech stack</h1>
      <div className={classes.imgSemiCircle}>
        <img src={css} style={{top: "182vh", left: "22vw", position: "absolute", zIndex: "100"}} alt="css"  className={classes.logo}></img>
        <img src={js} style={{top: "173vh", left: "24vw", position: "absolute", zIndex: "100"}}alt="js logo" className={classes.logo}></img>
        <img src={reactlogo} style={{top: "163vh", left: "26vw", position: "absolute", zIndex: "100"}} alt="reactlogo" className={classes.logo}></img>
        <img src={ajax} style={{top: "156vh", left: "30vw", position: "absolute", zIndex: "100"}} alt="ajax logo" className={classes.logo}></img>
        <img src={bootstrap} style={{top: "152vh", left: "34vw", position: "absolute", zIndex: "100"}} alt="boostrap logo" className={classes.logo}></img>
        <img src={cypress} style={{top: "150vh", left: "40vw", position: "absolute", zIndex: "100"}} alt="cypress logo" className={classes.logo}></img>
        <img src={git} style={{top: "149vh", left: "45vw", position: "absolute", zIndex: "100"}} alt="git logo" className={classes.logo}></img>
        <img src={html} style={{top: "150vh", left: "51vw", position: "absolute", zIndex: "100"}} alt="html logo" className={classes.logo}></img>
        <img src={jest} style={{top: "152vh", left: "57vw", position: "absolute", zIndex: "100"}} alt="jest logo" className={classes.logo}></img>
        <img src={materialui} style={{top: "156vh", left: "62vw", position: "absolute", zIndex: "100"}} alt="material ui logo" className={classes.logo}></img>
        <img src={nodejs} style={{top: "160vh", left: "67vw", position: "absolute", zIndex: "100"}} alt="nodejs logo" className={classes.logo}></img>
        <img src={ruby} style={{top: "168vh", left: "70vw", position: "absolute", zIndex: "100"}} alt="ruby logo" className={classes.logo}></img>
        <img src={sql} style={{top: "177vh", left: "72vw", position: "absolute", zIndex: "100"}} alt="sql logo" className={classes.logo}></img>
        <img src={storyBook} style={{top: "184vh", left: "74vw", position: "absolute", zIndex: "100"}} alt="storybook logo" className={classes.logo}></img>
      </div>
      <div className={classes.centerCircle}></div>
  </div>
  );
}