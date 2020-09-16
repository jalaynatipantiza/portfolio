import React from 'react';
import './App.css';
import useStyles from "./appStyles"
import About from './components/aboutMe/about';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import ProjectCard from './components/projects/projects';
import projects from './mockDatabase'
import PhotoIntro from './components/profile/landingpage';
import Navbar from './components/nav/navbar';
import BottomNav from './components/breadcrumbs/bottomNav'
import { CSSTransition, TransitionGroup} from 'react-transition-group';


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
          <Navbar/>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={PhotoIntro} />
                <Route path="/about" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        <div className={classes.projects}>
          <h1 style={{color: "white", fontFamily: "initial", fontSize: "x-large"}}>CHECK OUT MY WORK!</h1>
          <Route path='/' render={() => projectList} />
        </div>
        <BottomNav/>
          </div>
        </section>
      </main>
    </Router>
  );
}

export default App;
