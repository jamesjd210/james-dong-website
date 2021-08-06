import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Resume from './components/Resume.js'; 
import Projects from './components/Projects.js'; 
import Contact from './components/Contact.js';
import About from './components/About.js'; 
import { Container, Row, Col } from 'react-bootstrap';
import React from "react"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="App">
          <Row className = "NavRow">
            <div className="navigation">
              <div className="navigation-sub">
                <Link to="/" className="item">About </Link> 
                <Link to="/projects" className="item">Projects</Link> 
                <Link to="/resume" className="item">Resume</Link> 
                <Link to="/contact" className="item">Contact</Link>
              </div>
            </div>
          </Row>

          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          
      </Container>
    </BrowserRouter>
  );
}

export default App;
