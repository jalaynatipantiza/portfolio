import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './styles';
import { useHistory } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

export default function Navbar() {
  const classes = useStyles();

  const history = useHistory();

  const handleAboutClick = () => {
    history.push("/about")
  }
  const handleHomeClick = () => {
    history.push("/")
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <HomeIcon className={classes.homeButton} onClick={handleHomeClick} />
          <div className={classes.endButtons}>
            <button className={classes.buttons} onClick={handleAboutClick}>About</button>
            <button className={classes.buttons} onClick={handleAboutClick}>Contact Me</button>
            <button className={classes.buttons} onClick={handleAboutClick}>Blog</button>   
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}