import React, { useEffect, useState } from 'react';
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
import Slide from 'react-reveal/Slide';

function App() {
  const classes = useStyles();
  const projectList = projects.map(project => {
    return (
        <ProjectCard title={project.title} description={project.description} frontEnd={project.frontEnd} backEnd={project.backEnd} img={project.img} link={project.link} />
    )
  })
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() =>{
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);

  }, [])

  return (
    <Router>
      <main>
        <section>
        <div className={classes.background1} style={{transform: `translateY(-${offsetY * 0.5}px)`}}>
          <Navbar/>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
                <Slide left>
                <Route  exact path="/" component={PhotoIntro} />
                <Route   path="/about" component={About} />
                </Slide>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        <div className={classes.projects}>
          <h1 style={{color: "white", fontFamily: "initial", margin: "40px 0 0", padding: "40px 0 0 ", fontSize: "40px"}}>CHECK OUT MY WORK!</h1>
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
