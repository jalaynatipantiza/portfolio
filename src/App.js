import React from 'react';
import './App.css';
// import useStyles from "./appStyles"
import About from './components/aboutMe/about';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Home from './components/home';


function App() {
  // const classes = useStyles();

  return (
    <Router>
      <main>
        <section>
          
            <Route exact={true} path='/about' component={About} />
            <Route path='/' component={Home}/>
          
        </section>
      </main>
    </Router>
  );
}

export default App;
