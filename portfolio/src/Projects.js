import { Container, Row, Col } from 'react-bootstrap';
import Thumbnail from "./Thumbnail.js"
import React from "react"
 
function Projects(props) {
  return (
    <Container>
      <Row>
        <div>
            <h1>Projects</h1>
            <Thumbnail
              link = ""
              image = ""
              title = ""
              category = ""
              />
        </div>
      </Row>
    </Container>
  )
}
 
export default Projects;