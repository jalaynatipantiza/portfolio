import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './styles';
import { useHistory } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

export default function Navbar() {
  const classes = useStyles();

  const history = useHistory();

  const handleBlog = () => {
    alert("Feature coming soon!")
  }
  const handleHomeClick = () => {
    history.push("/")
  }
  const handleProjectsClick = () => {
    history.push("/projects")
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {/* <HomeIcon className={classes.homeButton} onClick={handleHomeClick} /> */}
          <button className={classes.homeButton} onClick={handleHomeClick}>Jalayna</button>
          <div className={classes.endButtons}>
            <button className={classes.buttons} onClick={handleProjectsClick}>Projects</button>
            <button className={classes.buttons} onClick={handleBlog}>Blog</button>   
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}