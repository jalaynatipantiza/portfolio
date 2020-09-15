import React from 'react';
import useStyles from "./descriptionStyles"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



export default function DescriptionBox() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}  color="textSecondary" gutterBottom>
          A Little About Me
        </Typography>
        <Typography variant="body2"  component="p">
        Full stack Web Developer who strives to be always learning and improving skill sets. Lighthouse Labs graduate that is highly self motivated and passionate about collaboration. I seek to expand my creativity in front-end development and finding new ways to make a user interface experience simple and enjoyable to use.
        <br />
         Fluent in three languages: Spanish, French and English
        </Typography>
      </CardContent>
    </Card>
  );
}