import React from 'react';
import useStyles from "../techStackStyles"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



export default function TechStackBox() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}  color="textSecondary" gutterBottom>
          Tech stack
        </Typography>
        <Typography variant="body2"  component="p">
        Languages: JavaScript, HTML/CSS, Ruby
        <br/>
        Frameworks/Libraries/Environments: NodeJS, React, Ajax, Express, jQuery, Rails, bootstrap and  Visual Studio
        <br/>
        Systems and databases: SQL, Git
        <br/>
        Testing: StoryBook, Jest and Cypress
        <br />
         
        </Typography>
      </CardContent>
    </Card>
  );
}