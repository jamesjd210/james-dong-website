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
    <div className="App">
        <div className="navigation">
          <div className="navigation-sub">
            <a href="" className="item">Projects </a>
            <a href="" className="item">Resume</a>
            <a href="" className="item">About</a>
            <a href="" className="item">Contact</a>
          </div>
        </div>
    </div>
  );
}

export default App;
