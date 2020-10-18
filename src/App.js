import React, { useState } from 'react';
import './App.css';
import useStyles from "./appStyles"
import About from './components/aboutMe/about';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import PhotoIntro from './components/profile/landingpage';
import Navbar from './components/nav/navbar';
import Slide from 'react-reveal/Slide';
import ProList from '../src/components/projects/proList';


function App() {
  const classes = useStyles();
 
  const [offsetY, setOffsetY] = useState(0)

  return (
    <Router>
      <main>
        <section>
        <div className={classes.background1} style={{transform: `translateY(-${offsetY * 0.5}px)`}}>
        <Navbar/>
        <Route render={({location}) => (
       
              <Switch location={location}>
                <Slide left>
                <Route  exact path="/" component={PhotoIntro} />
                </Slide>
              </Switch>
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
