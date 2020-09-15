import React from 'react';
import './App.css';
import PhotoIntro from './components/profile/landingpage';
import ProjectCard from './components/projects/projects';
import projects from './mockDatabase'
import useStyles from "./appStyles"
import BottomNav from './components/breadcrumbs/bottomNav';
import Navbar from './components/nav/navbar';
import About from './components/aboutMe/about';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
  const classes = useStyles();

  const projectList = projects.map(project => {
    return (
        <ProjectCard title={project.title} description={project.description} frontEnd={project.frontEnd} backEnd={project.backEnd} img={project.img} link={project.link} />
    )
  })
  return (
    <Router>
      <main>
        <section>
          <div style={{backgroundColor: '#14141f'}}>
            <Route  path='/' component={Navbar} />
  
            <Route exact={true} path='/' component={PhotoIntro} />
            <Route exact={true} path='/about' component={About} />
            <div className={classes.projects}>
              <h1 style={{color: "white", fontFamily: "initial", fontSize: "x-large"}}>CHECK OUT MY WORK!</h1>
              <Route path='/' render={() => projectList} />
            </div>
            <Route path='/' component={BottomNav}/>

          </div>
        </section>
      </main>
    </Router>
  );
}

export default App;
