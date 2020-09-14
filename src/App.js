import React from 'react';
import './App.css';
import PhotoIntro from './components/profile/landingpage';
import ProjectCard from './components/projects/projects';
import projects from './mockDatabase'
import useStyles from "./appStyles"
import BottomNav from './components/breadcrumbs/bottomNav';

function App() {
  const classes = useStyles();
  const projectList = projects.map(project => {
    return (
      <ProjectCard title={project.title} description={project.description} frontEnd={project.frontEnd} backEnd={project.backEnd} img={project.img} link={project.link} />
    )
  })
  return (
    <div style={{backgroundColor: '#14141f'}}>
      <PhotoIntro/>
      <div className={classes.projects}>
      <h1 style={{color: "white"}}>Latest Projects!</h1>
      {projectList}
      </div>
      <BottomNav/> 
    </div>
 
  );
}

export default App;
