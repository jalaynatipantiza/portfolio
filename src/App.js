import React  from 'react';
import './App.css';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import PhotoIntro from './components/profile/landingpage';
import Navbar from './components/nav/navbar';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import Slide from 'react-reveal/Slide';
import ProList from '../src/components/projects/proList';
import DescriptionBox from './components/aboutMe/descriptionBox';
import TechStackBox from './components/aboutMe/techStackBox';


function App() {
  return (
    <Router>
      <main>
        <section>
        <div >
        <Navbar/>
        {/* <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            > */}
              {/* <Switch location={location}> */}
                <Route  exact path="/" component={PhotoIntro} />
                <Slide left>
                <Route  exact path="/" component={ DescriptionBox} />
                </Slide>
                <Route  exact path="/" component={ TechStackBox} />
              {/* </Switch> */}
            {/* </CSSTransition>
           </TransitionGroup>
        )} /> */}
        <Route path="/projects" component={ProList}/>
          </div>
        </section>
      </main>
    </Router>
  );
}

export default App;
