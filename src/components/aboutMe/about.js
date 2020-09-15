import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from "./aboutStyles"
import img from '../../documents/jalayna.jpeg'
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DescriptionBox from './descriptionBox';
import TechStackBox from './techStackBox';


export default function About() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
  <React.Fragment>
  <CssBaseline />
    <div className={classes.aboutProfileImg}>
      <img className={classes.profilePicture} src={img} alt="profilePic"/>
      
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Show"
            />
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
              <Paper elevation={4} className={classes.paper}>
                <DescriptionBox/>
              </Paper>
            </Slide>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
              <Paper elevation={4} className={classes.paper}>
              <TechStackBox/>
              </Paper>
            </Slide>
            
          </div>
        </div>

    </div>
  </React.Fragment> 
  );
}