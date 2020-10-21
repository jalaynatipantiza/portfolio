import React from 'react';
import useStyles from "./descriptionStyles"



export default function DescriptionBox() {
  const classes = useStyles();

  return (
    <div className={classes.mainBox}>
      <div className={classes.twoPic}>
      <div className={classes.workspacePic} alt="Work Space"></div>
      <div className={classes.me} alt="me"></div>
      </div>
      <div className={classes.descriptionOfMe}>
      <p>Full stack Web Developer who strives to be always learning and improving skill sets. Highly self motivated and passionate about collaboration, I seek to expand my creativity in front-end development. Fluent in three languages: Spanish, French and English.</p>
      <p>In my spare time, you'll catch me with my camera creating videos and taking photos! Checkout some of my work on my blog here</p>
      </div>
    </div>
  );
}