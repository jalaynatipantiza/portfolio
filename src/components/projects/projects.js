import React from 'react';  
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import useStyles from "./styles"
import Link from '@material-ui/core/Link';

export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <div  className={classes.root}>
      <Paper className={classes.paper} >
        <Link href={props.link} target="_blank" style={{ textDecoration: 'none', color: "black" }} color="inherit">
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Front-end: {props.frontEnd}
                </Typography>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                Back-end: {props.backEnd}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Link>
      </Paper>
    </div>
  );
}