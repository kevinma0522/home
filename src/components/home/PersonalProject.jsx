import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import PersonalProjectCard from "./PersonalProjectCard";

const PersonalProject = ({ heading, projects, gradient }) => {
  return (
    <Jumbotron
      fluid
      id="personal-projects"
      className="bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <Container className="text-center">
        <h2 className="display-4 pb-5">{heading}</h2>
        <Row className="justify-content-center">
          {projects.length
            ? projects.map((project, index) => (
              <PersonalProjectCard
                key={`personal-project-card-${index}`}
                id={`personal-project-card-${index}`}
                value={project}
                gradient={gradient}
              />
            ))
            : <p>No projects available</p>}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default PersonalProject;
