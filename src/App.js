import React, { useEffect, useState } from 'react';
import './App.css';
import useStyles from "./appStyles"
import About from './components/aboutMe/about';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import PhotoIntro from './components/profile/landingpage';
import Navbar from './components/nav/navbar';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import Slide from 'react-reveal/Slide';
import ProList from '../src/components/projects/proList';


function App() {
  const classes = useStyles();
 
  const [offsetY, setOffsetY] = useState(0)
  // const handleScroll = () => setOffsetY(window.pageYOffset)

  // useEffect(() =>{
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll);

  // }, [])

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
                </Slide>
              </Switch>
            </CSSTransition>
           </TransitionGroup>
        )} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={ProList}/>
          </div>
        </section>
      </main>
    </Router>
  );
}

export default App;
