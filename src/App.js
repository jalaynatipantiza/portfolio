import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav/navbar';
import PhotoIntro from './components/profile/landingpage';
import ProjectCard from './components/projects/projects';
import projects from './mockDatabase'

function App() {
  console.log(projects);
  const projectList = projects.map(project => {
    return (
      <ProjectCard title={project.title} description={project.description} frontEnd={project.frontEnd} backEnd={project.backEnd} />
    )
  })
  return (
    <div style={{backgroundColor: '#14141f'}}>
      <PhotoIntro/>
      <h1 style={{color: "white"}}>Latest Projects!</h1>
      {projectList}
    </div>
 
  );
}

export default App;
