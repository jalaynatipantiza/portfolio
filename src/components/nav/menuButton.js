import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAboutClick = () => {
    history.push("/about")
  }

  return (
    <div>
      <IconButton edge="start" color="inherit" onClick={handleClick} aria-controls="fade-menu" aria-haspopup="true" >
         <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        >
          
        <MenuItem onClick={handleAboutClick}>About</MenuItem>
        <MenuItem onClick={handleClose}>Contact Me</MenuItem>
        <MenuItem onClick={handleClose}>Blog</MenuItem>
      </Menu>

    </div>
  );
}