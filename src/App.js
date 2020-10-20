import React  from 'react';
import './App.css';
import About from './components/aboutMe/about';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import PhotoIntro from './components/profile/landingpage';
import Navbar from './components/nav/navbar';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import Slide from 'react-reveal/Slide';
import ProList from '../src/components/projects/proList';


function App() {
  return (
    <Router>
      <main>
        <section>
        <div >
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
