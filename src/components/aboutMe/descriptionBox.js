import React from 'react';
import useStyles from "./descriptionStyles"



export default function DescriptionBox() {
  const classes = useStyles();

  return (
    <div className={classes.mainBox}>
      <div className={classes.twoPic}>
      <div className={classes.profilePicture} alt="Me"></div>
      <div className={classes.random} alt="random"></div>
      </div>
    </div>
  );
}