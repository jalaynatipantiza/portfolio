import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav/navbar';
import PhotoIntro from './components/profile/landingpage';
import ProjectCard from './components/projects/projects';

function App() {
  return (
    <div style={{backgroundColor: '#14141f'}}>
      <PhotoIntro/>
      <h1 style={{color: "white"}}>Latest Projects!</h1>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
 
  );
}

export default App;
