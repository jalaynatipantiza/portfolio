import * as React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import useStyles from './bottomNavStyles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" style={{color: "white"}}>
      <Link
        href="https://github.com/jalaynatipantiza"
        className={classes.link}
        target="_blank"
      >
        <GitHubIcon className={classes.icon} />
       GitHub
      </Link>
      <Link
        href="https://www.linkedin.com/in/jalayna-tipantiza-1832a71b3/"
        className={classes.link}
        target="_blank"
      >
        <LinkedInIcon className={classes.icon}/>
        LinkedIn
      </Link>
      
    </Breadcrumbs>
  );
}