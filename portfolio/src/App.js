import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Resume from './Resume.js'; 
import Projects from './Projects.js'; 
import Contact from './Contact.js';
import About from './About.js'; 
import React from "react"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          
          <div className="navigation">
            <div className="navigation-sub">
              <Link to="/" className="item">About </Link> 
              <Link to="/projects" className="item">Projects</Link> 
              <Link to="/resume" className="item">Resume</Link> 
              <Link to="/contact" className="item">Contact</Link>
            </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
